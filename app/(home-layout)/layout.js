import Header from "@/components/Header/header";

const HomeLayout = ({ children }) => {
  return (
    <main className="container">
      <Header />
      {children}
    </main>
  );
};

export default HomeLayout;
