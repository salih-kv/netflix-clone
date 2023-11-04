
const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-[30px] p-5 flex justify-between">
      <img
        className="fixed left-5 w-32"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="fixed right-5 w-8"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
};

export default NavBar;
