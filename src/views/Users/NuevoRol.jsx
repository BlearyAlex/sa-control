import { useEffect, useState } from "react";
import { Input, Formulario, Select } from "../../components/utils";
import clienteAxios from "../../config/axios";
import Roles from "../../components/utils/Roles";
import { Field } from "formik";

const NuevoRol = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [roles, setRoles] = useState([]);
  const [permissions, setPermissions] = useState([]);

  const handleSeleccion = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const onCheckBoxChange = ({ target }) => {
    let valor = parseInt(target.value);
    const index = permissions.indexOf(valor);
    if (index === -1) {
      setPermissions([...permissions, valor]);
    } else {
      setPermissions(permissions.filter((item) => item !== valor));
    }
  };

  const initialValues = {
    name: "",
    permission: [],
  };

  const obtenerRoles = async () => {
    try {
      const { data } = await clienteAxios.get("/roles");
      setRoles(data.permission);
      for (let i = 0; i < data.permission.length; i++) {
        console.log(data.permission[i].name);
        // Accede a todas las propiedades de cada elemento en el arreglo aquí
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerRoles();
  }, []);

  const onStore = async (role) => {
    console.log({ name: role.name, permissions });

    try {
      const { data } = await clienteAxios.post("/roles", {
        name: role.name,
        permission: permissions,
      });
      console.log(data);
      // dispatch(createRole(data.role));
      // onSetPanel(false);
      // dispatch(resetCheck());
      // dispatch(setRole({ id: null, name: "" }));
      // onLoading(false);
      // onAlert({
      //   open: true,
      //   severity: "success",
      //   message: "Role creado correctamente",
      // });
    } catch (error) {
      console.log(error);
      // onLoading(false);
      // onAlert({
      //   open: true,
      //   severity: "error",
      //   message: error.response.data.message,
      // });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <Formulario
          initialValues={initialValues}
          fncEnviar={onStore}
        >
          <div className="bg-white p-6 rounded shadow-lg mx-auto">
            <h1 className="text-lg font-bold mb-4 text-center">
              Crear Nuevo Rol
            </h1>

            <div className="flex items-center justify-center pb-4">
              <p className="font-semibold">Nombre del Rol:</p>
              <Input
                name="name"
                placeholder="Nombre de Rol"
              />
            </div>

            {/* <Roles roles={roles} /> */}

            <div
              role="group"
              className="grid grid-cols-4"
            >
              {roles.map((role) => (
                <input
                  key={role.id}
                  type="checkbox"
                  name="permission"
                  value={role.id}
                  label={role.name}
                  onChange={(e) => onCheckBoxChange(e)}
                />
              ))}
            </div>

            <div className=" bg-red-500 rounded-lg w-full flex justify-center items-center text-center p-1 mt-4 cursor-pointer hover:bg-red-600">
              <button
                type="submit"
                className=" text-white font-bold"
              >
                Crear Rol
              </button>
            </div>
          </div>
        </Formulario>
      </div>
    </>
  );
};

export default NuevoRol;
