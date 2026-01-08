import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../lib/services/ProductService';
import { Product } from '../../shared/types/product';

/**
 * Hook to fetch and analyze product data using TanStack Query
 * @param barcode - The product barcode to fetch
 * @param enabled - Whether the query should run (default: true)
 */
export function useProduct(barcode: string | null | undefined, enabled: boolean = true) {
  return useQuery<Product, Error>({
    queryKey: ['product', barcode],
    queryFn: async () => {
      if (!barcode) {
        throw new Error('Barcode is required');
      }

      return await ProductService.getProductByBarcode(barcode);
    },
    enabled: enabled && !!barcode,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 30 * 60 * 1000, // Keep in cache for 30 minutes (formerly cacheTime)
    retry: 2, // Retry failed requests 2 times
    retryDelay: 1000, // Wait 1 second between retries
  });
}

