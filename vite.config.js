// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   server:{
//     proxy:{
//       '/api':  {
//         target : "https://localhost:3000",
//       secure : false,
//     },
//     },
//   },
//   plugins: [react()],
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // backend server
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'), 
      },
    },
  },
  plugins: [react()],
});
