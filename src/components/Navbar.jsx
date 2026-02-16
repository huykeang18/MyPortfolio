
function Navbar() {
  return (
    <>
      <nav className="navbar h-22 flex items-center bg-sky-200 fixed w-full backdrop-blur-lg shadow-md">
        <div className="container-cus flex items-center justify-between">
          <h1 className="lg:text-xl md:text-base text-sm">Hazel</h1>

          <ul className="menu flex gap-12">
            <li>
              <a href="#home" className="lg:text-xl md:text-base text-sm">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="lg:text-xl md:text-base text-sm">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="lg:text-xl md:text-base text-sm">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="lg:text-xl md:text-base text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="lg:text-xl md:text-base text-sm">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;