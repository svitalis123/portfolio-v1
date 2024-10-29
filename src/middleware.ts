// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

// Store login attempts in memory
const loginAttempts = new Map<string, { count: number; timestamp: number }>();

// Debug function
const debug = (message: string, data?: any) => {
  if (import.meta.env.DEV) {
    console.log(`[Auth Debug] ${message}`, data || '');
  }
};

// Function to check if path is an admin route
const isAdminRoute = (pathname: string): boolean => {
  // This will match /admin and all subroutes like /admin/, /admin/posts, etc.
  return pathname === '/admin' || pathname.startsWith('/admin/');
};

export const onRequest = defineMiddleware(async (context, next) => {
  // Check if this is an admin route
  if (!isAdminRoute(context.url.pathname)) {
    debug('Non-admin route, skipping auth:', context.url.pathname);
    return next();
  }

  debug('Protecting admin route:', context.url.pathname);

  try {
    const clientIp = context.request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     context.request.headers.get('x-real-ip') || 
                     'unknown';

    // Check for rate limiting
    const attempt = loginAttempts.get(clientIp);
    if (attempt?.count >= 2) {
      const timeLeft = Math.ceil((attempt.timestamp + 3 - Date.now()) / 1000 / 60);
      debug('Rate limited IP:', clientIp);
      return new Response(
        `Too many login attempts. Please try again in ${timeLeft} minutes.`,
        { status: 429 }
      );
    }

    // Check for auth header
    const authHeader = context.request.headers.get('authorization');
    if (!authHeader) {
      debug('No auth header present');
      return new Response('Authorization required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      });
    }

    // Parse auth header
    const [scheme, encoded] = authHeader.split(' ');
    if (!encoded || scheme !== 'Basic') {
      debug('Invalid auth header format');
      return new Response('Invalid authentication format', { status: 401 });
    }

    // Decode credentials
    const decoded = atob(encoded);
    const [username, password] = decoded.split(':');

    debug('Checking credentials:', { 
      providedUsername: username, 
      expectedUsername: import.meta.env.ADMIN_USERNAME,
      credentialsMatch: username === import.meta.env.ADMIN_USERNAME && 
                       password === import.meta.env.ADMIN_PASSWORD 
    });

    // Verify credentials
    if (
      username !== import.meta.env.ADMIN_USERNAME || 
      password !== import.meta.env.ADMIN_PASSWORD
    ) {
      // Track failed attempt
      const currentAttempt = loginAttempts.get(clientIp) || { count: 0, timestamp: Date.now() };
      loginAttempts.set(clientIp, {
        count: currentAttempt.count + 1,
        timestamp: Date.now()
      });

      debug('Invalid credentials. Attempt:', currentAttempt.count + 1);

      return new Response('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"'
        }
      });
    }

    // Authentication successful
    debug('Authentication successful');
    loginAttempts.delete(clientIp);

    // Add security headers to the response
    const response = await next();
    const newResponse = new Response(response.body, response);
    
    newResponse.headers.set('X-Frame-Options', 'DENY');
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    if (import.meta.env.PROD) {
      newResponse.headers.set(
        'Strict-Transport-Security',
        'max-age=31536000; includeSubDomains'
      );
    }

    return newResponse;

  } catch (error) {
    console.error('Auth error:', error);
    return new Response('Authentication error', { status: 500 });
  }
});