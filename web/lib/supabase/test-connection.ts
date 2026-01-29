/**
 * Test function to verify Supabase connection
 * This can be called from a server component or API route
 */

import { createClient } from './server'

export async function testSupabaseConnection() {
  try {
    const supabase = await createClient()
    
    // Simple query to test connection
    const { data, error } = await supabase
      .from('users')
      .select('count')
      .limit(1)
    
    if (error) {
      // Table might not exist yet, which is okay
      if (error.code === 'PGRST116') {
        return {
          success: true,
          message: 'Supabase connection successful (users table not created yet)',
        }
      }
      
      return {
        success: false,
        message: `Supabase connection error: ${error.message}`,
        error,
      }
    }
    
    return {
      success: true,
      message: 'Supabase connection successful',
      data,
    }
  } catch (error) {
    return {
      success: false,
      message: `Failed to connect to Supabase: ${error instanceof Error ? error.message : 'Unknown error'}`,
      error,
    }
  }
}

