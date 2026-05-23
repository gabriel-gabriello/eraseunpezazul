
// Importaciones

import { getNavbar } from "./componentes/navbar.js";
import { get_footer} from "./componentes/footer.js";

// Funciones

function layout(content) 
{
    return 
    `
        ${get_navbar()}

        <main class="container">
            ${content}
        </main>

        ${get_footer()}
    `;
}