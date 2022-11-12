
export const getGifs = async (category: string) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=323Z9emdA3fE91vMDqH3NwamKb6X5O1B&q=${category}&limit=21`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}
