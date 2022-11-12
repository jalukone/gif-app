type Props = {
  title: string,
  url: string,
  id: string
}
export const GifItem = ({ title, url, id }: Props) => {
  return (
    <div className="flex flex-col m-2 rounded-lg border-solid shadow-2xl">
      <img src={url} alt={title} className="rounded-lg" />
      <span className="text-center p-2 text-transparent text-lg font-semibold bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
        {title}
      </span>
    </div>
  )
}
