contenedor = document.getElementById("contenedor_cursos"),
url = " https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories",
fragmento = document.createDocumentFragment();

function mostrarTarjetas(){
    fetch(url)
    .then((res)=>{
    return res.json()
    })
    .then((json)=>{
        console.log(json.communityCategories);
        json.communityCategories.forEach((e)=>{
            const div = document.createElement("div");
            div.classList.add("tarjeta");
            div.innerHTML = ` 
            <div class="tarjeta_imagen">
                <img src="${e.background || "https://storage.googleapis.com/bucket-larnu/media/business/142/images/2P6FENBB.png"}" alt="¨${e.name}" class="tarjeta_imagen_background">
                <img src="${e.icon}" alt="${e.name}" class="tarjetaimagen-icono">
            </div>
            <div class="tarjeta_texto">
                <h3 class="tarjeta_titulo">${e.name}</h3>
                <p class="tarjeta_texto">Total quizzes: ${e.totalQuizzes}</p>
                <p class="tarjeta_texto">User: ${e.users}</p>
                <a href="https://es.larnu.com/ target="_blank" class="btn">Go to Larnu</a>
            </div>
                                    `;

        fragmento.appendChild(div)                           
        });
        contenedor.appendChild(fragmento);
    
    })


}

mostrarTarjetas();