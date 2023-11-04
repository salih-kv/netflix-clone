const Header = () => {
  return (
    <header className="w-full flex justify-between px-20 fixed top-0 z-50 ">
      <div>
        <img
          className="w-32 m-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>

      <div className="my-auto">
        <select
          className="bg-transparent rounded border border-white px-4 py-1 text-white mr-3"
          name="language"
          id="cars"
        >
          <option value="">English</option>
          <option value="">हिन्दी</option>
        </select>
        <button className="bg-[#e50914] rounded text-white my-auto border-0 py-1 px-4 ">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
