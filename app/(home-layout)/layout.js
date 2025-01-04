import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
