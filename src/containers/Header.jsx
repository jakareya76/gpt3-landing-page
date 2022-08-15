import hero from '../images/ai.png';
import people from '../images/people.png';

const Header = () => {
  return (
    <section
      id="home"
      className="container mx-auto px-5 flex items-center flex-col lg:flex-row "
    >
      <div className="flex flex-col lg:w-[60%] xl:w-[55%]">
        <h1 className="gradient__text text-4xl font-bold font-sans sm:text-5xl lg:text-6xl xl:text-7xl">
          Let's Build Someting amazing with GPT-3 Open AI
        </h1>
        <p className="py-5 text-[#7898d3] ">
          Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all exercise blessing. Indulgence way
          everything joy alteration boisterous the attachment. Party
          we years to order allow asked of.
        </p>
        <div className="flex">
          <input
            className="px-4 rounded-l-md bg-[#494081] outline-none text-white w-full h-12"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="bg-red-500 w-3/6 text-white font-semibold rounded-r-md md:w-2/6">
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-center py-10 flex-col sm:flex-row md:items-start md:justify-start">
          <img src={people} alt="" />
          <p className="text-gray-300 p-2">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="lg:w-[40%] xl:w-[45%] flex items-start justify-center">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Header;
