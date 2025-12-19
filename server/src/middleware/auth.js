import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

/**
 * Protects API routes
 * Automatically validates Clerk session token
 */
export const requireAuth = ClerkExpressRequireAuth();
