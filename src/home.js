import img3 from "./assets/home/desktop/image-hero-phone.png";
import img4 from "./assets/home/desktop/illustration-passionate.svg";
import img5 from "./assets/home/desktop/illustration-resourceful.svg";
import img6 from "./assets/home/desktop/illustration-friendly.svg";

function Home() {
  return (
    <div>
      <Headtwo />
      <Headthree />
      <Headfour />
    </div>
  );
}

function Headtwo() {
  return (
    <div className="text-center px-8 pt-24 head2 text-white">
      <h1 className="font-medium text-3xl">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className="mt-4 text-lg">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className="mt-5 bg-white text-black p-3 px-5 rounded">
        LEARN MORE
      </button>
      <img src={img3} />
    </div>
  );
}

function Headthree() {
  return (
    <div className="text-white mt-10 px-5">
      <div className="web flex pl-12 mb-5 items-center text-left rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/webdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl">WEB DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
      <div className="app flex pl-12 mb-5  items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/appdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl">APP DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
      <div className="design flex pl-12 mb-3  items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/graphic" className="cursor-pointer">
          <h1 className="font-medium text-xl">GRAPHIC DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
    </div>
  );
}

function Headfour() {
  return (
    <div className="my-10">
      <div className="text-center mx-auto w-4/5 items-center ">
        <div className="flex justify-center items-center ">
          <img src={img4} className="w-32 h-30 pass" />
        </div>
        <h1 className="font-medium tracking-widest mt-3">PASSIONATE</h1>
        <p className="mt-3 text-sm leading-6">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose.We merge art,design and
          technology into exciting new solutions.
        </p>
      </div>
      <div className="text-center mt-10 mx-auto w-4/5">
        <div className="flex justify-center items-center">
          <img src={img5} className="w-32 h-30 pass" />
        </div>
        <h1 className="font-medium tracking-widest mt-3">RESOURCEFUL</h1>
        <p className="mt-3 text-sm leading-6">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose.We merge art,design and
          technology into exciting new solutions.
        </p>
      </div>
      <div className="text-center mt-10 mx-auto w-4/5">
        <div className="flex justify-center items-center">
          <img src={img6} className="w-32 h-30 pass" />
        </div>
        <h1 className="font-medium tracking-widest mt-3">FRIENDLY</h1>
        <p className="mt-3 text-sm leading-6">
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose.We merge art,design and
          technology into exciting new solutions.
        </p>
      </div>
    </div>
  );
}
export default Home;
