export type Products = Array<Product>;

export type Product = {
  id: number;
  name: string;
  img: {
    title: string;
    url: string;
  };
};

export interface ProductFunctions extends Product {
  handleAddCart: Function;
  handleRemoveCart: Function;
}

export interface ProductRemoveCart extends Product {
  handleRemoveCart: Function;
}
export interface ProductAddCart extends Product {
  handleAddCart: Function;
}
