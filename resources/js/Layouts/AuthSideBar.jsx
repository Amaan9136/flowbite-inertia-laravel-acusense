import NeedAuthPageData from '@/Pages/Routes/AuthPageData';
import { Link } from '@inertiajs/react';

const AuthSideBar = () => {
  return (
    <nav className="flex flex-col w-56 bg-gray-50 text-black/60 dark:bg-gray-900 dark:text-white/60 space-y-1 shadow-md p-2 hidden sm:block h-full">
      {NeedAuthPageData.map((element, index) => {
        const isActive = route().current(element.path.replace("/", ""));
        return ( 
          <Link
            key={index}
            href={element.path}
            className={`flex items-center space-x-4 rounded-md font-bold transition-all duration-300 ease-in-out px-2 py-2
              ${isActive
                ? 'bg-indigo-600 text-white'
                : 'text-black/60 hover:bg-indigo-600 hover:text-white hover:scale-105'
              } dark:text-gray-300 dark:hover:bg-indigo-600 dark:hover:text-white`}
          >
            <span className="text-xl transform transition-transform duration-200 hover:scale-110">
              {<element.icon />}
            </span>
            <span>{element.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default AuthSideBar;
