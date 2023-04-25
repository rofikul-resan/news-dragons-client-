const AdsComponents = () => {
  return (
    <div className="relative">
      <img className="w-full" src="/assets/bg1.png" alt="" />
      <div className="text-white text-center absolute inset-0 py-10 px-5 bg-black/40">
        <h1 className="text-4xl font-bold  mb-6 mt-4">
          Create an Amazing Newspaper
        </h1>
        <p className="mb-6">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="bg-[#d72050] px-3 py-2 block mx-auto text-white font-semibold ">
          Latest
        </button>
      </div>
    </div>
  );
};

export default AdsComponents;
