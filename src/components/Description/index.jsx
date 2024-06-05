const Description = () => {
  return (
    <section id="description" className="flex flex-col items-center py-32 px-4 bg-gradient-to-r from-primary-500 to-secondary-500">
      <h2 className="text-[34px] sm:text-5xl text-white mb-8">Descrição do site</h2>
      <div className="flex flex-col text-white gap-16 items-center max-w-[720px]">
        <div className="flex gap-4 items-center">
          <img
            src="https://fastly.picsum.photos/id/201/5000/3333.jpg?hmac=NE8fOMa8u9PBfkq4AVwEoJdRqoPTNwUsyKvKWuXyNCk"
            className="w-[72px] h-[72px] sm:w-32 sm:h-32 rounded-full object-cover"
          ></img>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-right">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <img
            src="https://fastly.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8"
            className="w-[72px] h-[72px] sm:w-32 sm:h-32 rounded-full object-cover"
          ></img>
        </div>
        <div className="flex gap-4 items-center">
          <img
            src="https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so"
            className="w-[72px] h-[72px] sm:w-32 sm:h-32 rounded-full object-cover"
          ></img>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description