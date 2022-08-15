const Article = ({ imgUrl, date, text }) => {
  return (
    <div
      className={`w-[280px] sm:w-[300px] md:w-[320px] bg-slate-900  `}
    >
      <div className="flex">
        <img
          className="h-[200px] w-full cursor-pointer"
          src={imgUrl}
          alt="blog img"
        />
      </div>
      <div>
        <p className="text-white px-5 mt-2">{date}</p>
        <h1 className="text-white text-xl font-bold py-2 px-5">
          {text}
        </h1>
        <p className="text-white px-5 mb-5 cursor-pointer hover:underline">
          Read Full Article
        </p>
      </div>
    </div>
  );
};

export default Article;
