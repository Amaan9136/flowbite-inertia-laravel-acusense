import defaultTheme from 'tailwindcss/defaultTheme';
<<<<<<< HEAD
=======
import forms from '@tailwindcss/forms';
>>>>>>> b7fef03 (chore: nothing much)

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
<<<<<<< HEAD
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
=======
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

>>>>>>> b7fef03 (chore: nothing much)
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
<<<<<<< HEAD
    plugins: [],
=======

    plugins: [forms],
>>>>>>> b7fef03 (chore: nothing much)
};
