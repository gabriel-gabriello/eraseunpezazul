
// Funciones

function getNavbar()
{

    let opcion = document.title;

    let opciones_de_publicaciones = [
        "Los saltadores de abismos",
        "El fantasma de la doble via",
        "Manuales para sobrevivir"
    ];

    let opciones_de_procesos = [
        "Tecnicas de grabado",
        "Papel artesanal"
    ];

    let opciones_de_libros_de_artista = [
        "Ama nacer, amanecer",
        "Liberate",
        "Erase un pez azul",
        "Silencio",
        "El viaje",
        "El periquito que lo sabe todo"
    ];

    let opciones_de_colaboraciones = [
        "Proyectos educativos"
    ];

    if (opciones_de_publicaciones.includes(opcion))
    {
        opcion = "Publicaciones"
    }
    else if (opciones_de_procesos.includes(opcion))
    {
        opcion = "Procesos"
    }
    else if (opciones_de_libros_de_artista.includes(opcion))
    {
        opcion = "Libros de artista"
    }
    else if (opciones_de_colaboraciones.includes(opcion))
    {
        opcion = "Colaboraciones"
    }

    return `

    <div class="row">

        <div class="col-12">

            <nav class="navbar navbar-expand-lg">

                <div class="container-fluid d-flex justify-content-center">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones" aria-expanded="false">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-center" id="opciones">

                        <div class="navbar-nav gap-3">
                            
                            <a class="nav-link ${opcion === "Home" ? "active" : ""}" href="index.html">Home</a>
                            <a class="nav-link ${opcion === "Biografia" ? "active" : ""}" href="biografia.html">Biografia</a>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link ${opcion === "Publicaciones" ? "active" : ""} dropdown-toggle" role="button" data-bs-toggle="dropdown">Publicaciones</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="los_saltadores_de_abismos.html">Los saltadores de abismos</a></li>
                                    <li><a class="dropdown-item" href="el_fantasma_de_la_doble_via.html">El fantasma de la doble via</a></li>
                                    <li><a class="dropdown-item" href="manuales_para_sobrevivir.html">Manuales para sobrevivir "Violeta"</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link ${opcion === "Procesos" ? "active" : ""} dropdown-toggle" role="button" data-bs-toggle="dropdown">Procesos</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="tecnicas_de_grabado.html">Tecnicas de grabado</a></li>
                                    <li><a class="dropdown-item" href="papel_artesanal.html">Papel artesanal</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link ${opcion === "Libros de artista" ? "active" : ""} dropdown-toggle" role="button" data-bs-toggle="dropdown">Libros de artista</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="ama_nacer_amanecer.html">Ama nacer, amanecer</a></li>
                                    <li><a class="dropdown-item" href="liberate.html">Liberate</a></li>
                                    <li><a class="dropdown-item" href="erase_un_pez_azul.html">Erase un pez azul</a></li>
                                    <li><a class="dropdown-item" href="silencio.html">Silencio</a></li>
                                    <li><a class="dropdown-item" href="el_viaje.html">El viaje</a></li>
                                    <li><a class="dropdown-item" href="el_periquito_que_lo_sabe_todo.html">El periquito que lo sabe todo pero no entiende nada</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link ${opcion === "Colaboraciones" ? "active" : ""} dropdown-toggle" role="button" data-bs-toggle="dropdown">Colaboraciones</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="proyectos_educativos.html">Proyectos educativos</a></li>
                                </ul>
                            </li>
                                                                
                        </div>

                    </div>
                
                </div>

            </nav>

        </div>

    </div>

    `;
}

// Ambito global

