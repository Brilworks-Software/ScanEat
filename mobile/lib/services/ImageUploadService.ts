import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
    putFile
  } from '@react-native-firebase/storage';
  import { storage } from '../firebase';
  
  /**
   * Upload result structure
   */
  export interface UploadResultData {
    downloadURL: string;
    fullPath: string;
    bucket: string;
    name: string;
    size: number;
    contentType: string;
    timeCreated: string;
    updated: string;
  }
  
  /**
   * ImageUploadService handles image upload operations to Firebase Storage
   */
  export class ImageUploadService {
    /**
     * Uploads an image file to Firebase Storage
     * Supports both File objects (web) and URI strings (React Native)
     * @param fileOrUri - The image file (File object) or URI string to upload
     * @param fileName - Optional custom file name (defaults to timestamp + original name)
     * @param path - Optional custom path in storage (defaults to 'images/')
     * @returns Promise<UploadResultData>
     */
    static async uploadImage(
      fileOrUri: File | string,
      fileName?: string,
      path: string = 'nutrition-analysis/'
    ): Promise<UploadResultData> {
      try {
        let finalFileName: string;
        let contentType = 'image/jpeg';
        let fileSize: number | undefined;

        // Handle File object (web)
        if (fileOrUri instanceof File) {
          // Validate file type with null check
          if (!fileOrUri.type || !fileOrUri.type.startsWith('image/')) {
            throw new Error('File must be an image');
          }

          // Validate file size (max 10MB)
          const maxSize = 10 * 1024 * 1024; // 10MB in bytes
          if (fileOrUri.size > maxSize) {
            throw new Error('File size must be less than 10MB');
          }

          contentType = fileOrUri.type;
          fileSize = fileOrUri.size;
          finalFileName = fileName || `${Date.now()}_${fileOrUri.name}`;
        } 
        // Handle URI string (React Native)
        else if (typeof fileOrUri === 'string') {
          // Extract file extension from URI or use default
          const uriExtension = fileOrUri.split('.').pop()?.toLowerCase() || 'jpg';
          const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'];
          
          if (uriExtension && validExtensions.includes(uriExtension)) {
            contentType = `image/${uriExtension === 'jpg' ? 'jpeg' : uriExtension}`;
          }
          
          finalFileName = fileName || `image_${Date.now()}.${uriExtension}`;
        } else {
          throw new Error('Invalid file or URI provided');
        }

        const fullPath = `${path}${finalFileName}`;

        // Create storage reference
        const storageRef = ref(storage, fullPath);

        // Upload based on input type
        let snapshot: any;
        let uploadRef = storageRef;
        
        if (fileOrUri instanceof File) {
          // For File objects (web), convert to Blob and upload using uploadBytes
          const blob = await fileOrUri.arrayBuffer();
          snapshot = await uploadBytes(storageRef, new Uint8Array(blob), {
            contentType: contentType,
          });
          uploadRef = snapshot.ref;
        } else {
          // For URI strings (React Native), use putFile which accepts local file paths
          // React Native Firebase Storage putFile returns a task result
          snapshot = await putFile(storageRef, fileOrUri, {
            contentType: contentType,
          });
          // Use the original storageRef for React Native since snapshot doesn't have ref
          uploadRef = storageRef;
        }

        // Get download URL using the appropriate reference
        const downloadURL = await getDownloadURL(uploadRef);

        // Return upload result data
        // Handle both web (uploadBytes) and React Native (putFile) snapshot structures
        return {
          downloadURL,
          fullPath: uploadRef.fullPath,
          bucket: uploadRef.bucket,
          name: uploadRef.name,
          size: snapshot?.metadata?.size || snapshot?.bytesTransferred || fileSize || 0,
          contentType: snapshot?.metadata?.contentType || contentType,
          timeCreated: snapshot?.metadata?.timeCreated || new Date().toISOString(),
          updated: snapshot?.metadata?.updated || snapshot?.metadata?.updatedTime || new Date().toISOString(),
        };
      } catch (error: any) {
        console.error('Error uploading image:', error);
        throw new Error(`Failed to upload image: ${error.message}`);
      }
    }
  
    /**
     * Uploads multiple images to Firebase Storage
     * @param filesOrUris - Array of image files (File objects) or URI strings to upload
     * @param path - Optional custom path in storage (defaults to 'images/')
     * @returns Promise<UploadResultData[]>
     */
    static async uploadMultipleImages(
      filesOrUris: (File | string)[],
      path: string = 'images/'
    ): Promise<UploadResultData[]> {
      try {
        const uploadPromises = filesOrUris.map((fileOrUri, index) => {
          const fileName = fileOrUri instanceof File 
            ? `${Date.now()}_${index}_${fileOrUri.name}`
            : `image_${Date.now()}_${index}.jpg`;
          return this.uploadImage(fileOrUri, fileName, path);
        });

        return await Promise.all(uploadPromises);
      } catch (error: any) {
        console.error('Error uploading multiple images:', error);
        throw new Error(`Failed to upload multiple images: ${error.message}`);
      }
    }
  
    /**
     * Deletes an image from Firebase Storage
     * @param fullPath - The full path of the image in storage
     * @returns Promise<void>
     */
    static async deleteImage(fullPath: string): Promise<void> {
      try {
        const imageRef = ref(storage, fullPath);
        await deleteObject(imageRef);
        console.log('Image deleted successfully:', fullPath);
      } catch (error: any) {
        console.error('Error deleting image:', error);
        throw new Error(`Failed to delete image: ${error.message}`);
      }
    }
  
    /**
     * Gets the download URL for an existing image
     * @param fullPath - The full path of the image in storage
     * @returns Promise<string>
     */
    static async getImageDownloadURL(fullPath: string): Promise<string> {
      try {
        const imageRef = ref(storage, fullPath);
        return await getDownloadURL(imageRef);
      } catch (error: any) {
        console.error('Error getting download URL:', error);
        throw new Error(`Failed to get download URL: ${error.message}`);
      }
    }
  
    /**
     * Validates if a file is a valid image
     * @param file - The file to validate
     * @returns boolean
     */
    static validateImageFile(file: File): { isValid: boolean; error?: string } {
      // Check if it's an image with null check
      if (!file.type || !file.type.startsWith('image/')) {
        return { isValid: false, error: 'File must be an image' };
      }
  
      // Check file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        return { isValid: false, error: 'File size must be less than 10MB' };
      }
  
      // Check file size (min 1KB to avoid empty files)
      const minSize = 1024; // 1KB
      if (file.size < minSize) {
        return { isValid: false, error: 'File size must be at least 1KB' };
      }
  
      // Check supported formats
      const supportedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/bmp',
      ];
  
      if (!supportedTypes.includes(file.type)) {
        return {
          isValid: false,
          error: 'Unsupported image format. Supported formats: JPEG, PNG, GIF, WebP, BMP'
        };
      }
  
      return { isValid: true };
    }
  }
  