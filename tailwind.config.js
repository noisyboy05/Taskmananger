/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      'text-gray-800',
      'text-gray-700',
      'text-gray-600',
      'text-gray-500',
      'text-gray-400',
      'text-gray-300',
      'text-gray-200',
      'text-gray-100',
      'text-gray-50',
      'text-blue-500',
      'text-green-500',
      'text-black',
      'text-white',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  