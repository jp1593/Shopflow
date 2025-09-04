import { writable } from "svelte/store";

// 🔹 Helper que asigna estado según cantidad
function getEstado(cantidad) {
  if (cantidad >= 1 && cantidad <= 15) return "Vacío";
  if (cantidad >= 16 && cantidad <= 30) return "Moderado";
  if (cantidad >= 31) return "Saturado";
  return "Vacío"; // fallback cuando es 0
}

// 🔹 Inicializamos los locales
const initialLocals = [
  { name: "Albacinema", cantidad: 0, estado: "Vacío" },
  { name: "Max", cantidad: 20, estado: getEstado(20) },
  { name: "Burger King", cantidad: 42, estado: getEstado(42) }
];

export const praderaLocals = writable(initialLocals);

// 🔹 Actualiza Albacinema con API
export async function fetchAlbacinemaCantidad() {
  try {
    const res = await fetch("http://localhost:5000/detect");
    const data = await res.json();
    const cantidad = data.people_detected || 0;

    praderaLocals.update((locals) => {
      return locals.map((loc) =>
        loc.name === "Albacinema"
          ? { ...loc, cantidad, estado: getEstado(cantidad) }
          : loc
      );
    });
  } catch (err) {
    console.error("Error fetching Albacinema data:", err);
  }
}
