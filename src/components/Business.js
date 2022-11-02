import React from "react";

const Home = () => {
  return (
    <section className="dark:bg-black dark:text-white">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-primaryHeader tracking-wider text-center uppercase">
          Trujillo Media
        </p>
        <h2 className="mb-12 text-4xl font-secondaryHeader leading-none text-center sm:text-5xl">
          Company Links
        </h2>
        <div className="grid gap-10 font-bodyText md:gap-8 sm:p-3 md:grid-cols-4 lg:px-12 xl:px-32">
          <div>
            <a href="https://www.trujillomedia.com/"><h3 className="text-lg hover:text-brandColor hover:underline">Trujillo Media Website</h3></a>
            
          </div>
          <div>
            <a href="https://app.netlify.com/teams/trujillo-media/overview?_ga=2.134060234.531805502.1641834033-740779211.1641834033"><h3 className="text-lg hover:text-brandColor hover:underline">Netlify</h3></a>
            
          </div>
          <div>
            <a href="https://analytics.google.com/analytics/web/#/report-home/a216862994w299064893p258251098"><h3 className="text-lg hover:text-brandColor hover:underline">Google Analytics</h3></a>
            
          </div>
          <div>
            <a href="https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage"><h3 className="text-lg hover:text-brandColor hover:underline">OneDrive</h3></a>
            
          </div>
          <div>
            <a href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000006-0000-0ff1-ce00-000000000000&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DhSzishUN5134zcV5HVnxt6H-EzyKzpYCCCmYKDH5rJRexKFuMLpsQwjDdQI9Gs3UmS_8d2N1AfkE7f5WdvTcfk0LL6azShmVbuk_rNJhe1G-NLuuuc7ImtAJ1qIejiDuMm_H54fTLbFyKD9CLgygKGnuoXPmk8qdUivdzjRPUpMIBjxnfIJQmOwArjday9XP&response_mode=form_post&nonce=637881417548209535.OTE1YmY5MzUtN2UzMy00ZDMwLWE1NjAtNTJkMGE4NGFhODVjYWU1ZGQwMmUtMTZmNC00M2YzLWJhODMtY2VjNjE2ZmE4MzZh&redirect_uri=https%3A%2F%2Fadmin.microsoft.com%2Flanding&ui_locales=en-US&mkt=en-US&client-request-id=4c804a76-b2fe-4fc8-8593-f7e81b318239&x-client-SKU=ID_NET45&x-client-ver=6.12.1.0"><h3 className="text-lg hover:text-brandColor hover:underline">Microsoft Admin</h3></a>
            
          </div>
          <div>
            <a href="https://www.zoho.com/assist/"><h3 className="text-lg hover:text-brandColor hover:underline">ZOHO Assist</h3></a>
            
          </div>
          <div>
            <a href="https://www.dnb.com/"><h3 className="text-lg hover:text-brandColor hover:underline">D-U-N-S</h3></a>
            
          </div>
          <div>
            <a href="https://app.qbo.intuit.com/app/login?&useNeo=true"><h3 className="text-lg hover:text-brandColor hover:underline">Quickbooks</h3></a>
            
          </div>
          <div>
            <a href="https://www.nbkc.com/"><h3 className="text-lg hover:text-brandColor hover:underline">NBKC</h3></a>
            
          </div>
          <div>
            <a href="https://www.udemy.com/"><h3 className="text-lg hover:text-brandColor hover:underline">Udemy</h3></a>
            
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Home;
