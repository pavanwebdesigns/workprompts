import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Browser-side Supabase client. Safe to use in Client Components.
 */
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Server-side Supabase client wired to Next.js cookies.
 * Use in Server Components, Route Handlers, and Server Actions.
 */
export function createServerSupabaseClient() {
  const cookieStore = cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be safely ignored when middleware refreshes sessions.
        }
      },
    },
  });
}

/**
 * Service-role Supabase client for trusted server-only operations.
 * NEVER import this into client code — it bypasses Row Level Security.
 */
export function createServiceRoleClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  return createServerClient(supabaseUrl, serviceRoleKey, {
    cookies: {
      getAll() {
        return [];
      },
      setAll() {
        // No-op: service-role client is stateless.
      },
    },
  });
}
