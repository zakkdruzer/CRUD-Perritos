async function obtenerUnSoloUnicornio(id, URL, contenedor) {
    try{
        const respuesta = await fetch(`${URL}/${id}`)
        const unicornio = await respuesta.json()
        if(!unicornio){
            alert("Unicornio no encontrado")
        }
        contenedor.innerHTML = `<div class=" card mb-3">
          <img
            src=${unicornio.image}
            class="unicorn-img"
            alt="..."
          />
          <div class="card-body">
            <h5 id="nombre-unicornio" class="card-title">${unicornio.name}</h5>
            <p id="desc" class="card-text">
              Raza: ${unicornio.breed}
            </p>
            <p id="desc" class="card-text">
              Color: ${unicornio.color}
            </p>
            <p id="desc" class="card-text">
              Edad: ${unicornio.age}
            </p>
            <p id="desc" class="card-text">
              Juguete Favorito: ${unicornio.favoriteToy}
            </p>
            <p id="desc" class="card-text">
              Personalidad: ${unicornio.personality}
            </p>
            <p id="desc" class="card-text">
              Biografia: ${unicornio.bio}
            </p>
        </div>`
    }catch(error){
        console.log(error);
    }
}
export default obtenerUnSoloUnicornio