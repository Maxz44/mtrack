import { writable, type Writable } from "svelte/store";

// Load data from local storage
const mangas_saved: Array<string> = JSON.parse(localStorage.mangas || "[]");

// Initialize your stores
export let search: Writable<string> = writable("");
export let mangas: Writable<string[]> = writable(mangas_saved);

// Update data in local storage
mangas.subscribe((val) => {
  localStorage.mangas = JSON.stringify(val);
});
