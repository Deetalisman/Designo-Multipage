import web1 from "./assets/web-design/desktop/image-express.jpg";
import web2 from "./assets/web-design/desktop/image-transfer.jpg";
import web3 from "./assets/web-design/desktop/image-photon.jpg";
import web4 from "./assets/web-design/desktop/image-builder.jpg";
import web5 from "./assets/web-design/desktop/image-blogr.jpg";
import web6 from "./assets/web-design/desktop/image-camp.jpg";
function Webdesign() {
  return (
    <div>
      <div className="text-center py-20 px-6  head3 text-white">
        <h1 className="font-bold tracking-wider text-3xl">Web design</h1>
        <p className="text-sm mt-3">
          We build websites that serve as powerful marketing tools and bring
          memorable brand experience
        </p>
      </div>
      <Webdesign1 />
      <Headthree />
    </div>
  );
}

function Webdesign1() {
  return (
    <div className=" mt-16 w-4/5 mx-auto">
      <div className="mb-8">
        <img src={web1} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Express
          </h1>
          <p className="leading-6 mt-3 text-sm">
            A multi-carrier shipping website for ecommerce businesses
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={web2} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Transfer
          </h1>
          <p className="leading-6 mt-3 text-sm">
            Site for low-cost money transfers and sending money within seconds
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={web3} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Photon
          </h1>
          <p className="leading-6 mt-3 text-sm">
            A state-of-the-art music player with high-resolution audio and DSP
            effects.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={web4} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">
            Builder
          </h1>
          <p className="leading-6 mt-3 text-sm">
            Connects users with local contractors based on their location
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={web5} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">Blogr</h1>
          <p className="leading-6 mt-3 text-sm">
            Blogr is a platfrom for creating an online blog or platform
          </p>
        </div>
      </div>
      <div className="mb-8">
        <img src={web6} className="rounded-t-xl" />
        <div className="text-center px-8 py-8 rounded-b-lg bg-red-100">
          <h1 className="arrow font-semibold tracking-widest text-xl">Camp</h1>
          <p className="leading-6 mt-3 text-sm">
            Get expert training in coding,data,design and digital marketing
          </p>
        </div>
      </div>
    </div>
  );
}
function Headthree() {
  return (
    <div className="text-white mt-10 px-5">
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
export default Webdesign;
