// import 

function Navbar(){
    return(
        <>
            <nav className="navbar container-cus flex items-center justify-between h-22 text-xl bg-sky-200 fixed">
                <h1>Hazel</h1>
                <div className="menu flex gap-12">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Skills</h1>
                    <h1>Projects</h1>
                    <h1>Contact</h1>
                </div>
            </nav>
        </>
    )
};

export default Navbar;