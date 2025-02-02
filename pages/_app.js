import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-1">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
