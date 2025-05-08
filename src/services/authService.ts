
import { supabase } from '../integrations/supabase/client';
import type { User } from '../types';

export const authService = {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async signUp(email: string, password: string, metadata?: { name?: string }) {
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: { data: metadata } 
    });
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser(): Promise<User | null> {
    const { data } = await supabase.auth.getUser();
    return data?.user as User || null;
  },

  async isAdmin(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user?.user_metadata?.role === 'admin';
  }
};
