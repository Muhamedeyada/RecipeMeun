import { Link } from "react-router-dom";
import { CakeIcon } from "@heroicons/react/24/solid"; 

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center max-w-lg w-full">
        <CakeIcon className="mx-auto h-20 w-20 text-yellow-500 animate-bounce" />
        <h1 className="text-6xl font-extrabold text-red-500 mt-6">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          Oops! Recipe not found.
        </p>
        <p className="mt-2 text-gray-500">
          The recipe you're looking for seems to have vanished! Let's get you
          back to something tasty.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
