import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";
import { HeartIcon } from "@heroicons/react/24/solid"; // Import a heart icon from Heroicons
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

        {favorites.length === 0 ? (
          <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
            <HeartIcon className="h-24 w-24 text-gray-400 animate-pulse" />
            <p className="text-xl text-gray-600">
              You have no favorite recipes yet!
            </p>
            <p className="text-gray-500">
              Start adding recipes to your favorites by visiting the Home page.
            </p>
            <Link
              to="/"
              className="mt-4 px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transition duration-300"
            >
              Go Back Home
            </Link>
          </div>
        ) : (
          // Display the list of favorite recipes
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.label}
                recipe={recipe}
                {...getRandomColor()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
