'use client';

/**
 * NOVA Product Groups Component
 *
 * Displays products organized by their NOVA classification groups.
 *
 * Usage Example:
 * ```tsx
 * import { NOVAProductGroups } from '../components/NOVAProductGroups';
 * import { Product } from '../../shared/types/product';
 *
 * function MyProductList({ products }: { products: Product[] }) {
 *   return <NOVAProductGroups products={products} title="My Product History" />;
 * }
 * ```
 *
 * The component automatically groups products by their NOVA group (1-4)
 * and sorts them by health score within each group.
 */

import { Product } from '../../shared/types/product';
import { getGroupedAndSortedProducts, NOVAProductGroup } from '../utils/novaGrouping';
import ProductCard from './ProductCard';

interface NOVAProductGroupsProps {
  products: Product[];
  title?: string;
  compact?: boolean;
}

export default function NOVAProductGroups({ products, title = "Products by NOVA Group", compact = false }: NOVAProductGroupsProps) {
  const groupedProducts = getGroupedAndSortedProducts(products);

  if (groupedProducts.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-2">
          <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <p className="text-lg font-medium text-gray-700">No products to display</p>
        <p className="text-sm text-gray-500">Scan some products to see them grouped by NOVA classification</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {title && (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600">Products organized by their level of industrial processing</p>
        </div>
      )}

      {groupedProducts.map((group: NOVAProductGroup) => (
        <div key={group.group} className={`rounded-lg border-2 p-6 ${group.bgColor} ${group.borderColor}`}>
          {/* Group Header */}
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                group.group === 1 ? 'bg-green-600' :
                group.group === 2 ? 'bg-blue-600' :
                group.group === 3 ? 'bg-yellow-600' :
                'bg-red-600'
              }`}>
                {group.group}
              </div>
              <div>
                <h3 className={`text-xl font-bold ${group.color}`}>
                  NOVA Group {group.group}
                </h3>
                <p className="text-sm text-gray-600">{group.name}</p>
              </div>
              <div className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${
                group.group === 1 ? 'bg-green-100 text-green-800' :
                group.group === 2 ? 'bg-blue-100 text-blue-800' :
                group.group === 3 ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {group.count} product{group.count !== 1 ? 's' : ''}
              </div>
            </div>
            <p className="text-sm text-gray-700">{group.description}</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.products.map((product) => (
              <ProductCard
                key={product.barcode}
                product={product}
                compact={compact}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
