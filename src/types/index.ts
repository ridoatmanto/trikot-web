export type Product = {
  id: string;
  name: string;
  imageURL: string;
  slug: string;
  price: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  user: any;
  id: string;

  fullname?: string;
  username: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;
};

export type Cart = {
  [x: string]: any;
  id: string;

  userId: string | null;
  status: string;

  items: CartItem[];

  createdAt: Date;
  updatedAt: Date;
};

export type CartItem = {
  cartItem: any;
  id: string;

  quantity: number;

  productId: string;
  product: Product;

  cartId: string;

  createdAt: Date;
  updatedAt: Date;
};
