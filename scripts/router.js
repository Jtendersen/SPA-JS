import { renderAboutMe, renderData, renderHeader, renderFooter, renderHome } from './ui.js';
import { fetchData } from './api.js';

async function route() {
    const path = window.location.hash.slice(1) || '/';
    const routes = {
        '/':  renderHome,
        '/data-fetching': async () => {
            const data = await fetchData();
            const content = renderData(data);
            return content;
        },
        '/about': renderAboutMe,
    };

    const routeHandler = routes[path];
    if (routeHandler) {
        try {
            const content = await routeHandler();
            document.getElementById('app').innerHTML = renderHeader() + content + renderFooter();
        } catch (error) {
            console.error('Error handling route:', error);
            document.getElementById('app').innerHTML = renderHeader() + "<p>Error al cargar la página.</p>" + renderFooter();
        }
    } else {
        console.error('Route not found');
        document.getElementById('app').innerHTML = renderHeader() + "<p>Página no encontrada :(.</p>" + renderFooter();
    }
}

export function initRouter() {
    window.addEventListener('hashchange', route);
    route();  
}
