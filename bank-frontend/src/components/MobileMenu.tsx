function MobileMenu() {
  return (
    <div className="md:hidden my-10 h-screen " id="mobile-menu">
      <div className="space-y-16  flex flex-col  items-center ">
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Features
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Pricing
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          About Us
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default MobileMenu;
