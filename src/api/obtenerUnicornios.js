import eliminarUnicornio from "./eliminarUnicornio.js";

async function obtenerUnicornios(contenedor, URL) {
  let currentHtml = "";
  const res = await fetch(URL);
  const unicorniosDB = await res.json();
  const unicornios = unicorniosDB.map((unicornio) => {
    return {
      id: unicornio._id,
      nombre: unicornio.name,
      raza: unicornio.breed,
      imagen: unicornio.image,
      color: unicornio.color,
      edad: unicornio.age,
      jugueteFavorito: unicornio.favoriteToy,
      personalidad: unicornio.personality,
      bio: unicornio.bio,
    };    
  });
  //console.log(unicornio.breed);
  unicornios.forEach((unicornio) => {
    currentHtml += `<div class=" card mb-3">
          <img
            src=${unicornio.imagen}
            class="card-img-top"
            alt="..."
            />
          <div class="card-body">
            <h5 id="nombre-unicornio" class="card-title">${unicornio.nombre}</h5>
            <p id="desc" class="card-text">
              Raza: ${unicornio.raza}
            </p>
            <p id="desc" class="card-text">
              Color: ${unicornio.color}
            </p>
            <p id="desc" class="card-text">
              Edad: ${unicornio.edad}
            </p>
            <p id="desc" class="card-text">
              Juguete Favorito: ${unicornio.jugueteFavorito}
            </p>
            <p id="desc" class="card-text">
              Personalidad: ${unicornio.personalidad}
            </p>
            <p id="desc" class="card-text">
              Biografia: ${unicornio.bio}
            </p>
          </div>
            <div class="botones"><button id="btn-eliminar">Eliminar</button> 
            <button id="btn-actualizar">Actualizar</button>
            </div>
        </div>`;
  });
  contenedor.innerHTML = currentHtml;
  const btnEliminar = document.querySelectorAll("#btn-eliminar");
  const btnActualizar = document.querySelectorAll("#btn-actualizar");

  btnActualizar.forEach((btn, index) => {
    btn.onclick = ()=>{
      window.location.assign(`actualizar.html?id=${unicornios[index].id}`)
    }
  });
  eliminarUnicornio(btnEliminar, URL, unicornios, contenedor);
}

export default obtenerUnicornios;
