/**
 * Utility functions for grouping products by NOVA classification
 */

import { Product } from '../types/product';

export interface NOVAProductGroup {
  group: number;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  products: Product[];
  count: number;
}

/**
 * NOVA classification groups
 */
export const NOVA_GROUPS = {
  1: {
    name: 'Unprocessed or minimally processed foods',
    description: 'Fresh fruits, vegetables, grains, legumes, meats, milk, eggs, etc.',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  2: {
    name: 'Processed culinary ingredients',
    description: 'Oils, fats, salt, sugar, vinegar, etc. used in cooking',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  3: {
    name: 'Processed foods',
    description: 'Foods with added salt, sugar, oils, or preservatives',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
  4: {
    name: 'Ultra-processed foods',
    description: 'Industrial formulations with many additives and little whole food',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
};

/**
 * Group products by their NOVA classification
 */
export function groupProductsByNOVA(products: Product[]): NOVAProductGroup[] {
  const groups: { [key: number]: Product[] } = {};

  // Initialize empty arrays for each NOVA group
  Object.keys(NOVA_GROUPS).forEach(group => {
    groups[parseInt(group)] = [];
  });

  // Group products by NOVA group
  products.forEach(product => {
    const novaGroup = product.novaGroup || product.healthScore?.novaGroup;
    if (novaGroup && novaGroup >= 1 && novaGroup <= 4) {
      groups[novaGroup].push(product);
    }
  });

  // Convert to NOVAProductGroup array
  return Object.keys(groups)
    .map(group => parseInt(group))
    .sort((a, b) => a - b) // Sort by group number
    .map(group => ({
      group,
      name: NOVA_GROUPS[group as keyof typeof NOVA_GROUPS].name,
      description: NOVA_GROUPS[group as keyof typeof NOVA_GROUPS].description,
      color: NOVA_GROUPS[group as keyof typeof NOVA_GROUPS].color,
      bgColor: NOVA_GROUPS[group as keyof typeof NOVA_GROUPS].bgColor,
      products: groups[group],
      count: groups[group].length,
    }))
    .filter(group => group.count > 0); // Only return groups with products
}

/**
 * Get NOVA group info for a specific group number
 */
export function getNOVAGroupInfo(group: number) {
  return NOVA_GROUPS[group as keyof typeof NOVA_GROUPS];
}

/**
 * Sort products within each NOVA group by health score (descending)
 */
export function sortProductsByHealthScore(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    const scoreA = a.healthScore?.score || 0;
    const scoreB = b.healthScore?.score || 0;
    return scoreB - scoreA; // Higher scores first
  });
}

/**
 * Get products grouped and sorted by NOVA group
 */
export function getGroupedAndSortedProducts(products: Product[]): NOVAProductGroup[] {
  return groupProductsByNOVA(products).map(group => ({
    ...group,
    products: sortProductsByHealthScore(group.products),
  }));
}
