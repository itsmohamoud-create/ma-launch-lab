'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { LoginSchema } from '@/lib/schema/auth'
import { z } from 'zod'

// 🔒 SECURE SERVER-SIDE AUTHENTICATION
export async function authenticatePrincess(data: z.infer<typeof LoginSchema>) {
  const result = LoginSchema.safeParse(data);
  
  if (!result.success) {
    return { error: "Invalid input" };
  }

  // In production, compare against process.env.ADMIN_KEY
  // For now, we simulate the secure check here on the server
  const LEGACY_KEY = "herbirthday"; 
  
  if (result.data.password.toLowerCase() === LEGACY_KEY) {
    // Set HTTP-Only Cookie (Client cannot modify this)
    cookies().set('legacy_session', 'verified_heir', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/'
    });
    return { success: true };
  }

  return { error: "Access Denied. Incorrect Key." };
}

export async function logout() {
  cookies().delete('legacy_session');
  redirect('/');
}
