import Header from "./Header";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="h-60 bg-gradient-to-b fixed from-black text-white w-full z-10">
        {" "}
      </div>
      <div className="bg-black">
        <section className="relative h-auto flex items-center flex-col w-full justify-center">
          <div className="max-w-3xl  space-y-2 flex flex-col items-center text-white absolute">
            <h1 className="text-4xl font-bold">Unlimited movies, TV</h1>
            <h1 className="text-4xl font-bold">shows and more.</h1>
            <p className="text-xl hidden  sm:inline-block">
              Watch anywhere. Cancel anytime.
            </p>
            <div className="text-lg px-8 hidden  sm:inline-block">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="w-full flex">
              <input
                className="w-full focus:outline-none text-gray-400 px-4 py-3 bg-white"
                placeholder="Email address"
                type="text"
              />
              <div className="bg-red flex-shrink-0 flex ">
                <button className="px-4 flex items-center bg-[#e50914]">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="h-60 bg-gradient-to-t absolute from-black text-white bottom-0 w-full">
              {" "}
            </div>

            <img
              className="-z-50 flex w-full object-fit "
              src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/7ae82418-beea-4868-8594-dddd284dc46c/IN-en-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
