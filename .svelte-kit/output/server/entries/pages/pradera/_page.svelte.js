import { X as ensure_array_like } from "../../../chunks/index.js";
import { N as Navbar, a as attr } from "../../../chunks/navbar.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload) {
  let location = [
    {
      label: "Pradera Concepción",
      route: "/pradera/locals"
    },
    {
      label: "Xela"
      // route: "/xela",
    },
    {
      label: "Chiquimula"
      // route: "/chiquimula",
    },
    {
      label: "Escuintla"
      // route: "/escuintla",
    },
    {
      label: "Huehuetenango"
      // route: "/huehuetenango",
    },
    {
      label: "Puerto Barrios"
      // route: "/puerto-barrios",
    },
    {
      label: "Zacapa"
      // route: "/zacapa",
    },
    {
      label: "Chiquimula"
      // route: "/chiquimula",
    }
  ];
  const each_array = ensure_array_like(location);
  $$payload.out += `<div class="header svelte-3idire"><a href="/">`;
  Navbar($$payload);
  $$payload.out += `<!----></a></div> <div class="locations-list svelte-3idire"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { label, route } = each_array[$$index];
    $$payload.out += `<div class="location-item svelte-3idire"><a${attr("href", route || "#")} class="svelte-3idire"><p class="svelte-3idire">${escape_html(label)}</p></a></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  _page as default
};
