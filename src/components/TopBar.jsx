import { useState } from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';

function TopBar() {
  const Menus = [{ title: 'Usuarios' }];
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      title: 'Salir',
    },
  ];

  return (
    <div className="bg-red-800 flex justify-between py-4 items-center shadow-2xl">
      <div className=" ml-6 flex gap-2">
        {Menus.map((menu, index) => (
          <h6
            className="bg-white rounded-md px-2 font-semibold text-sm"
            key={index}
          >
            Usuarios
          </h6>
        ))}
      </div>
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

export default TopBar;
