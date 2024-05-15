export function renderHeader() {
    return `
        <div id="nav">
            <a href="#/">Home</a>
            <a href="#/data-fetching">Data Fetching</a>
            <a href="#/about">About Me</a>
        </div>
        <header>
            <div id="header-content">
                <h1>Desafío JS Vainilla SPA</h1>
                <p>By: Juan Manuel Tierno</p>
            </div>
        </header>
        `;
}

export function renderHome() {
    return `
        <section id='home'>
            <h1>Bienvenido al JS Vainilla SPA Challenge</h1>
            <p>Esta Single Page Application (SPA) fue desarrollada exclusivamente con Vanilla JavaScript, demostrando la capacidad de construir aplicaciones web interactivas y dinámicas sin utilizar librerías o frameworks externos. El propósito de este proyecto es demostrar mis skills y creatividad en el desarrollo con tiempo limitado y en el marco de un desafío técnico</p>
            <h2>Acerca de este Challenge</h2>
            <p>El challenge consistía en desarrollar una SPA en un tiempo máximo de 48 horas utilizando únicamente Vainilla JS. Los requerimientos exigían asegurar que el sitio no recargue en ningún punto de interacción, pudiendo utilizar fake APIs para emular el fetching de datos. Se priorizó la entrega rápida, la creatividad en la solución y el diseño, considerando el diseño responsive. </p>
            <h2>Cómo navegar este sitio</h2>
            <p>Podés navegar utilizando los links en la navbar superior. Cada sección es cargada de manera dinámica, en concordancia con los principios SPA y asegurando que no existan recargas de la página durante la navegación. Esto se consigue manipulando el hash del objeto window.location para interactuar con el contenido.</p>
            <h2>Completando el Challenge</h2>
            <p>Esta SPA cumple los requerimientos solicitados:
                <ul>
                    <li>Se utiliza Vanilla Javascript para todas las funcionalidades.</li>
                    <li>No hay recarga de página en las interacciones del usuario.</li>
                    <li>Fetching de data desde una fake API y renderizado dinámico en "Data Fetching".</li>
                    <li>Sección "About Me" con información personal y profesional.</li>
                    <li>No se utilizaron librerías externas ni frameworks.</li>
                </ul>
            </p>
        </section>
        `;
}

export function renderData(data) {
    const limitedData = data.slice(0, 10);
    return `
        <section>
            <h2>Prueba de Fetching Data usando jsonplaceholder</h2>
            <p>En esta sección se muestra cómo se realiza el fetching de datos utilizando jsonplaceholder como origen de los datos. Para el ejemplo, se muestran los primeros 10 resultados:</p>
                ${limitedData.map(post => `
                    <div>
                        <div id="divider"></div>
                        <strong>Título:</strong> <h4>${post.title}</h4>
                        <strong>Contenido:</strong> <p>${post.body}</p>
                    </div>
                `).join('')}
        </section>
    `;
}


export function renderAboutMe() {
    return `
        <section>
            <h2>Acerca de mí</h2>
            <p>Fullstack Developer PERN y MERN, y experiencia en Next.js y TypeScript. Me encanta enseñar y creo en el aprendizaje continuo. Creo que el buen humor fomenta el buen clima laboral y junto a la responsabilidad, el éxito siempre está más cerca</p>
            <img src="assets/juan.png" alt="Juan Manuel Tierno">
            <h3>Habilidades Clave</h3>
            <ul>
                <li>JavaScript, HTML5, CSS3</li>
                <li>React.js, Node.js, Next.js</li>
                <li>MongoDB, PostgreSQL, Sequelize</li>
                <li>SCRUM, Git, Docker</li>
            </ul>
            <h3>Proyectos Destacados</h3>
            <p>Desarrollé una aplicación completa en Next.js + Node.js con TypeScript y Tailwind que consistía en un multicotizador de seguros de automotores, integrando también la emisión de pólizas en distintas compañías.</p>
            <h3>Educación Formal</h3>
            <p>Plataforma 5 PERN Fullstack, Licenciatura en Administración, Ingeniería Electrónica.</p>
            <p>Para más información sobre mi trayectoria y proyectos, podés visitar mi <a href="https://portfolio-jtendersen.vercel.app/" target="_blank">portfolio</a>. Este enlace se abrirá en una nueva ventana.</p>
        </section>
    `;
}


export function renderFooter() {
    return `<footer>© 2024 Juan Manuel Tierno - All Rights Reserved</footer>`;
}