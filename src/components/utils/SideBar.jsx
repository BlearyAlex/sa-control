import { useState } from 'react';
// Icons
import {
  BsArrowLeftShort,
  BsSearch,
  BsClipboard2CheckFill,
  BsFillCalendarCheckFill,
} from 'react-icons/bs';
import { HiDocumentSearch, HiNewspaper } from 'react-icons/hi';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { AiFillFileAdd, AiFillHome } from 'react-icons/ai';
// Router-Dom
import { Link } from 'react-router-dom';

export function SideBar() {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      title: 'Inicio',
      icon: <AiFillHome />,
      route: '/home',
    },
    { title: 'Auditoria', route: '/auditoria' },
    {
      title: 'Planeación',
      icon: <BsClipboard2CheckFill />,
      route: '/planeacion',
    },
    {
      title: 'Ejecución',
      icon: <FaPencilAlt />,
      route: '/ejecucion',
    },
    {
      title: 'Seguimiento',
      icon: <HiDocumentSearch />,
      route: '/seguimiento',
    },
    {
      title: 'Informe',
      icon: <HiNewspaper />,
      route: '/informe',
    },
    {
      title: 'Conclusión',
      icon: <BsFillCalendarCheckFill />,
      route: '/conclusion',
    },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-white h-screen p-5 pt-8 shadow-2xl ${
          open ? 'w-72' : 'w-20'
        } relative duration-300 shadow-2xl`}
      >
        <BsArrowLeftShort
          className={`bg-red-800 text-white text-3xl rounded-full -right-3 absolute top-9 border border-red-800 cursor-pointer shadow-2xl ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <img src="/img/SGG_Color.png" alt="Logo" className="block" />
          <h1
            className={`origin-left font-medium text-2xl duration-300 ${
              !open && 'scale-0'
            }`}
          ></h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-gray-300 mt-6 shadow-2xl ${
            !open ? 'px-2.5' : 'px-4'
          } py-2`}
        >
          <BsSearch
            className={`text-lg block float-left cursor-pointer text-red-800 ${
              open && 'mr-2'
            } `}
          />
          <input
            type={'search'}
            placeholder="Search"
            className={`text-base bg-transparent w-full focus:outline-none ${
              !open && 'hidden'
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <Link to={menu.route} key={index}>
              <li
                className={`text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-red-600 rounded-md hover:text-white ${
                  menu.spacing ? 'mt-9' : 'mt-2'
                }`}
              >
                <span className="text-2xl block float-left text-red-800 hover:text-white">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && 'hidden'
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
