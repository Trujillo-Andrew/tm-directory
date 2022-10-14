import React from "react";

const Socials = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Trujillo Media
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Social Media Links
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-4 lg:px-12 xl:px-32">
          <div>
            <a href="https://www.linkedin.com/company/trujillo-media/?viewAsMember=true"><h3 className="text-lg hover:underline">LinkedIn</h3></a>
            
          </div>
          <div>
            <a href="https://www.facebook.com/TrujilloMediaCO"><h3 className="text-lg hover:underline">Facebook</h3></a>
            
          </div>
          <div>
            <a href="https://twitter.com/TrujilloMedia"><h3 className="text-lg hover:underline">Twitter</h3></a>
            
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCh3lcBhE5gEpiRSjLCmVTZw"><h3 className="text-lg hover:underline">YouTube</h3></a>
            
          </div>
          <div>
            <a href="https://www.instagram.com/trujillo_media_co/"><h3 className="text-lg hover:underline">Instagram</h3></a>
            
          </div>
          <div>
            <a href="https://www.google.com/maps/place/Trujillo+Media/@45.1575501,-128.1448585,3z/data=!4m2!3m1!1s0x0:0x80024bd316ba35d6?sa=X&ved=2ahUKEwi-mu75jeD6AhVaFjQIHbqKADQQ_BJ6BAhREB8"><h3 className="text-lg hover:underline">Google</h3></a>
            
          </div>
          <div>
            <a href="https://www.tiktok.com/@trujillo.media"><h3 className="text-lg hover:underline">TikTok</h3></a>
            
          </div>
          <div>
            <a href="https://github.com/Trujillo-Media"><h3 className="text-lg hover:underline">Github</h3></a>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Socials;
