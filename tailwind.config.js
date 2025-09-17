/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
    theme: {
        extend: {
            colors: {
                blush: '#F8E1E4',    // Softer pink
                peach: '#FFE9D6',    // Lighter, warmer peach
                mint: '#E8F3D6',     // Soft sage green
                lavender: '#F0E6FF', // Lighter lavender
                cream: '#FFFAF0',    // Warmer cream
                brown: '#5C4741',    // Softer brown
                rose: '#F5CAC3',     // Muted rose
                sage: '#DAE2D4',     // Additional sage color
            },
            fontFamily: {
                script: ['"Dancing Script"', 'cursive'],
                serif: ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    plugins: [],
}