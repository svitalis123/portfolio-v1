import { d as defineMiddleware, s as sequence } from './chunks/index_SPUHCVIa.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cph3Uxwn.mjs';
import 'piccolore';
import './chunks/astro/server_BOClSVLC.mjs';
import 'clsx';

const loginAttempts = /* @__PURE__ */ new Map();
const debug = (message, data) => {
};
const isAdminRoute = (pathname) => {
  return pathname === "/admin" || pathname.startsWith("/admin/");
};
const onRequest$1 = defineMiddleware(async (context, next) => {
  if (!isAdminRoute(context.url.pathname)) {
    debug("Non-admin route, skipping auth:", context.url.pathname);
    return next();
  }
  debug("Protecting admin route:", context.url.pathname);
  try {
    const clientIp = context.request.headers.get("x-forwarded-for")?.split(",")[0] || context.request.headers.get("x-real-ip") || "unknown";
    const attempt = loginAttempts.get(clientIp);
    if (attempt?.count >= 2) {
      const timeLeft = Math.ceil((attempt.timestamp + 3 - Date.now()) / 1e3 / 60);
      debug("Rate limited IP:", clientIp);
      return new Response(
        `Too many login attempts. Please try again in ${timeLeft} minutes.`,
        { status: 429 }
      );
    }
    const authHeader = context.request.headers.get("authorization");
    if (!authHeader) {
      debug("No auth header present");
      return new Response("Authorization required", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Area"'
        }
      });
    }
    const [scheme, encoded] = authHeader.split(" ");
    if (!encoded || scheme !== "Basic") {
      debug("Invalid auth header format");
      return new Response("Invalid authentication format", { status: 401 });
    }
    const decoded = atob(encoded);
    const [username, password] = decoded.split(":");
    debug("Checking credentials:", {
      providedUsername: username,
      expectedUsername: "64sluace",
      credentialsMatch: username === "64sluace" && password === "300bcsluace"
    });
    if (username !== "64sluace" || password !== "300bcsluace") {
      const currentAttempt = loginAttempts.get(clientIp) || { count: 0, timestamp: Date.now() };
      loginAttempts.set(clientIp, {
        count: currentAttempt.count + 1,
        timestamp: Date.now()
      });
      debug("Invalid credentials. Attempt:", currentAttempt.count + 1);
      return new Response("Invalid credentials", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Area"'
        }
      });
    }
    debug("Authentication successful");
    loginAttempts.delete(clientIp);
    const response = await next();
    const newResponse = new Response(response.body, response);
    newResponse.headers.set("X-Frame-Options", "DENY");
    newResponse.headers.set("X-Content-Type-Options", "nosniff");
    newResponse.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    if (true) {
      newResponse.headers.set(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains"
      );
    }
    return newResponse;
  } catch (error) {
    console.error("Auth error:", error);
    return new Response("Authentication error", { status: 500 });
  }
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
