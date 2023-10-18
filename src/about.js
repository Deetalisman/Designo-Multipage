import imgabout from "./assets/about/mobile/image-about-hero.jpg";
import imgabout00 from "./assets/about/tablet/image-about-hero.jpg";
import imgabout0 from "./assets/about/mobile/image-world-class-talent.jpg";
import imgabout000 from "./assets/about/tablet/image-world-class-talent.jpg";
import imgabout1 from "./assets/about/mobile/image-real-deal.jpg";
import imgabout0000 from "./assets/about/tablet/image-real-deal.jpg";
import canimg from "./assets/shared/desktop/illustration-canada.svg";
import ausimg from "./assets/shared/desktop/illustration-australia.svg";
import ukimg from "./assets/shared/desktop/illustration-united-kingdom.svg";
function About() {
  return (
    <div className=" sm:mx-10 lg:w-4/5 lg:mx-auto lg:mt-10 ">
      <Aboutone />
      <Abouttwo />
      <Sublocation />
      <Aboutthree />
    </div>
  );
}

function Aboutone() {
  return (
    <div className="text-white bg">
      <picture>
        <source srcSet={imgabout} media="(max-width:460px)" />
        <img src={imgabout00} width="100%" className="sm:rounded-t-xl" />
      </picture>
      <div className="head2 py-14 px-10 text-center rou">
        <h1 className="text-2xl font-bold sm:text-3xl">About us</h1>
        <p className="text-sm mt-3 leading-7 sm:text-lg">
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
    <div>
      <picture>
        <source srcSet={imgabout0} media="(max-width:460px)" />
        <img src={imgabout000} width="100%" />
      </picture>
      <div className="about py-10 px-5 text-center sm:px-10">
        <h1 className="text-2xl font-bold col sm:text-3xl">
          World-class talent
        </h1>
        <p className="text-sm mt-3 leading-7 sm:text-lg">
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
    <div className="mt-14">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={canimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">CANADA</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
      <div className="text-center mt-10">
        <div className="flex justify-center items-center">
          <img src={ausimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">AUSTRALIA</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
      <div className="text-center mt-10">
        <div className="flex justify-center items-center">
          <img src={ukimg} className="pass" />
        </div>
        <h1 className="col font-bold space text-center mt-5">UNITED KINGDOM</h1>
        <button className="text-white back p-3 px-5 rounded-md font-semibold mt-3">
          <a href="/location">SEE LOCATION</a>
        </button>
      </div>
    </div>
  );
}

function Aboutthree() {
  return (
    <div className="mt-10">
      <picture>
        <source srcSet={imgabout1} media="(max-width:460px)" />
        <img src={imgabout0000} width="100%" />
      </picture>
      <div className="about py-10 px-5 text-center">
        <h1 className="text-2xl font-bold col sm:text-3xl">The real deal</h1>
        <p className="text-sm mt-3 leading-7 sm:text-lg">
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
