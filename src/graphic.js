import gra1 from "./assets/graphic-design/desktop/image-change.jpg";
import gra2 from "./assets/graphic-design/desktop/image-boxed-water.jpg";
import gra3 from "./assets/graphic-design/desktop/image-science.jpg";
function Graphic() {
  return (
    <div className=" lg:w-4/5 lg:mx-auto xl:w-4/5 xl:mx-auto">
      <div className="text-center  xl:px-72 xl:mx-0 py-20 sm:px-14 sm:mt-7 px-6 sm:mx-10 sm:rounded-xl head3 text-white">
        <h1 className="font-bold tracking-wider text-3xl">Graphic design</h1>
        <p className="text-sm mt-3 sm:text-base">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives
        </p>
      </div>
      <Graphicdesign1 />
      <Headthree />
    </div>
  );
}

function Graphicdesign1() {
  return (
    <div className=" mt-16 w-4/5 mx-auto xl:w-full  xl:flex xl:flex-wrap xl:justify-between">
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={gra1}
          className="rounded-t-xl xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none px-8 py-8 sm:pt-20 sm:px-5 rounded-b-lg bg-red-100 sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Tim Brown
          </h1>
          <p className="leading-6 xl:text-sm mt-3 text-sm sm:text-base">
            A book cover designed for Tim Brown's new release, 'Change'
          </p>
        </div>
      </div>
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={gra2}
          className="rounded-t-xl xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none px-8 py-8 sm:pt-20 sm:px-5 rounded-b-lg bg-red-100 sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Boxed water
          </h1>
          <p className="leading-6 xl:text-sm mt-3 text-sm sm:text-base">
            A simple packaging concept made for Boxed Water
          </p>
        </div>
      </div>
      <div className="mb-8 sm:flex xl:block xl:w-[30%]">
        <img
          src={gra3}
          className="rounded-t-xl xl:rounded-t-xl xl:rounded-l-none xl:w-full sm:rounded-l-xl sm:rounded-r-none sm:w-2/4"
        />
        <div className="text-center xl:py-10 xl:rounded-b-xl xl:rounded-r-none sm:pt-20 sm:px-5 px-8 py-8 rounded-b-lg bg-red-100 sm:rounded-r-xl sm:rounded-l-none">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Science!
          </h1>
          <p className="leading-6 xl:text-sm mt-3 text-sm sm:text-base sm:text-base">
            A poster made in collaboration with the Federal Art Project
          </p>
        </div>
      </div>
    </div>
  );
}

function Headthree() {
  return (
    <div className="text-white mt-10 sm:mx-10 px-5 xl:flex xl:justify-between">
      <div className="web xl:w-[48%] sm:h-52 flex pl-12 mb-5 items-center text-left rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/webdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl sm:text-2xl">WEB DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
      <div className="app xl:w-[48%] flex pl-12 mb-5 sm:h-52  items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/appdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl sm:text-2xl">APP DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
    </div>
  );
}
export default Graphic;
