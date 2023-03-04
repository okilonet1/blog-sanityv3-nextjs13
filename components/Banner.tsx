function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 px-10 mb-10">
      <div>
        <h1 className="text-7xl">Kachi's Blog</h1>
        <h2 className="mt-5 md:mt-0">
          A blog about web development, tech, and everything in between. Welcome
          to{" "}
          <span className="underline decoration-4 decoration-[#f7ab0a]">
            Every Developers
          </span>{" "}
          favorite blog in the Devosphere.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | The latest in tech | How to get the most out of
        your Sanity Studio & More!
      </p>
    </div>
  );
}

export default Banner;
