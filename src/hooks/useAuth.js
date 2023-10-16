import useSWR from "swr";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/user", () =>
    clienteAxios("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((error) => {
        throw Error(error?.response?.data?.errors);
      })
  );

  const login = async (values, setErrores) => {
    try {
      const { data } = await clienteAxios.post("/login", values);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setErrores([]);
      await mutate();
    } catch (error) {
      setErrores(Object.values(error.response.data.errors));
    }
  };

  const registro = () => {};

  const logout = async () => {
    try {
      await clienteAxios.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (error) {
      throw Error(error?.response?.data?.errors);
    }
  };

  useEffect(() => {
    if (middleware === "guest" && url && user) {
      navigate(url);
    }
    if (middleware === "auth" && error) {
      navigate("/login");
    }
  }, [user, error]);

  return {
    login,
    registro,
    logout,
    user,
    error,
  };
};
