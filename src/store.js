import { writable } from "svelte/store";

const dark = writable(false); // dark mode
const theme = writable(false); // dark mode

export { dark, theme };
