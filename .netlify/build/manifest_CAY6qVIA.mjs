import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_BUCmH-lO.mjs';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DZarm3We.css"},{"type":"external","src":"/_astro/index.CVztEqk8.css"},{"type":"external","src":"/_astro/index.B1iojTsP.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/upload-blog","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/upload-blog\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"upload-blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/upload-blog.js","pathname":"/api/upload-blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DZarm3We.css"}],"routeData":{"route":"/blogs/[slug]","isIndex":false,"type":"page","pattern":"^\\/blogs\\/([^/]+?)\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blogs/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DZarm3We.css"},{"type":"external","src":"/_astro/index.CVztEqk8.css"},{"type":"inline","content":"html{overflow-y:scroll;height:100%;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}body{overflow-y:visible;position:relative;height:unset}html,body{overflow-x:hidden;margin:0}.my_container[data-astro-cid-j7pv25f6]{width:400%;height:100vh;display:flex;flex-wrap:nowrap}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/blogs/[slug].astro",{"propagation":"none","containsHead":true}],["/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/upload-blog@_@js":"pages/api/upload-blog.astro.mjs","\u0000@astro-page:src/pages/blogs/[slug]@_@astro":"pages/blogs/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CAY6qVIA.mjs","/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/components/editor/minimal-tiptap/index.ts":"_astro/index.DRrAuY1Z.js","@/components/homepage/components/HeroPage":"_astro/HeroPage.KFo6ibVy.js","@/components/homepage/components/FeaturedProjects":"_astro/FeaturedProjects.BG0ZkO9U.js","@/components/homepage/components/BlogPosts":"_astro/BlogPosts.lMbpnBej.js","@/components/homepage/components/SkillsProject":"_astro/SkillsProject.EKY0a_vS.js","@/components/editor/EditorHomepage/RenderIndividualBlog":"_astro/RenderIndividualBlog.BvvFAaRx.js","@/components/shared/Header":"_astro/Header.Crus-FGP.js","@astrojs/react/client.js":"_astro/client.DtQD7m52.js","@/components/editor/EditorHomepage/UploadBlog":"_astro/UploadBlog.B6O2NAp9.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/plus-jakarta-sans-latin-ext-wght-normal.Ch-K9LVU.woff2","/_astro/plus-jakarta-sans-vietnamese-wght-normal.Bnh6xcKr.woff2","/_astro/plus-jakarta-sans-latin-wght-normal.BD2oGHtS.woff2","/_astro/index.CVztEqk8.css","/_astro/index.B1iojTsP.css","/_astro/index.DZarm3We.css","/favicon.svg","/_astro/BlogPosts.lMbpnBej.js","/_astro/FeaturedProjects.BG0ZkO9U.js","/_astro/Header.Crus-FGP.js","/_astro/HeroPage.KFo6ibVy.js","/_astro/RenderIndividualBlog.BvvFAaRx.js","/_astro/SkillsProject.EKY0a_vS.js","/_astro/UploadBlog.B6O2NAp9.js","/_astro/UploadBlog.BiLDrCJD.js","/_astro/client.DtQD7m52.js","/_astro/createLucideIcon.tQcCz07K.js","/_astro/index.BC5H_8sn.js","/_astro/index.DDEQXXIH.js","/_astro/index.DNi1g-pO.js","/_astro/index.DRrAuY1Z.js","/_astro/index.Dokfg9v7.js","/_astro/jsx-runtime.B6N9iRLn.js","/_astro/menu.DS1hmt5f.js","/_astro/proxy.BECJCTng.js","/shared/vitalis1.webp","/shared/vitalis2.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"KWFUvWDvP9qT3PEMt72/SC9DzbBEN12xpmrtokQJRYg=","experimentalEnvGetSecretEnabled":false});

export { manifest };
