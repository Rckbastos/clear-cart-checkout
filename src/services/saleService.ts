
import { supabase } from '../integrations/supabase/client';
import type { Sale } from '../types';

export const saleService = {
  async getSales(): Promise<Sale[]> {
    const { data, error } = await supabase
      .from('sales')
      .select(`
        *,
        customer:customers(*),
        cart:carts(
          *,
          cart_items(
            *,
            product:products(*)
          )
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Sale[];
  },

  async getSaleById(id: string): Promise<Sale | null> {
    const { data, error } = await supabase
      .from('sales')
      .select(`
        *,
        customer:customers(*),
        cart:carts(
          *,
          cart_items(
            *,
            product:products(*)
          )
        )
      `)
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null; // No rows returned
      throw error;
    }
    return data as Sale;
  },

  async createSale(sale: Omit<Sale, 'id' | 'created_at'>): Promise<Sale> {
    const { data, error } = await supabase
      .from('sales')
      .insert(sale)
      .select()
      .single();
    
    if (error) throw error;
    return data as Sale;
  },

  async updateSalePaymentStatus(id: string, paymentStatus: Sale['payment_status']): Promise<Sale> {
    const { data, error } = await supabase
      .from('sales')
      .update({ payment_status: paymentStatus })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data as Sale;
  }
};
