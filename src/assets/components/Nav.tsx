import Logo from "../logo-text.png";

const Nav = () => {
    return (
        <nav className=" bg-white py-4 w-full">
            <div className=" max-w-7xl flex justify-between items-center container mx-auto px-6 lg:px-8 ">

                <img src={Logo} alt="" />
                <ul className="flex justify-between gap-6 font-medium">
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