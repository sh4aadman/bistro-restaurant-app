import { NavLink } from "react-router";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiAccountCircleLine } from "react-icons/ri";

const NavBar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/menu">Our Menu</NavLink></li>
      <li><NavLink className="flex items-center gap-1" to="/shop">Our Shop <RiShoppingCartLine /></NavLink></li>
      <li><NavLink className="flex items-center gap-1" to="/sign-out">Sign Out <RiAccountCircleLine /></NavLink></li>
    </>
  );

  return (
    <>
      <header className="flex justify-between items-center pt-8 px-14 pb-6">
        <h1 className="uppercase font-cinzel font-bold text-2xl bg-transparent">Bistro Boss <br /> Restaurant</h1>
        <nav>
          <ul className="uppercase flex gap-4 font-semibold text-xl">{navLinks}</ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
