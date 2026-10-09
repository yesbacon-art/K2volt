import { productCatalog } from './content';
import type { Product } from './products';

export function parseComparison(value: string | null): string[] {
  const choices = [...new Set((value ?? '').split(','))]
    .map(id => productCatalog.find(product => product.slug === id))
    .filter((product): product is Product => Boolean(product));
  return choices.length ? choices.filter(product => product.category === choices[0].category).slice(0, 3).map(product => product.slug) : [];
}

export function changeComparison(ids: string[], product: Product) {
  if (ids.includes(product.slug)) return {ids: ids.filter(id => id !== product.slug), notice: `${product.name} removed from comparison.`};
  const first = productCatalog.find(item => item.slug === ids[0]);
  if (first && first.category !== product.category) return {ids, notice: 'Choose products from the same family. Clear your current selection before comparing another family.'};
  if (ids.length >= 3) return {ids, notice: 'You can compare up to three products. Remove one before adding another.'};
  return {ids: [...ids, product.slug], notice: `${product.name} added. ${ids.length + 1} of 3 products selected.`};
}
