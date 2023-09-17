import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="App font-Nunito bg-whiteBG dark:bg-VDGrayBG min-h-screen  ">
      <div className="max-w-screen-2xl mx-auto relative">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
