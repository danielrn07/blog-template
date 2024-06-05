const ContactSection = () => {
  return (
    <section id="contact" className="flex flex-col max-w-[960px] mx-auto py-16 px-4 sm:py-32 sm:px-4">
      <h2 className="mb-7 text-orange-400 text-center text-2xl sm:text-5xl">
        Entre em contato
      </h2>
      <form id="formulario">
        <input
          id="nome"
          placeholder="Nome"
          className="h-14 p-4 border border-b-2 outline-none rounded transition duration-300 focus:border-gray-400 focus:hover:border-orange-400"
        />
        <input
          id="email"
          placeholder="Email"
          className="h-14 p-4 border border-b-2 outline-none rounded transition duration-300 focus:border-gray-400 focus:hover:border-orange-400"
        />
        <input
          id="celular"
          placeholder="Celular"
          className="h-14 p-4 border border-b-2 outline-none rounded transition duration-300 focus:border-gray-400 focus:hover:border-orange-400"
        />
        <input
          id="mensagem"
          placeholder="Mensagem"
          className="h-48 sm:h-28 p-4 border border-b-2 outline-none rounded transition duration-300 focus:border-gray-400 focus:hover:border-orange-400"
        />
      </form>
      <button className="sm:self-end uppercase mt-2 bg-orange-500 py-2 px-4 rounded shadow-md transition hover:bg-orange-600">
        Enviar
      </button>
    </section>
  );
};

export default ContactSection