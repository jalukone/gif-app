import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifCard = ({ category }: any) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="text-4xl pl-8 font-bold">
        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
          {category}
        </span>
      </h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="md:container mx-auto px-6 flex flex-row flex-wrap justify-evenly items-center">
        {

          images.map((image: any) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  );
};
