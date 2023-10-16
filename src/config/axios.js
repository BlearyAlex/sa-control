import axios from "axios";

const clienteAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

// clienteAxios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("AUTH_TOKEN");
//   config.headers = {
//     ...config.headers,
//     Authorization: `Bearer ${token}`,
//   };
//   return config;
// });

async function getUser() {
  const csrf = await clienteAxios.get("/sanctum/csrf-cookie");
  console.log(csrf);
}

export default clienteAxios;
