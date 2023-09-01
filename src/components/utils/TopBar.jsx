import { useState } from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export function TopBar() {
  const Menu = [
    { title: 'Usuarios', routes: '/usuarios' },
    { title: 'Catalogos', routes: '/catalogos' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      title: 'Salir',
    },
  ];

  return (
    <div className="bg-red-800 flex justify-between py-4 items-center shadow-2xl">
      <ul className="flex pl-4">
        {Menu.map((menu, index) => (
          <Link to={menu.routes} key={index}>
            <li
              className="bg-white rounded-md px-2 font-semibold text-sm cursor-pointer hover:scale-110 ease-in-out duration-300 mr-2"
              key={index}
            >
              {menu.title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="mr-6 my-2">
        <RiAccountCircleFill
          className="text-2xl text-white cursor-pointer hover:scale-125 ease-in-out duration-300"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <div className="bg-white absolute py-2 px-2 rounded-md">
            {list.map((item, index) => (
              <div>
                <a href="" className="font-semibold hover:text-red-800">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
