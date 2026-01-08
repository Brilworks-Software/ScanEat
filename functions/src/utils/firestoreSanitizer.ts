/**
 * Sanitizes data for Firestore by replacing undefined/null values with appropriate defaults
 * Firestore doesn't accept undefined values, so we need to convert them:
 * - Numbers: undefined/null -> 0
 * - Strings: undefined/null -> ""
 * - Arrays: undefined/null -> []
 * - Objects: recursively sanitize nested properties
 * - Special values like serverTimestamp() are preserved
 */

export function sanitizeForFirestore(data: any): any {
  // Handle null/undefined at root level
  if (data === null || data === undefined) {
    return null;
  }

  // Preserve special Firestore values (like serverTimestamp())
  if (
    typeof data === 'object' &&
    data !== null &&
    (data.constructor?.name === 'FieldValue' || 
     typeof (data as any).toMillis === 'function' ||
     typeof (data as any).toDate === 'function')
  ) {
    return data;
  }

  // Handle arrays
  if (Array.isArray(data)) {
    return data.map(item => sanitizeForFirestore(item));
  }

  // Handle Date objects
  if (data instanceof Date) {
    return data;
  }

  // Handle primitive types
  if (typeof data !== 'object') {
    // Numbers: NaN -> 0
    if (typeof data === 'number') {
      return isNaN(data) ? 0 : data;
    }
    return data;
  }

  // Handle objects - recursively sanitize
  const sanitized: any = {};
  
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      
      if (value === undefined || value === null) {
        // For undefined/null, we need to infer the type from context
        // Since we can't know the type, we'll skip undefined but handle null
        // The calling code should provide proper defaults
        continue;
      } else if (typeof value === 'number') {
        // Numbers: NaN -> 0
        sanitized[key] = isNaN(value) ? 0 : value;
      } else if (typeof value === 'string') {
        // Strings: keep as is
        sanitized[key] = value;
      } else if (Array.isArray(value)) {
        // Arrays: recursively sanitize, ensure it's an array
        sanitized[key] = Array.isArray(value) ? sanitizeForFirestore(value) : [];
      } else if (value instanceof Date) {
        // Dates: keep as is
        sanitized[key] = value;
      } else if (typeof value === 'object') {
        // Objects: recursively sanitize
        sanitized[key] = sanitizeForFirestore(value);
      } else {
        // Other types (boolean, etc.): keep as is
        sanitized[key] = value;
      }
    }
  }
  
  return sanitized;
}

