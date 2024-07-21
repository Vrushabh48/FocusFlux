function Navbar(){
    return (
        <div className="flex gap-11 p-4 shadow-lg">
            <h2 className="p-5 font-extrabold text-[30px]">FocusFlux</h2>
            <ul  className="flex gap-7 p-9 font-semibold text-lg">
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}

export default Navbar