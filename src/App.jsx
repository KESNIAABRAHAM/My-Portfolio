import { HelmetProvider, Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./components/Portfolio";

function App() {
AOS.init({
  duration: 1000,
  once:false,
});
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Kesnia | Frontend Engineer</title>
          <meta
            name="description"
            content="Portfolio of Kesnia, a Software engineer."
          />
          <meta property="og:title" content="Kesnia | Software Engineer" />
          <meta
            property="og:description"
            content="Explore Kesnia's projects and frontend expertise."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://kes-dev-portfolio.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://kes-dev-portfolio.vercel.app/og-image.png"
          />
        </Helmet>
        <Portfolio />
      </HelmetProvider>
    </>
  );
}

export default App;
