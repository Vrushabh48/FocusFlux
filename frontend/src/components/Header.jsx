function Header() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h3 className="text-3xl font-sans text-left font-extrabold">
          FocusFlux
        </h3>
      </div>
      <div className="flex justify-center gap-14">  {/* Use justify-end for right alignment */}
        <a href=""><span className="text-lg font-sans comfortaa">Home</span></a>
        <a href=""><span className="text-lg font-sans comfortaa">Contact</span></a>
        <a href=""><span className="text-lg font-sans comfortaa">Account</span></a>
      </div>
    </div>
  );
}

export default Header;
