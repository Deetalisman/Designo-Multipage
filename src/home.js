import img3 from "./assets/home/desktop/image-hero-phone.png";
import img31 from "./assets/home/desktop/image-hero-phone11.jpg";
import img311 from "./assets/home/desktop/image-hero-phone111.jpg";
import img4 from "./assets/home/desktop/illustration-passionate.svg";
import img5 from "./assets/home/desktop/illustration-resourceful.svg";
import img6 from "./assets/home/desktop/illustration-friendly.svg";

function Home() {
  return (
    <div className="lg:w-4/5 lg:mx-auto lg:mt-10  xl:w-4/5 xl:mx-auto ">
      <Headtwo />
      <Headthree />
      <Headfour />
    </div>
  );
}

function Headtwo() {
  return (
    <div className="text-center xl:flex xl:justify-between xl:px-20 xl:pt-20 xl:text-left lg:px-32 lg:pt-14 md:pt-36 px-8 pt-24 head2 text-white sm:px-20 lg:rounded-2xl">
      <div className="xl:w-[30rem]">
        <h1 className="font-medium  text-3xl sm:text-4xl lg:text-5xl hea">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mt-4 text-lg sm:mt-6">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="mt-5 md:mt-10 bg-white text-black p-3 px-5 rounded">
          LEARN MORE
        </button>
      </div>
      <div className="flex justify-center items-center">
        <picture>
          <source srcSet={img3} media="(max-width:1024px)" />
          <source srcSet={img31} media="(max-width:1280px)" />
          <img
            src={img311}
            className="lg:rounded-t-3xl lg:mt-5 xl:w-[20rem] xl:ml-5 xl:mt-0 xl:rounded-3xl"
          />
        </picture>
      </div>
    </div>
  );
}

function Headthree() {
  return (
    <div className="text-white  mt-10 px-5 sm:px-16 md:px-18 lg:px-0 xl:flex  xl:ml-9">
      <div className="web xl:w-1/2 xl:h-auto sm:h-52 md:h-72 flex pl-12 mb-5 items-center text-left rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/webdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl sm:text-2xl">WEB DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
      <div className="xl:w-2/5 xl:ml-4">
        <div className="app flex pl-12 mb-5 xl:w-full sm:h-52 xl:h-56 md:h-72 items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
          <a href="/appdesign" className="cursor-pointer">
            <h1 className="font-medium text-xl sm:text-2xl">APP DESIGN</h1>
            <p className="tracking-widest">
              VIEW PROJECT <span className="arrow">></span>
            </p>
          </a>
        </div>
        <div className="design flex pl-12 mb-3 xl:w-full xl:h-56  md:h-72 sm:h-52 items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
          <a href="/graphic" className="cursor-pointer">
            <h1 className="font-medium text-xl sm:text-2xl">GRAPHIC DESIGN</h1>
            <p className="tracking-widest">
              VIEW PROJECT <span className="arrow">></span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

function Headfour() {
  return (
    <div className="my-10 sm:mt-20 lg:px-0 lg:mx-0 xl:flex xl:justify-between">
      <div className="text-center xl:mx-5  xl:block mx-auto w-4/5 items-center sm:flex lg:px-0 ">
        <div className="flex justify-center items-center ">
          <img src={img4} className="w-32 h-30 pass sm:w-96 xl:w-36" />
        </div>
        <div className="text-left ml-16 xl:text-center xl:ml-0">
          <h1 className="font-medium tracking-widest mt-3">PASSIONATE</h1>
          <p className="mt-3 text-sm leading-6 ">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose.We merge art,design and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="text-center xl:mx-5  xl:block mt-10 mx-auto w-4/5 sm:flex xl:mt-0">
        <div className="flex justify-center items-center">
          <img src={img5} className="w-32 h-30 pass sm:w-96 xl:w-36" />
        </div>
        <div className="text-left ml-16  xl:text-center xl:ml-0">
          <h1 className="font-medium tracking-widest mt-3">RESOURCEFUL</h1>
          <p className="mt-3 text-sm leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose.We merge art,design and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
      <div className="text-center xl:mx-5 xl:block mt-10 mx-auto w-4/5 sm:flex xl:mt-0">
        <div className="flex justify-center items-center">
          <img src={img6} className="w-32 h-30 pass sm:w-96 xl:w-36" />
        </div>
        <div className="text-left ml-16 xl:text-center xl:ml-0">
          <h1 className="font-medium tracking-widest mt-3">FRIENDLY</h1>
          <p className="mt-3 text-sm leading-6">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose.We merge art,design and
            technology into exciting new solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
