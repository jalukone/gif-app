import { useState } from 'react';
import { AddCategory, GifCard } from './components';
import { Footer } from './components/footer/Footer';

export const GifApp = () => {
  const [categories, setCategories] = useState<string[]>([
    'Gatos',
  ]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="text-5xl pt-8 font-extrabold text-center lg:text-7xl 2xl:text-8xl">
        <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
          My Gif
        </span>

        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
          App
        </span>
      </h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event as string)}
      />

      {
        categories.map((category) => (
          <GifCard
            key={category}
            category={category} />
        ))
      }
      <Footer />
    </>
  );
};
