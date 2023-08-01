import SavedShows from '../components/SavedShows';

function Account() {
  return (
    <>
      <div className="w-full text-white ">
        <img
          className="block relative w-full h-[450px] object-cover"
          src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[450px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
}

export default Account;
