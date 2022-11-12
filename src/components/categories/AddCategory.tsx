import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

// T Y P E S
type Dispatcher<S> = Dispatch<SetStateAction<S>>;

type ToValue = {
  target: HTMLInputElement;
};

type onNewCategoryProps = {
  onNewCategory: Dispatcher<string>;
};

// C O M P O N E N T
export const AddCategory = ({ onNewCategory }: onNewCategoryProps) => {
  //H O O K
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }: ToValue) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} className='flex justify-center my-12'>
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Buscar Gifs"
          className="w-96 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};
