import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-4">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-neutral p-4 drawer-button lg:hidden"
        ></label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-teal-700 text-white">
          <>
            <li>
              <NavLink to="/dashboard/addWatch">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageItems">Activities</NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/allUsers">All Activities</NavLink>
            </li>
          </>

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
