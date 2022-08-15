const CTA = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-gradient-to-r from-[#b115b1] to-[#6ba54a] py-10 px-10 my-10 rounded-md flex items-center justify-between flex-col md:flex-row m-2 ">
        <div>
          <p className="text-md">
            Request Early Access to Get Started
          </p>
          <h1 className="text-2xl font-semibold">
            Register Today & start exploring the endless
            possibilities.
          </h1>
        </div>
        <div>
          <button className=" bg-black text-white py-2 px-10 uppercase rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
