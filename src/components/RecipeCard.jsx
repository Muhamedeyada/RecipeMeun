import { Heart, HeartPulse, Soup } from "lucide-react";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#ecf7f4] overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img
          src="1.jpg"
          alt="Roasted Chicken Recipe"
          className="object-cover cursor-pointer rounded-md w-full h-full"
        />
        <div className="absolute left-2 bottom-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> 4 servings
        </div>
        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-600 hover:text-red-600" />
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-tight">Roasted Chicken</p>
      </div>
      <p className="my-2">Turkish Kitchen</p>
      <div className="flex mt-auto gap-2">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Heart-Healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
