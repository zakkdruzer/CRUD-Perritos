import obtenerUnicornios from "./api/obtenerUnicornios.js";
const contenedor = document.querySelector("#contenedor")
const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs/";

obtenerUnicornios(contenedor, URL)