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
    <div className="text-center px-8 pt-8 head2 text-white">
      <h1 className="font-medium text-xl">
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className="mt-4 text-sm">
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <button className="mt-5 bg-white text-black p-4 rounded">
        LEARN MORE
      </button>
      <img src={img3} />
    </div>
  );
}

function Headthree() {
  return (
    <div className="text-white mt-10 px-5">
      <div className="web flex justify-center mb-3 items-center text-center rounded-lg">
        <div>
          <h1 className="font-medium text-xl">WEB DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </div>
      </div>
      <div className="app flex justify-center  mb-3  items-center text-center rounded-lg">
        <div>
          <h1 className="font-medium text-xl">APP DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </div>
      </div>
      <div className="design flex justify-center  mb-3  items-center text-center rounded-lg">
        <div>
          <h1 className="font-medium text-xl">GRAPHIC DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </div>
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
