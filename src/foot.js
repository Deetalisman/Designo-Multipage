import img7 from "./assets/shared/desktop/icon-facebook.svg";
import img8 from "./assets/shared/desktop/icon-youtube.svg";
import img9 from "./assets/shared/desktop/icon-twitter.svg";
import img10 from "./assets/shared/desktop/icon-pinterest.svg";
import img11 from "./assets/shared/desktop/icon-instagram.svg";
import img22 from "./assets/shared/mobile/logo-light.png";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <div className="bg-slate-700 relative p-5 text-center pb-8 mt-60 ">
      <Subhead />
      <div className="flex justify-center items-center py-5 mt-36">
        <img src={img22} width="200px" />
      </div>
      <hr></hr>
      <div className="text-white mt-5 leading-10 tracking-widest">
        <a href="/about">OUR COMPANY</a> <br></br>
        <a href="/location">LOCATIONS</a> <br></br>
        <a href="/contact">CONTACT</a>
      </div>
      <div className="text-slate-300 mt-5 leading-7">
        <h1 className="font-bold">Designo Central Office</h1>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontairo M9C 3J5</p>
      </div>
      <div className="text-slate-300 mt-5 leading-7">
        <h1 className="font-bold">Contact Us (Central Office)</h1>
        <p>P : +1 253-863-8967</p>
        <p>M : ishmaeldotun@gmail.com</p>
      </div>
      <div className="flex justify-center items-center mt-7">
        <img src={img7} className="mr-5 cursor-pointer" />
        <img src={img8} className="mr-5 cursor-pointer" />
        <img src={img9} className="mr-5 cursor-pointer" />
        <img src={img10} className="mr-5 cursor-pointer" />
        <img src={img11} className="mr-5 cursor-pointer" />
      </div>
    </div>
  );
}
function Subhead() {
  return (
    <div className="head2 absolute mb-5 -top-44 left-7 h-auto w-5/6 mx-auto rounded-lg text-white py-14 px-6">
      <h1 className="text-2xl font-medium">Let's talk about your project</h1>
      <p className="mt-4 text-sm leading-6">
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <button className="mt-5 bg-white text-black p-3 rounded">
        GET IN TOUCH
      </button>
    </div>
  );
}
export default Foot;
