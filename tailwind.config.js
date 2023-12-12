/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Arial', 'sans-serif'],
      serif: ['Lora', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        background: '#F0EDEE',
        primary: '#016FB9',
        'dark-primary': '#084887',
        'light-primary': '#23B5D3',
        secondary: '#96C600',
        'dark-secondary': '#5E7B00',
        'light-secondary': '#E2ECC4',
        success: '#028547',
        error: '#E00E34',
        info: '#3566FA',
        atention: '#FFC24C',
      },
    },
  },
  plugins: [],
}
