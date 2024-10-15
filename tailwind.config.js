/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900"
      },
      container: {
        center: true,
        padding:{
          DEFAULT : "1rem",
          sm: "3rem",
        }
      } // mở rộng cấu hình container
      //Padding mặc định cho tất cả các kích thước màn hình là 1rem (16px)
      //Padding cho các màn hình nhỏ hơn (từ 640px trở lên) được thiết lập thành 3rem (48px).
    },
  },
  plugins: [],
}

