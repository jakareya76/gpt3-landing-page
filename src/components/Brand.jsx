import google from '../images/google.png';
import slack from '../images/slack.png';
import atlassian from '../images/atlassian.png';
import dropbox from '../images/dropbox.png';
import shopify from '../images/shopify.png';

const Brand = () => {
  return (
    <section className="flex justify-center items-center py-16 px-24 ">
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="flex gap-5 items-center justify-center flex-row">
          <img src={google} alt="" />
          <img src={slack} alt="" />
        </div>
        <div className="flex gap-5 items-center justify-center flex-row">
          <img src={atlassian} alt="" />
          <img src={dropbox} alt="" />
        </div>
        <div className="flex gap-5 items-center justify-center flex-row">
          <img src={shopify} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brand;
