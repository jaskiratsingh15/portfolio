document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Check localStorage for saved system theme settings
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme) {
        rootElement.setAttribute('data-theme', savedTheme);
    } else {
        // Fallback to device preference settings if no local history exists
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        rootElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    // Toggle logic handler
    themeToggle.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        rootElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('portfolio-theme', targetTheme);
    });
});