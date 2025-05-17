import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav >
      <ul className="flex justify-around">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;