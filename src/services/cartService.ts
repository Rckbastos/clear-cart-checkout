
import { supabase } from '../integrations/supabase/client';
import type { Cart, CartItem } from '../types';

export const cartService = {
  async getCarts(): Promise<Cart[]> {
    const { data, error } = await supabase
      .from('carts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Cart[];
  },

  async getCartById(id: string): Promise<Cart | null> {
    const { data, error } = await supabase
      .from('carts')
      .select(`
        *,
        items:cart_items(
          *,
          product:products(*)
        )
      `)
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // No rows returned
      throw error;
    }
    return data as Cart;
  },

  async getActiveCartByCustomerId(customerId: string): Promise<Cart | null> {
    const { data, error } = await supabase
      .from('carts')
      .select(`
        *,
        items:cart_items(
          *,
          product:products(*)
        )
      `)
      .eq('customer_id', customerId)
      .eq('status', 'active')
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // No rows returned
      throw error;
    }
    return data as Cart;
  },

  async createCart(cart: Omit<Cart, 'id' | 'created_at' | 'updated_at'>): Promise<Cart> {
    const { data, error } = await supabase
      .from('carts')
      .insert(cart)
      .select()
      .single();
    
    if (error) throw error;
    return data as Cart;
  },

  async updateCartStatus(id: string, status: Cart['status']): Promise<Cart> {
    const { data, error } = await supabase
      .from('carts')
      .update({ 
        status, 
        updated_at: new Date().toISOString() 
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Cart;
  },

  async addItemToCart(item: Omit<CartItem, 'id' | 'created_at'>): Promise<CartItem> {
    const { data, error } = await supabase
      .from('cart_items')
      .insert(item)
      .select()
      .single();
    
    if (error) throw error;
    return data as CartItem;
  },

  async updateCartItem(id: string, quantity: number): Promise<CartItem> {
    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as CartItem;
  },

  async removeItemFromCart(id: string): Promise<void> {
    const { error } = await supabase
      .from('cart_items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};
