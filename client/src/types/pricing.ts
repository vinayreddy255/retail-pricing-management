export interface Pricing {
  _id?: string;
  storeId: string;
  sku: string;
  productName: string;
  price: number;
  date?: string | Date;
  currency?: string;
}

export type PricingQuery = {
  storeId?: string;
  sku?: string;
  productName?: string;
};
