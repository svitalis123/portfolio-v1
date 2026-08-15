import { A as defineMiddleware, g as sequence } from "./chunks/render_fPk9ziVO.mjs";
//#region src/middleware.ts
var loginAttempts = /* @__PURE__ */ new Map();
var isAdminRoute = (pathname) => {
	return pathname === "/admin" || pathname.startsWith("/admin/");
};
var onRequest$1 = defineMiddleware(async (context, next) => {
	if (!isAdminRoute(context.url.pathname)) {
		context.url.pathname;
		const response = await next();
		const cached = new Response(response.body, response);
		cached.headers.set("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
		return cached;
	}
	context.url.pathname;
	try {
		const clientIp = context.request.headers.get("x-forwarded-for")?.split(",")[0] || context.request.headers.get("x-real-ip") || "unknown";
		const attempt = loginAttempts.get(clientIp);
		if (attempt?.count >= 2) {
			const timeLeft = Math.ceil((attempt.timestamp + 3 - Date.now()) / 1e3 / 60);
			return new Response(`Too many login attempts. Please try again in ${timeLeft} minutes.`, { status: 429 });
		}
		const authHeader = context.request.headers.get("authorization");
		if (!authHeader) return new Response("Authorization required", {
			status: 401,
			headers: { "WWW-Authenticate": "Basic realm=\"Admin Area\"" }
		});
		const [scheme, encoded] = authHeader.split(" ");
		if (!encoded || scheme !== "Basic") return new Response("Invalid authentication format", { status: 401 });
		const [username, password] = atob(encoded).split(":");
		if (username !== "64sluace" || password !== "300bcsluace") {
			const currentAttempt = loginAttempts.get(clientIp) || {
				count: 0,
				timestamp: Date.now()
			};
			loginAttempts.set(clientIp, {
				count: currentAttempt.count + 1,
				timestamp: Date.now()
			});
			currentAttempt.count + 1;
			return new Response("Invalid credentials", {
				status: 401,
				headers: { "WWW-Authenticate": "Basic realm=\"Admin Area\"" }
			});
		}
		loginAttempts.delete(clientIp);
		const response = await next();
		const newResponse = new Response(response.body, response);
		newResponse.headers.set("X-Frame-Options", "DENY");
		newResponse.headers.set("X-Content-Type-Options", "nosniff");
		newResponse.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
		newResponse.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
		return newResponse;
	} catch (error) {
		console.error("Auth error:", error);
		return new Response("Authentication error", { status: 500 });
	}
});
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(onRequest$1);
//#endregion
export { onRequest };
