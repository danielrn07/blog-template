const Banner = () => {
  return (
    <section className="bg-[#181818] py-32 px-4">
      <div className="flex flex-col items-center gap-12">
        <img
          src="https://egvelho-blog-template.netlify.app/android-chrome-256x256.png"
          className="w-64 brightness-0 invert"
        ></img>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-center text-white text-[34px] sm:text-[48px]">Título do banner</h1>
          <h2 className="font-light text-white text-xl sm:text-[34px]">Texto do subtítulo.</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner