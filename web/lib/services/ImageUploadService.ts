import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  UploadResult,
  StorageReference
} from 'firebase/storage';
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
   * @param file - The image file to upload
   * @param path - Optional custom path in storage (defaults to 'images/')
   * @param fileName - Optional custom file name (defaults to timestamp + original name)
   * @returns Promise<UploadResultData>
   */
  static async uploadImage(
    file: File,
    path: string = 'images/',
    fileName?: string
  ): Promise<UploadResultData> {
    try {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('File must be an image');
      }

      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        throw new Error('File size must be less than 10MB');
      }

      // Generate unique file name if not provided
      const finalFileName = fileName || `${Date.now()}_${file.name}`;
      const fullPath = `${path}${finalFileName}`;

      // Create storage reference
      const storageRef = ref(storage, fullPath);

      // Upload file
      const snapshot = await uploadBytes(storageRef, file);

      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Return upload result data
      return {
        downloadURL,
        fullPath: snapshot.ref.fullPath,
        bucket: snapshot.ref.bucket,
        name: snapshot.ref.name,
        size: snapshot.metadata.size,
        contentType: snapshot.metadata.contentType || '',
        timeCreated: snapshot.metadata.timeCreated,
        updated: snapshot.metadata.updated,
      };
    } catch (error: any) {
      console.error('Error uploading image:', error);
      throw new Error(`Failed to upload image: ${error.message}`);
    }
  }

  /**
   * Uploads multiple images to Firebase Storage
   * @param files - Array of image files to upload
   * @param path - Optional custom path in storage (defaults to 'images/')
   * @returns Promise<UploadResultData[]>
   */
  static async uploadMultipleImages(
    files: File[],
    path: string = 'images/'
  ): Promise<UploadResultData[]> {
    try {
      const uploadPromises = files.map((file, index) =>
        this.uploadImage(file, path, `${Date.now()}_${index}_${file.name}`)
      );

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
    // Check if it's an image
    if (!file.type.startsWith('image/')) {
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
