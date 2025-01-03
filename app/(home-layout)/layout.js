import Header from "@/components/Header/header";

const HomeLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="container">{children}</div>
    </main>
  );
};

export default HomeLayout;
