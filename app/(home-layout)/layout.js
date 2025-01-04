import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default HomeLayout;
