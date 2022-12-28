import React from "react";

const Home = () => {
  return (
    <section className="dark:bg-black dark:text-white">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-primaryHeader tracking-wider text-center uppercase">
          Trujillo Media
        </p>
        <h2 className="mb-12 text-4xl font-secondaryHeader leading-none text-center sm:text-5xl">
          Tools
        </h2>
        <div className="grid gap-10 font-bodyText md:gap-8 sm:p-3 md:grid-cols-4 lg:px-12 xl:px-32">
          <div>
            <a href="https://reverent-kalam-97ecca.netlify.app/"><h3 className="text-lg hover:text-brandColor hover:underline">Asana</h3></a> 
          </div>
          <div>
            <a href="https://gallery.pixieset.com/dashboard/"><h3 className="text-lg hover:text-brandColor hover:underline">PixieSet</h3></a> 
          </div>
          <div>
            <a href="https://assist.zoho.com/org/785895746/app/home"><h3 className="text-lg hover:text-brandColor hover:underline">ZOHO Assist</h3></a>
            
          </div>
          <div>
            <a href="https://app.netlify.com/teams/trujillo-media/overview?_ga=2.134060234.531805502.1641834033-740779211.1641834033"><h3 className="text-lg hover:text-brandColor hover:underline">Netlify</h3></a>
            
          </div>
          <div>
            <a href="https://analytics.google.com/analytics/web/#/report-home/a216862994w299064893p258251098"><h3 className="text-lg hover:text-brandColor hover:underline">Google Analytics</h3></a>
            
          </div>
          <div>
            <a href="https://social.zoho.com/social/andrewtrujillo/1222817000000018021/Home.do#home"><h3 className="text-lg hover:text-brandColor hover:underline">ZOHO Social</h3></a>
            
          </div>
          <div>
            <a href="https://app.hubstaff.com/dashboard/420003/team"><h3 className="text-lg hover:text-brandColor hover:underline">Hubstaff</h3></a>
            
          </div>
          <div>
            <a href="https://snipit.io/lists/20305/65822"><h3 className="text-lg hover:text-brandColor hover:underline">Snipits</h3></a>
            
          </div>
          <div>
            <a href="https://www.favicon.cc/"><h3 className="text-lg hover:text-brandColor hover:underline">Favicon Generator</h3></a>
            
          </div>
          <div>
            <a href="https://www.seobility.net/en/seocheck/"><h3 className="text-lg hover:text-brandColor hover:underline">SEO Audit Tool</h3></a>
            
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Home;
