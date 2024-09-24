const FavoritesPage = () => {
  const fav = false;
  return (
    <div className=" bg-white flex-1 p-10 min-h-screen">
      <div className="max-w-screeen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favourites</p>
        {!fav && (
          <div className="h-[80 vh] flex flex-col items-center gap-4 ">
            <img src="1.jpg" className="h-3/4" alt="404 sng" />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
