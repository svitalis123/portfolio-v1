import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_BOClSVLC.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_Cph3Uxwn.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CpeNVjIn.mjs';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/","cacheDir":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/node_modules/.astro/","outDir":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/dist/","srcDir":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/src/","publicDir":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/public/","buildClientDir":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/dist/client/","buildServerDir":"file:///Users/slu/Public/code%20folders/personal_code/portfolio-v1/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CxOlcBRI.css"},{"type":"external","src":"/_astro/index.D4aFrjWv.css"},{"type":"external","src":"/_astro/index.Dfv9wy_7.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/upload-blog","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/upload-blog\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"upload-blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/upload-blog.js","pathname":"/api/upload-blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CxOlcBRI.css"}],"routeData":{"route":"/blogs/[slug]","isIndex":false,"type":"page","pattern":"^\\/blogs\\/([^/]+?)\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blogs/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CxOlcBRI.css"},{"type":"external","src":"/_astro/index.D4aFrjWv.css"}],"routeData":{"route":"/blogs","isIndex":false,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs.astro","pathname":"/blogs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CxOlcBRI.css"},{"type":"external","src":"/_astro/index.D4aFrjWv.css"},{"type":"inline","content":"html{overflow-y:scroll;height:100%;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}body{overflow-y:visible;position:relative;height:unset}html,body{overflow-x:hidden;margin:0}.my_container[data-astro-cid-j7pv25f6]{width:700%;height:100vh;display:flex;flex-wrap:nowrap}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs.astro",{"propagation":"none","containsHead":true}],["/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/upload-blog@_@js":"pages/api/upload-blog.astro.mjs","\u0000@astro-page:src/pages/blogs/[slug]@_@astro":"pages/blogs/_slug_.astro.mjs","\u0000@astro-page:src/pages/blogs@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B9Sa4hCp.mjs","/Users/slu/Public/code folders/personal_code/portfolio-v1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DFZiTr9N.mjs","/Users/slu/Public/code folders/personal_code/portfolio-v1/src/components/editor/minimal-tiptap/index.ts":"_astro/index.BcgGFwCm.js","@/components/editor/EditorHomepage/RenderIndividualBlog":"_astro/RenderIndividualBlog.DQ_BhbdC.js","@/components/homepage/components/HeroPage":"_astro/HeroPage.DG7L4qPV.js","@/components/homepage/components/FeaturedProjects":"_astro/FeaturedProjects.BbNd7dmq.js","@/components/homepage/components/BlogPosts":"_astro/BlogPosts.CHRWQNex.js","@/components/homepage/components/SkillsProject":"_astro/SkillsProject.SCSNhkOR.js","/Users/slu/Public/code folders/personal_code/portfolio-v1/src/components/blogs/FeaturedBlogPost":"_astro/FeaturedBlogPost.DKZmlSTN.js","@/components/blogs/BlogListingPage":"_astro/BlogListingPage.C2VrZ6Kg.js","@/components/shared/Header":"_astro/Header.8p6Mr6B5.js","@/components/shared/ContactBar":"_astro/ContactBar.CdagAxtP.js","@astrojs/react/client.js":"_astro/client.CFN5p1-5.js","@/components/editor/EditorHomepage/UploadBlog":"_astro/UploadBlog.BUNG53KG.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/plus-jakarta-sans-vietnamese-wght-normal.qRpaaN48.woff2","/_astro/plus-jakarta-sans-latin-ext-wght-normal.DmpS2jIq.woff2","/_astro/plus-jakarta-sans-latin-wght-normal.eXO_dkmS.woff2","/_astro/index.CxOlcBRI.css","/_astro/index.D4aFrjWv.css","/_astro/index.Dfv9wy_7.css","/favicon.svg","/_astro/BlogListingPage.C2VrZ6Kg.js","/_astro/BlogPosts.CHRWQNex.js","/_astro/ContactBar.CdagAxtP.js","/_astro/FeaturedBlogPost.DKZmlSTN.js","/_astro/FeaturedProjects.BbNd7dmq.js","/_astro/Header.8p6Mr6B5.js","/_astro/HeroPage.DG7L4qPV.js","/_astro/RenderIndividualBlog.DQ_BhbdC.js","/_astro/SkillsProject.SCSNhkOR.js","/_astro/UploadBlog.BUNG53KG.js","/_astro/UploadBlog.DyoFxJWm.js","/_astro/avatar.BQxnQN09.js","/_astro/badge.BneP_Jsu.js","/_astro/chevron-right.BRyed1Zr.js","/_astro/client.CFN5p1-5.js","/_astro/createLucideIcon.aZNC6UCm.js","/_astro/dialog.DrQHGU9W.js","/_astro/index.BbrXe1HB.js","/_astro/index.BcgGFwCm.js","/_astro/index.C7mVfDVK.js","/_astro/index.CGiOhBAB.js","/_astro/index.DLUXnABt.js","/_astro/index.DrR7x3g8.js","/_astro/index.edJ7SOlU.js","/_astro/index.vS3CHQPZ.js","/_astro/jsx-runtime.DtwUfwuI.js","/_astro/proxy.B0iyKRYh.js","/_astro/x.CkYRxGeJ.js","/shared/vitalis1.webp","/shared/vitalis2.webp","/shared/vitalis3.webp","/shared/vitalis4.webp"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"ep/rnhRoCUFLmHj2nTW1fQg4nLV61IXoe9++VtoTikY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
