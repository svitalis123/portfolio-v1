import { _ as createRenderInstruction, g as addAttribute, u as renderTemplate, w as createAstro } from "./server_DKvTTH34.mjs";
import { t as createComponent } from "./compiler_CXH3bZoW.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/astro/components/ClientRouter.astro
createAstro("https://astro.build");
var $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ClientRouter;
	const { fallback = "animate" } = Astro.props;
	return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/slu/Public/code folders/personal_code/portfolio-v1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/node_modules/astro/components/ClientRouter.astro", void 0);
//#endregion
export { $$ClientRouter as t };
