fetch("../database/PodcastSulaimanElTahaSantos.xml")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");

    const posts = xml.querySelectorAll("post");

    let cards = "";
    for (let i = 0; i < posts.length; i++) {
      let titulo = posts[i].getAttribute("titulo");
      let fecha = posts[i].getAttribute("fecha");
      let nombre = posts[i].querySelector("nombre").textContent;
      let avatar = posts[i].querySelector("avatar").textContent;
      let introduccion = posts[i].querySelector("introduccion").textContent;
      let descripcion = posts[i].querySelector("descripcion").textContent;
      let tiempoLectura = posts[i].querySelector("tiempo_lectura").textContent;
      let numVisualizaciones = posts[i].querySelector(
        "num_visualizaciones"
      ).textContent;
      let numComentarios =
        posts[i].querySelector("num_comentarios").textContent;
      let numLikes = posts[i].querySelector("num_megusta").textContent;
      let imagen = posts[i].querySelector("imagen").textContent;

      const card = `
      <div class="card">
        <div class="imagenDiv">
          <img src="${imagen}" alt="" />
        </div>
        <div class="itemDiv">
          <div class="userPerfil">
            <img src="${avatar}" alt="" />
            <h3>${nombre}</h3>
            <i class="fa-solid fa-crown" style="color: #000000"></i>
            <p>${fecha} ${tiempoLectura}</p>
            <i class="fa-solid fa-ellipsis-vertical" style="color: #000000"></i>
          </div>
          <div class="textoitemDiv">
            <h2>${titulo}</h2>
            <p>${introduccion} ${descripcion}</p>
          </div>
          <div class="divFooter">
            <div class="lineaNegra"></div>
            <div class="visualizacionesComentarios">
              <div class="visualizaciones">${numVisualizaciones} visualizaciones</div>
              <div class="comentarios">${numComentarios} comentarios</div>
              <span>${numLikes}</span>
              <i class="fa-regular fa-heart" style="color: orangered"></i>
            </div>
          </div>
        </div>
      </div>
      `;
      cards = cards + card;
    }

    document.querySelector(".card-container").innerHTML = cards;
  });
