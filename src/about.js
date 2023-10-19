import imgabout from "./assets/about/mobile/image-about-hero.jpg";
import imgabout00 from "./assets/about/tablet/image-about-hero.jpg";
import imgabout010 from "./assets/about/desktop/image-about-hero.jpg";
import imgabout0 from "./assets/about/mobile/image-world-class-talent.jpg";
import imgabout000 from "./assets/about/tablet/image-world-class-talent.jpg";
import imgabout0010 from "./assets/about/desktop/image-world-class-talent.jpg";
import imgabout1 from "./assets/about/mobile/image-real-deal.jpg";
import imgabout0000 from "./assets/about/tablet/image-real-deal.jpg";
import imgabout00010 from "./assets/about/desktop/image-real-deal.jpg";
import canimg from "./assets/shared/desktop/illustration-canada.svg";
import ausimg from "./assets/shared/desktop/illustration-australia.svg";
import ukimg from "./assets/shared/desktop/illustration-united-kingdom.svg";
function About() {
  return (
    <div className=" sm:mx-10 lg:w-4/5 lg:mx-auto lg:mt-10 xl:w-4/5 xl:mx-auto ">
      <Aboutone />
      <Abouttwo />
      <Sublocation />
      <Aboutthree />
    </div>
  );
}

function Aboutone() {
  return (
    <div className="text-white xl:flex">
      <picture>
        <source srcSet={imgabout} media="(max-width:460px)" />
        <source srcSet={imgabout00} media="(max-width:1280px)" />
        <img
          src={imgabout010}
          width="100%"
          className="sm:rounded-t-xl xl:rounded-t-none xl:rounded-l-xl xl:w-full "
        />
      </picture>
      <div className="head2 py-14 px-10  xl:px-20 xl:pt-28 text-center rou sm:rounded-b-xl xl:rounded-b-none xl:rounded-r-xl xl:w-3/5">
        <h1 className="text-2xl font-bold sm:text-3xl xl:text-4xl">About us</h1>
        <p className="text-sm mt-3 leading-7 sm:text-lg xl:text-base">
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients.We've partnered with many
          startups,corporations and nonprofits alike to craft design that make
          real impact.We're always looking forward to creating brands, products
          and digital experience that connects with our clients' audience
        </p>
      </div>
    </div>
  );
}

function Abouttwo() {
  return (
    <div className="sm:mt-10  xl:flex xl:flex-row-reverse">
      <picture>
        <source srcSet={imgabout0} media="(max-width:460px)" />
        <source srcSet={imgabout000} media="(max-width:1280px)" />
        <img
          src={imgabout0010}
          width="100%"
          className="sm:rounded-t-xl  xl:rounded-t-none xl:rounded-r-xl xl:w-[28rem] xl:h-[31rem] "
        />
      </picture>
      <div className="about py-10 px-5  xl:px-20 xl:pt-20 text-center sm:px-10 sm:rounded-b-xl xl:rounded-b-none xl:rounded-l-xl xl:w-3/5">
        <h1 className="text-2xl font-bold col sm:text-3xl">
          World-class talent
        </h1>
        <p className="text-sm mt-3 leading-7 sm:text-lg xl:text-base xl:mt-7">
          We are a crew of strategists,problem-solvers and technologies. Every
          design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          myraid of platforms
          <br></br>
          <br></br>We're always looking forward to creating brands, products and
          digital experience that connects with our clients' audience
        </p>
      </div>
    </div>
  );
}

function Sublocation() {
  return (
    <div className="mt-14 xl:flex xl:justify-between xl:mt-20 xl:mx-10">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={canimg} className="pass xl:w-48" />
        </div>
        <h1 className="col font-bold space text-center mt-5">CANADA</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
      <div className="text-center mt-10 xl:mt-0 xl:w-48">
        <div className="flex justify-center items-center">
          <img src={ausimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">AUSTRALIA</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
      <div className="text-center mt-10 xl:mt-0 xl:w-48">
        <div className="flex justify-center items-center">
          <img src={ukimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center tracking-normal mt-5">
          UNITED KINGDOM
        </h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
    </div>
  );
}

function Aboutthree() {
  return (
    <div className="mt-10 xl:flex xl:mt-20">
      <picture>
        <source srcSet={imgabout1} media="(max-width:460px)" />
        <source srcSet={imgabout0000} media="(max-width:1280px)" />

        <img
          src={imgabout00010}
          width="100%"
          className="sm:rounded-t-xl  xl:rounded-t-none xl:rounded-l-xl xl:w-[35rem] xl:h-[31rem]"
        />
      </picture>
      <div className="about py-10 px-5   xl:px-20 xl:pt-20 xl:h-[31rem]  text-center sm:rounded-b-xl  xl:rounded-b-none xl:rounded-r-xl xl:w-3/5">
        <h1 className="text-2xl font-bold col sm:text-3xl xl:text-4xl">
          The real deal
        </h1>
        <p className="text-sm mt-3 leading-7 xl:mt-10 sm:text-lg xl:text-base">
          As strategic partners in our clients' businesses, we are ready to take
          on any challenge as our own.Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity.<br></br>
          <br></br>
          We make design and technology more accessible and give you toolsto
          measure success. We're always looking forward to creating brands,
          products and digital experience that connects with our clients'
          audience
        </p>
      </div>
    </div>
  );
}
export default About;
