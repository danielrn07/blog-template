import Card from '../Card'
import { useState, useEffect } from "react";

const apiUrl = "./../server.json";

const CardList = () => {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    })
    .catch((error) => {
      console.error(error)
    })
   }, [])
  console.log(posts)

  return (
    <section className="flex justify-center max-w-[960px] mx-auto items-cente py-16 px-4 sm:py-32 sm:px-4">
      <div className="flex flex-col">
        <div className="text-center mb-8">
          <h2 className="mb-2 text-orange-400 text-[34px] sm:text-6xl sm:font-light">Conheça o site</h2>
          <h3 className="sm:text-2xl">
            Mais informações sobre os principais links do site.
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              img={post.img}
              title={post.title}
              description={post.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardList