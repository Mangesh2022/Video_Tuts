import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../pages/HOC/Layout/index";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
