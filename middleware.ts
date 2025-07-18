// middleware.ts

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes (login, signup, homepage, etc.)
const isPublicRoute = createRouteMatcher([
  "/",              // Home
  "/login(.*)",     // Login and related routes
  "/signup(.*)",    // Signup and related routes
]);

// Middleware that protects all non-public routes
export default clerkMiddleware(async (auth, req) => {
  // If the current route is not public, require authentication
  if (!isPublicRoute(req)) {
    await auth.protect(); // Will redirect to sign-in if user is not authenticated
  }
});

// Configuration to apply middleware only to relevant routes
export const config = {
  matcher: [
    // Skip Next.js internals and static files (HTML, images, fonts, etc.)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run for API and TRPC routes
    "/(api|trpc)(.*)",
  ],
};
