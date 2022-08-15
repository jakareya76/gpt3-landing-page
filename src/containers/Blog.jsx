import { Article } from '../components';
import blog01 from '../images/blog01.png';
import blog02 from '../images/blog02.png';
import blog03 from '../images/blog03.png';
import blog04 from '../images/blog04.png';
import blog05 from '../images/blog05.png';

const ArticleData = [
  {
    title:
      'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021',
    image: blog01,
  },
  {
    title:
      'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021',
    image: blog02,
  },
  {
    title:
      'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021',
    image: blog03,
  },
  {
    title:
      'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021',
    image: blog04,
  },
  {
    title:
      'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021',
    image: blog05,
  },
  {
    title:
      'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    date: 'Sep 26, 2021',
    image: blog01,
  },
];

const Blog = () => {
  return (
    <section className="container mx-auto py-16">
      <div className="">
        <h1 className="gradient__text font-bold text-center pb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className=" flex flex-row justify-center items-center gap-10 mt-16 md:mt-28">
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ArticleData.map((curElem, idx) => {
            return (
              <Article
                imgUrl={curElem.image}
                text={curElem.title}
                date={curElem.date}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;

//
