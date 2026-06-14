document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
        rootElement.setAttribute('data-theme', savedTheme);
    } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        rootElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        rootElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('portfolio-theme', targetTheme);
    });
});
