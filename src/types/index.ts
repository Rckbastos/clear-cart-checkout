
// Tipos relacionados ao Supabase
export type User = {
  id: string;
  email?: string;
  user_metadata?: {
    name?: string;
    role?: 'admin' | 'user';
  };
};

// Tipos das entidades de negócio
export type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  created_at?: string;
  updated_at?: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  created_at?: string;
  updated_at?: string;
};

export type Cart = {
  id: string;
  customer_id: string;
  status: 'active' | 'completed' | 'abandoned';
  created_at?: string;
  updated_at?: string;
  items?: CartItem[];
};

export type CartItem = {
  id: string;
  cart_id: string;
  product_id: string;
  quantity: number;
  product?: Product;
};

export type Sale = {
  id: string;
  cart_id: string;
  customer_id: string;
  total: number;
  payment_status: 'pending' | 'completed' | 'failed';
  created_at?: string;
  customer?: Customer;
  cart?: Cart;
};
