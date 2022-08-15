import possibilityImage from './../images/possibility.png';

const Possibility = () => {
  return (
    <section
      id="possibility"
      className="container mx-auto flex flex-col items-center justify-center md:flex-row"
    >
      <div className="md:w-1/2">
        <img src={possibilityImage} alt="img" />
      </div>
      <div className="md:w-1/2">
        <h4 className="text-gray-300 font-semibold my-5 text-center sm:text-left">
          Request Early Access to Get Started
        </h4>
        <h1 className="gradient__text text-center font-bold text-2xl sm:text-left sm:text-3xl  md:text-4xl lg:text-5xl pb-2">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p className="text-blue-200 text-center sm:text-left my-5 px-5 sm:px-0">
          Yet bed any for travelling assistance indulgence unpleasing.
          Not thoughts all exercise blessing. Indulgence way
          everything joy alteration boisterous the attachment. Party
          we years to order allow asked of.
        </p>
        <h4 className="text-orange-300 font-semibold mt-10 text-center sm:text-left">
          Request Early Access to Get Started
        </h4>
      </div>
    </section>
  );
};

export default Possibility;
