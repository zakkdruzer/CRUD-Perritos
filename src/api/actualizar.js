import obtenerUnSoloUnicornio from "./obtenerUnSoloUnicornio.js";
const btnEnviar = document.querySelector("#enviar");
const URL = "https://sample-dogs-api.netlify.app/api/v1/dogs/";
const inputNombre = document.querySelector("#nombre");
const inputRaza = document.querySelector("#raza");
const inputColor = document.querySelector("#color");
const inputEdad = document.querySelector("#edad");
const inputJugFav = document.querySelector("#jugueteFavorito");
const inputPersonalidad = document.querySelector("#personalidad");
const inputBio = document.querySelector("#bio");
const inputImagen = document.querySelector("#imagen");
const urlParams = new URLSearchParams(window.location.search).get("id");
const contenedor = document.querySelector("#contenedor")

obtenerUnSoloUnicornio(urlParams, URL, contenedor)

let data = {};
function obtenerDatos(evento) {
  const eventoNombre = evento.target.name;
  const eventoValue = evento.target.value;

  const newData = { ...data, [eventoNombre]: eventoValue };
  data = newData;
}
inputNombre.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputRaza.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputColor.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputEdad.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputJugFav.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputPersonalidad.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputBio.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});
inputImagen.addEventListener("change", (evento) => {
  obtenerDatos(evento);
});

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  if (!data.name && !data.breed && !data.color && !data.age && !data.favoriteToy && !data.personality && !data.bio && !data.image) {
    alert("Debes de completar por lo menos un dato para actualizar");
    return;
  }
  alert("unicornio actualizado");
  fetch(`${URL}/${urlParams}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    window.location.assign("index.html");
  });
});
