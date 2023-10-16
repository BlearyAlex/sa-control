import { useRef, useState } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import user from "../../assets/img/informacion.png";

export function TopBar() {
  const { logout } = useAuth({ middleware: "auth" });

  const Menu = [
    { title: "Usuarios", routes: "/usuarios" },
    { title: "Roles", routes: "/roles" },
    { title: "Catalogos", routes: "/catalogos" },
  ];

  const Lists = ["Cerrar Sesión", "Configuracion"];
  const [open, setOpen] = useState(false);

  // Hacer click fuera del icono del menu
  const listRef = useRef();
  const iconRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== listRef.current && e.target !== iconRef.current) {
      setOpen(false);
    }
  });

  return (
    <div className="bg-red-800 flex justify-between py-4 items-center shadow-2xl">
      <ul className="flex pl-4">
        {Menu.map((menu, index) => (
          <Link
            to={menu.routes}
            key={index}
          >
            <li
              className="bg-white rounded-md px-2 font-semibold text-sm cursor-pointer hover:scale-110 ease-in-out duration-300 mr-2"
              key={index}
            >
              {menu.title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="mr-10 relative">
        <span
          onClick={() => setOpen(!open)}
          ref={iconRef}
        >
          menu
        </span>

        {open && (
          <div
            ref={listRef}
            className="bg-white p-3 shadow-lg absolute -left-20 top-8"
          >
            <ul>
              {Lists.map((list) => (
                <Link
                  onClick={logout}
                  key={list}
                >
                  <li
                    onClick={() => setOpen(false)}
                    className="p-2 text-sm font-semibold cursor-pointer rounded hover:bg-red-400"
                    key={list}
                  >
                    {list}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
