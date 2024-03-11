import Sidebar from "./components/Sidebar";

function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        {children}
      </div>
    </div>
  );
}

export default Layout;
