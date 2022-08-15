import { Feature } from '../components';

const WhatGPT3 = () => {
  return (
    <section
      id="wgpt3"
      className="container mx-auto py-16 px-5 md:px-16 lg:px-24 hover:cursor-pointer"
    >
      <div className="flex flex-col p-4 md:p-[2rem] bg-slate-900 rounded-md ">
        <div className="flex">
          <Feature
            title="What Is GPT-3"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            dir="flex-row"
          />
        </div>
        <div className="flex flex-col justify-between items-center mt-[4rem] mb-[2rem]  md:flex-row">
          <h1 className="gradient__text text-2xl sm:text-[34px] font-bold font-sans max-w-[510px] sm:leading-[45px] text-center sm:text-left">
            The Possibility Beyond You Imagination
          </h1>
          <p className="leading-[30px] text-[#FF8A71] font-[500] text-[16px] cursor-pointer">
            Explore The Libary
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8 pr-5">
          <Feature
            title="Chatbots"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            dir="flex-col"
          />
          <Feature
            title="Knowledgebase"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            dir="flex-col"
          />
          <Feature
            title="Education"
            text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            dir="flex-col"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatGPT3;
