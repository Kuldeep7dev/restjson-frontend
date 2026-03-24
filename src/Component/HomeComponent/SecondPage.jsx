import {
  ArrowUpRight,
  ClipboardList,
  Footprints,
  ShoppingBasket,
  Star,
  User,
  Videotape
} from "lucide-react";
import { Link } from "react-router-dom";

const SecondPage = () => {

  const apiList = [
    {
      title: "Visitor",
      endpoint: "http://localhost:4050/visiter",
      icon: Footprints,
    },
    {
      title: "Products",
      endpoint: "http://localhost:4050/product",
      icon: ShoppingBasket,
    },
    {
      title: "Users",
      endpoint: "http://localhost:4050/users",
      icon: User,
    },
    {
      title: "Todos",
      endpoint: "http://localhost:4050/todos",
      icon: ClipboardList,
    },
    {
      title: "Movie",
      endpoint: "http://localhost:4050/movie",
      icon: Videotape,
    },
    {
      title: 'Featured Products',
      endpoint: 'http://localhost:4050/product/featured',
      icon: Star
    }
  ];

  return (
    <section className="min-h-screen flex justify-center items-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-6xl">
        
        <h1 className="text-3xl font-semibold mb-8 text-center sm:text-left">
          Top 6 APIs:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center md:place-items-stretch">
          {apiList.map((api, id) => {
            const Icon = api.icon;

            return (
              <Link
                target="_blank"
                key={id}
                to={api.endpoint}
                className="group w-full border border-gray-200 rounded-lg p-6
                  hover:border-purple-600 transition
                  hover:shadow-purple-600 hover:duration-500
                  shadow-lg bg-white overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-md bg-gray-100 group-hover:bg-purple-600 transition">
                      <Icon
                        size={28}
                        className="group-hover:text-white transition"
                      />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-lg font-medium">
                        {api.title}
                      </h2>
                      <p className="text-sm text-gray-500 truncate max-w-[220px] xs:max-w-[280px] sm:max-w-xs">
                        {api.endpoint}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <ArrowUpRight
                    className="text-gray-400 group-hover:text-purple-600 transition flex-shrink-0"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondPage;