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
    <div className="">
      <div>
        <img src={web1} />
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
