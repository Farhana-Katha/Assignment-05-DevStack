import Logo from "../logo-text.png";

const Nav = () => {
    return (
        <nav className="p-3">
            <div className="flex justify-between items-center container mx-auto ">
            <img src={Logo} alt="" />
            <ul className="flex justify-between gap-4 font-medium">
                <li className="text-pink-500">Home</li>
                <div className="text-gray-600 flex justify-between gap-4 font-medium">
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>contact</li>
                </div>
            </ul>
            <div>
                <button class="btn btn-active rounded-4xl">Sign In</button>
                <button class="btn btn-active btn-secondary rounded-4xl">Sign Up</button>
            </div>
          </div> 
        </nav>
    );
};

export default Nav;