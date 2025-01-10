import NeedAuthPageData from "@/Pages/Routes/AuthPageData";
import useProductStore from "@/Store/useProductStore";
import { Link } from "@inertiajs/react";

const AuthSideBar = () => {
  const { addToPurchase } = useProductStore();

  return (
    <nav className="relative hidden sm:block min-w-[15rem] w-[15rem] space-y-2 bg-gray-50 text-black/60 dark:bg-gray-900 dark:text-white/60 shadow-md p-4 border-r-2 border-[#343E4E]">
      {NeedAuthPageData.map((element, index) => {
        const isActive = route().current(element.path.replace("/", ""));
        return (
          <Link
            key={index}
            href={element.path}
            className={`flex items-center space-x-4 rounded-md font-bold transition-all duration-300 ease-in-out px-2 py-2
                ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-black/60 hover:bg-indigo-600 hover:text-white hover:scale-105"
                } dark:text-gray-300 dark:hover:bg-indigo-600 dark:hover:text-white`}
          >
            <span className="text-xl relative transform transition-transform duration-200 hover:scale-110">
              {<element.icon />}
              {element.name === "Purchase" && addToPurchase.length != 0 && (
                <span className="z-50 -top-3 -left-3 absolute inline-flex justify-center items-center size-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {addToPurchase.length}
                </span>
              )}
            </span>
            <span>{element.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default AuthSideBar;
