import { Outlet } from "react-router";
import Navbar from "~/components/NavBar";

const withNavbarLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default withNavbarLayout;
