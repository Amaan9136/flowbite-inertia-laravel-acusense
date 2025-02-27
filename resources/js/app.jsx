import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const applyTheme = () => {
    const savedTheme = localStorage.getItem('isDarkMode');
    const isDarkMode =
        savedTheme !== null
            ? JSON.parse(savedTheme) 
            : window.matchMedia('(prefers-color-scheme: dark)').matches; 

    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

applyTheme();

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
        const isDarkMode = e.matches;
        localStorage.setItem('isDarkMode', isDarkMode);
        applyTheme();
    });

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, <App {...props} />);
            return;
        }

        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
