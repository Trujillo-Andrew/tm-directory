import React from "react";

const Home = () => {
  return (
    <section className="dark:bg-black dark:text-white">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-primaryHeader tracking-wider text-center uppercase">
          Trujillo Media
        </p>
        <h2 className="mb-12 text-4xl font-secondaryHeader leading-none text-center sm:text-5xl">
          Project Links
        </h2>
        <div className="grid gap-10 font-bodyText md:gap-8 sm:p-3 md:grid-cols-4 lg:px-12 xl:px-32">
          <div>
            <a href="https://reverent-kalam-97ecca.netlify.app/"><h3 className="text-lg hover:text-brandColor hover:underline">Challenger - Production Build</h3></a>
            
          </div>
          <div>
            <a href="https://reverent-kalam-97ecca.netlify.app/"><h3 className="text-lg hover:text-brandColor hover:underline">Challenger - Testing Build (Not Live Yet)</h3></a>
            
          </div>
          <div>
            <a href="https://sweetandsimplecupcakery.com"><h3 className="text-lg hover:text-brandColor hover:underline">Sweet & Simple - Production Build</h3></a>
            
          </div>
          <div>
            <a href="https://sweetandsimple-testing.netlify.app/"><h3 className="text-lg hover:text-brandColor hover:underline">Sweet & Simple - Testing Build</h3></a>
            
          </div>
          <div>
            <a href="https://lockeglassart.com/"><h3 className="text-lg hover:text-brandColor hover:underline">Locke Glass Art</h3></a>
            
          </div>
          <div>
            <a href="https://trujillo-media-v3-testing.netlify.app/"><h3 className="text-lg hover:text-brandColor hover:underline">Trujillo Media - Testing Build</h3></a>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Home;
