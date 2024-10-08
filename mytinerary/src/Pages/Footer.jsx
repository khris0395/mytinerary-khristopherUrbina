function Footer(){
    return (
      <footer className="bg-black text-gray-300 py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Enlaces de navegación */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <a href="#" className="hover:text-white transition duration-300">About Us


</a>
            <a href="#" className="hover:text-white transition duration-300">Contact Us</a>
            <a href="#" className="hover:text-white transition duration-300">My Tineraries</a>
            <a href="#" className="hover:text-white transition duration-300">Popular Cities</a>
          </div>
  
          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-pink-500 transition duration-300">Instagram</a>
            <a href="#" className="hover:text-red-500 transition duration-300">YouTube</a>
          </div>
        </div>
  
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2024 MyTineraries. Todos los derechos reservados.
        </div>
      </footer>
    );
  };
  
  export default Footer;