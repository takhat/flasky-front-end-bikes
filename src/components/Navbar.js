import "./Navbar.css";

const Navbar = () => {
  const links = ["Home", "Add Bike", "Edit Bike"];

  return (
    <nav>
      {links.map((link) => (
        <a href="https://adadevelopersacademy.org">{link}</a>
      ))}
    </nav>
  );
};
export default Navbar;
