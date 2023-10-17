import app1 from "./assets/app-design/desktop/image-airfilter.jpg";
import app2 from "./assets/app-design/desktop/image-eyecam.jpg";
import app3 from "./assets/app-design/desktop/image-faceit.jpg";
import app4 from "./assets/app-design/desktop/image-todo.jpg";
import app5 from "./assets/app-design/desktop/image-loopstudios.jpg";
function Appdesign() {
  return (
    <div>
      <div className="text-center py-20 px-6  head3 text-white">
        <h1 className="font-bold tracking-wider text-3xl">App design</h1>
        <p className="text-sm mt-3">
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips
        </p>
      </div>
      <Appdesign1 />
      <Headthree />
    </div>
  );
}

function Appdesign1() {
  return (
    <div className=" mt-16 w-4/5 mx-auto">
      <div className="mb-8">
        <img src={app1} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Airfilter
          </h1>
          <p className="leading-6 mt-3 text-sm">
            Solving the problem of the poor in-door air quality by filtering air
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={app2} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Eyecam
          </h1>
          <p className="leading-6 mt-3 text-sm">
            Products that lets you edit your favorite photos and videos at
            anytime.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={app3} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Faceit
          </h1>
          <p className="leading-6 mt-3 text-sm">
            Get to meet your favourite internet superstar with the faceit app
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={app4} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">Todo</h1>
          <p className="leading-6 mt-3 text-sm">
            A todo app that features cloud sync with light and dark mode
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={app5} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Loopstudios
          </h1>
          <p className="leading-6 mt-3 text-sm">
            A VR experience app made for Loopstudios
          </p>
        </div>
      </div>
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
export default Appdesign;
