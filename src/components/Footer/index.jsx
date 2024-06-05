const Footer = () => {
  return (
    <footer className="bg-[#181818] p-4">
      <nav>
        <ul className="flex text-white items-center overflow-x-auto gap-6 uppercase text-center">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Acessar blog</li>
          </a>
          <a href="#contact">
            <li>Realizar contato</li>
          </a>
          <a href="#description">
            <li>Saiba mais</li>
          </a>
          
        </ul>
      </nav>
    </footer>
  );
};

export default Footer