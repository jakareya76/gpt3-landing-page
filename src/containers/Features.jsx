import { Feature } from '../components';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => {
  return (
    <section
      id="feature"
      className="container mx-auto mt-10 flex justify-center items-center flex-col md:flex-row"
    >
      <div>
        <h1 className="gradient__text font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:text-left">
          The Future Is Now and <br /> You Just Need To Realize It.
          Step into Future Today & Make It Happen
        </h1>
        <p className="text-[#96c471] mt-5 font-semibold text-center sm:text-left">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="px-5">
        {featuresData.map((curElem, idx) => {
          return (
            <Feature
              key={idx}
              title={curElem.title}
              text={curElem.text}
              dir="flex-row"
              textColor="text-blue-100"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
