import "./_footer.scss";




const template = () => {
    return `
        <footer>
            <a href="https://es.pinterest.com/_/_/policy/terms-of-service">Condiciones de servicio</a>
            <a href="https://es.pinterest.com/_/_/policy/privacy-policy">Política de privacidad</a>
            <a href="https://es.pinterest.com/_/_/help">Ayuda</a>
            <a href="https://itunes.apple.com/us/app/pinterest/id429047995">Aplicación para iPhone</a>
            <a href="https://play.google.com/store/apps/details?id=com.pinterest">Aplicación para Android</a>
            <a href="https://www.pinterest.com/html_sitemap/pinners_a.html">Usuarios</a>
            <a href="https://www.pinterest.com/html_sitemap/boards_a.html">Colecciones</a>
            <a href="https://www.pinterest.com/html_sitemap/shopping_0.html">Compras</a>
            <a href="https://es.pinterest.com/ideas/">Explorar</a>
            <a href="https://policy.pinterest.com/non-user-notice">Aviso de no usuario</a>
        </footer>
    `
};

const footer = () => {
    return template();
};

export default footer;