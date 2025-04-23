
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="lg:pl-16">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
