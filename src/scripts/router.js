class Router {
    constructor(routes) {
        this.routes = routes;
        this.currentPath = '';
        this.baseUrl = this.getBaseUrl();
        
        // Handle navigation
        document.addEventListener('click', e => {
            if (e.target.matches('nav a')) {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                this.navigateTo(href);
            }
        });

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.handleRoute(window.location.pathname);
        });

        // Initial route
        this.handleRoute(window.location.pathname);
    }

    getBaseUrl() {
        return window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    }

    async handleRoute(path) {
        this.currentPath = path;
        
        // Remove the base URL and leading slash to get relative path
        let relativePath = path.replace(this.baseUrl, '').replace(/^\//, '');
        
        // If we're at root, use index
        if (relativePath === '') {
            relativePath = 'index.html';
        }
        
        // Construct proper path relative to current location
        const targetPath = relativePath;
        
        try {
            const response = await fetch(targetPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Update main content
            const mainContent = doc.querySelector('main');
            if (mainContent) {
                document.querySelector('main').innerHTML = mainContent.innerHTML;
            } else {
                throw new Error('No main content found in loaded page');
            }
            
            // Update document title
            const title = doc.querySelector('title');
            if (title) {
                document.title = title.textContent;
            }
            
            // Re-initialize language and theme
            const storedLang = localStorage.getItem('preferredLanguage');
            if (storedLang) {
                setLanguage(storedLang);
            }
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme === 'light');
            }
        } catch (error) {
            console.error('Error loading content:', error);
            document.querySelector('main').innerHTML = '<p>Error loading content</p>';
        }
    }

    navigateTo(path) {
        // Remove any "../" from the path
        path = path.replace(/\.\.\//, '');
        
        // Handle root path special case
        if (path === '/' || path === '') {
            path = 'index.html';
        }

        // Update browser history
        history.pushState(null, null, path);
        this.handleRoute(path);
    }
}
