import { HelmetProvider, Helmet } from 'react-helmet-async';

import Portfolio from "./components/Portfolio";
function App() {
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <title>Kesnia | Frontend Engineer</title>
        <meta name="description" content="Portfolio of Uchendu, a frontend engineer specializing in React, Tailwind CSS, and modern UI development." />
        <meta property="og:title" content="Uchendu | Frontend Engineer" />
        <meta property="og:description" content="Explore Uchendu's projects and frontend expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kes-dev-portfolio.vercel.app/" />
        <meta property="og:image" content="https://kes-dev-portfolio.vercel.app/og-image.png" />
      </Helmet>
       <Portfolio/>
    
    </HelmetProvider>

  
   </>
  );
}

export default App;
