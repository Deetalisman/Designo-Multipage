import app1 from "./assets/app-design/desktop/image-airfilter.jpg";
import app2 from "./assets/app-design/desktop/image-eyecam.jpg";
import app3 from "./assets/app-design/desktop/image-faceit.jpg";
import app4 from "./assets/app-design/desktop/image-todo.jpg";
import app5 from "./assets/app-design/desktop/image-loopstudios.jpg";
function Appdesign() {
  return (
    <div className=" lg:w-4/5 lg:mx-auto  xl:w-4/5 xl:mx-auto">
      <div className="text-center xl:mx-0 xl:px-64 sm:mt-7 py-20 px-6 sm:px-14 head3 text-white sm:mx-10 sm:rounded-lg">
        <h1 className="font-bold tracking-wider text-3xl sm:text-4xl">
          App design
        </h1>
        <p className="text-sm mt-3 sm:text-lg">
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
    <div className=" mt-16 w-4/5 mx-auto xl:w-full xl:flex xl:flex-wrap xl:justify-between">
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={app1}
          className="rounded-t-xl xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none sm:pt-20 sm:px-5 px-8 py-8 rounded-b-lg bg-red-100 sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Airfilter
          </h1>
          <p className="leading-6 mt-3 text-sm text-base ">
            Solving the problem of the poor in-door air quality by filtering air
          </p>
        </div>
      </div>
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={app2}
          className="rounded-t-xl  xl:rounded-t-xl xl:rounded-l-none  xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none sm:pt-20 px-8 py-8 rounded-b-lg bg-red-100  sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Eyecam
          </h1>
          <p className="leading-6 mt-3 text-sm sm:text-base">
            Products that lets you edit your favorite photos and videos at
            anytime.
          </p>
        </div>
      </div>
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={app3}
          className="rounded-t-xl  xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none sm:pt-20 px-8 py-8 rounded-b-lg bg-red-100  sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Faceit
          </h1>
          <p className="leading-6 mt-3 text-sm sm:text-base">
            Get to meet your favourite internet superstar with the faceit app
          </p>
        </div>
      </div>
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={app4}
          className="rounded-t-xl  xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none sm:pt-20 px-8 py-8 rounded-b-lg bg-red-100  sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">Todo</h1>
          <p className="leading-6 mt-3 text-sm sm:text-base">
            A todo app that features cloud sync with light and dark mode
          </p>
        </div>
      </div>
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={app5}
          className="rounded-t-xl  xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none sm:pt-20 px-8 py-8 rounded-b-lg bg-red-100 sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Loopstudios
          </h1>
          <p className="leading-6 mt-3 text-sm sm:text-base">
            A VR experience app made for Loopstudios
          </p>
        </div>
      </div>
    </div>
  );
}

function Headthree() {
  return (
    <div className="text-white mt-10 px-5 sm:mx-10 sm:mt-15 xl:flex xl:justify-between">
      <div className="web  xl:w-[48%] sm:h-52 flex pl-12 mb-5 items-center text-left rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/webdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl sm:text-2xl">WEB DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
      <div className="design  xl:w-[48%] flex pl-12 mb-3 sm:h-52 items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/graphic" className="cursor-pointer">
          <h1 className="font-medium text-xl sm:text-2xl">GRAPHIC DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
    </div>
  );
}
export default Appdesign;
