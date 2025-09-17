import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CzcgJ0b1.js","_app/immutable/chunks/Cm7brUZo.js","_app/immutable/chunks/md9-hpGs.js","_app/immutable/chunks/BRVjruD8.js","_app/immutable/chunks/HUp8kJEa.js"];
export const stylesheets = ["_app/immutable/assets/2.1kxa4qDN.css"];
export const fonts = [];
