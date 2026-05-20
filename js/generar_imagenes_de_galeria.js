
// Funciones

// Este algoritmo se puede mejorar mucho

function generar_imagenes_de_galeria(numero_de_imagenes, publicacion)
{

    const galeria = document.getElementById("galeria");

    let row = null;
    let columna = null;
    let imagen = null;

    let numero_de_filas = Math.floor(numero_de_imagenes / 3);

    let residuo_de_imagenes = numero_de_imagenes % 3;

    let numeroDeImagen = 0;

    let ruta = null;

    for (let i = 0; i < numero_de_filas; i++)
    {

        row = document.createElement("div");
        row.className = "row mt-0 mt-lg-4 d-flex justify-content-around align-items-center";

        galeria.appendChild(row);

        for (let j = 1; j <= 3 ; j++)
        {
            
            columna = document.createElement("div");
            columna.className = "col-12 col-lg-3 mt-4 mt-lg-0";

            row.appendChild(columna);

            numeroDeImagen = (3*i)+j;
            
            ruta = `img/${publicacion}/${numeroDeImagen}.png`

            imagen = crearImagen(ruta);

            columna.appendChild(imagen);
            
        }

    }

    row = document.createElement("div");
    row.className = "row mt-0 mt-lg-4 d-flex justify-content-around align-items-center";

    galeria.appendChild(row);

    for (let i = 1; i <= residuo_de_imagenes; i++)
    {

        columna = document.createElement("div");
        columna.className = "col-12 col-lg-3 mt-4 mt-lg-0";

        row.appendChild(columna);

        numeroDeImagen = 3*numero_de_filas+i
        
        ruta = `img/${publicacion}/${numeroDeImagen}.png`

        imagen = crearImagen(ruta);

        columna.appendChild(imagen);
        
    }

}

function crearImagen(ruta)
{

    let imagen = document.createElement("img");
    imagen.className = "img-fluid imagen-de-galeria";
    imagen.setAttribute("alt", "imagen");
    imagen.setAttribute("src", ruta);

    imagen.addEventListener("click", () =>
    {

        const contenedorDeImagenGrande = document.getElementById("contenedorDeImagenGrande");
        const imagenGrande = document.getElementById("imagenGrande");
        
        imagenGrande.src = ruta;

        contenedorDeImagenGrande.style.display = "flex";

    });

    return imagen;

}

// Ambito global

