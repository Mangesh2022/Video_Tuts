import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
