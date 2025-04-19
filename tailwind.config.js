/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                navbar: 'rgba(255, 255, 255, 0.70)',
                'active-link': '#214C23',
                footer: '#121C13',
            },
            backgroundImage: {
                'contact-us': "url('/assets/Contact/contact-background.webp')",
            },
            fontFamily: {
                lato: ['Lato'],
                lobster: ['Lobster Two'],
            },
        },
        plugins: [],
    },
};
