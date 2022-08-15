const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center bg-slate-900 py-16">
      <div className="container mx-auto grid place-items-center">
        <h1 className="gradient__text text-center font-bold max-w-[50%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Do you want to step in to the future before others
        </h1>
        <button className="text-white py-1 px-3 border-2 border-white my-14 rounded-md capitalize font-bold hover:bg-white hover:text-black">
          request early access
        </button>
        <div className="grid grid-cols-1 gap-5 place-items-start lg:place-items-center my-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="text-white">
            <h1 className="text-white font-bold text-2xl my-1">
              GPT-3
            </h1>
            <p className="text-gray-200 text-sm">
              Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights
              Reserved
            </p>
          </div>
          <div className="text-white">
            <h4 className="text-white font-bold text-xl mb-2">
              Links
            </h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="text-white">
            <h4 className="text-white font-bold text-xl mb-2">
              Company
            </h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="text-white">
            <h4 className="text-white font-bold text-xl mb-2">
              Get in touch
            </h4>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
        <div className="mt-10 text-white bg-slate-800">
          <p>@2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
