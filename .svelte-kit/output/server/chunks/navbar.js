import { e as escape_html } from "./escaping.js";
/* empty css                                     */
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Navbar($$payload) {
  $$payload.out += `<nav class="svelte-1ljhwvx"><div class="navbar-container svelte-1ljhwvx"><div class="logo svelte-1ljhwvx"><div class="logo-text svelte-1ljhwvx">ShopFlow</div></div> <ul class="nav-links svelte-1ljhwvx"></ul> <div class="menu svelte-1ljhwvx"></div></div></nav>`;
}
export {
  Navbar as N,
  attr as a
};
