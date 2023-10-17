import gra1 from "./assets/graphic-design/desktop/image-change.jpg";
import gra2 from "./assets/graphic-design/desktop/image-boxed-water.jpg";
import gra3 from "./assets/graphic-design/desktop/image-science.jpg";
function Graphic() {
  return (
    <div>
      <div className="text-center py-20 px-6  head3 text-white">
        <h1 className="font-bold tracking-wider text-3xl">Graphic design</h1>
        <p className="text-sm mt-3">
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
    <div className=" mt-16 w-4/5 mx-auto">
      <div className="mb-8">
        <img src={gra1} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Tim Brown
          </h1>
          <p className="leading-6 mt-3 text-sm">
            A book cover designed for Tim Brown's new release, 'Change'
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={gra2} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Boxed water
          </h1>
          <p className="leading-6 mt-3 text-sm">
            A simple packaging concept made for Boxed Water
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={gra3} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Science!
          </h1>
          <p className="leading-6 mt-3 text-sm">
            A poster made in collaboration with the Federal Art Project
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
      <div className="app flex pl-12 mb-5  items-center rounded-lg hover:bg-gradient-to-r hover:text-black from-orange-200">
        <a href="/appdesign" className="cursor-pointer">
          <h1 className="font-medium text-xl">APP DESIGN</h1>
          <p className="tracking-widest">
            VIEW PROJECT <span className="arrow">></span>
          </p>
        </a>
      </div>
    </div>
  );
}
export default Graphic;
