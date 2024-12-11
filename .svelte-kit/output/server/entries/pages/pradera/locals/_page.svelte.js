import { X as ensure_array_like } from "../../../../chunks/index.js";
import { N as Navbar, a as attr } from "../../../../chunks/navbar.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$payload) {
  let questions = [
    { id: 1, text: `Entretenimiento` },
    { id: 2, text: `Belleza` },
    { id: 3, text: `Alimentación` }
  ];
  let selected = void 0;
  let answer = "";
  const items = [
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    },
    {
      image: "https://via.placeholder.com/150",
      labels: [
        "Tienda X",
        "Cantidad de personas: 0",
        "Estado: Vacío"
      ]
    }
  ];
  const each_array = ensure_array_like(questions);
  const each_array_1 = ensure_array_like(items);
  $$payload.out += `<div class="header svelte-8959sq"><a href="/">`;
  Navbar($$payload);
  $$payload.out += `<!----></a></div> <div class="filter svelte-8959sq"><form><select class="svelte-8959sq"${attr("selected", selected, true)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let question = each_array[$$index];
    $$payload.out += `<option${attr("value", question)}>${escape_html(question.text)}</option>`;
  }
  $$payload.out += `<!--]--></select> <button${attr("disabled", !answer, true)} type="submit" class="svelte-8959sq">Submit</button></form></div> <div class="grid svelte-8959sq"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like(item.labels);
    $$payload.out += `<div class="grid-item svelte-8959sq"><img${attr("src", item.image)} alt="local" class="svelte-8959sq"> <div class="labels svelte-8959sq"><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let label = each_array_2[$$index_1];
      $$payload.out += `<div class="label svelte-8959sq">${escape_html(label)}</div>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--></div>`;
}
export {
  _page as default
};
