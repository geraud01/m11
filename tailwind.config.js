/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adicione os caminhos dos seus arquivos JSX/JS aqui
  ],
  plugins: [
    require('@tailwindcss/nesting'),
    require('tailwindcss'),
    require('@tailwindcss/forms'),
  ],
};


