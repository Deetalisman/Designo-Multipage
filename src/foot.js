import img7 from "./assets/shared/desktop/icon-facebook.svg";
import img8 from "./assets/shared/desktop/icon-youtube.svg";
import img9 from "./assets/shared/desktop/icon-twitter.svg";
import img10 from "./assets/shared/desktop/icon-pinterest.svg";
import img11 from "./assets/shared/desktop/icon-instagram.svg";
import img22 from "./assets/shared/mobile/logo-light.png";
import { Link } from "react-router-dom";

function Foot() {
  return (
    <div className="bg-slate-700  relative p-5 text-center pb-8 mt-60 md:px-14 sm:px-7">
      <Subhead />
      <div className="sm:flex sm:justify-between md:px-15">
        <div className="flex justify-center items-center py-5 mt-48">
          <img src={img22} width="200px" />
        </div>
        <hr className=" sm:none"></hr>
        <div className="text-white mt-5 leading-10 tracking-widest sm:mt-52 sm:flex sm:justify-evenly">
          <p className="sm:mr-5">
            <a href="/about">OUR COMPANY</a> <br></br>
          </p>
          <p className="sm:mr-5">
            <a href="/location">LOCATIONS</a> <br></br>
          </p>
          <p>
            <a href="/contact">CONTACT</a>
          </p>
        </div>
      </div>
      <hr className="none sm:block"></hr>
      <div className="sm:flex justify-between">
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
          <img src={img7} className="mr-5 cursor-pointer " />
          <img src={img8} className="mr-5 cursor-pointer" />
          <img src={img9} className="mr-5 cursor-pointer" />
          <img src={img10} className="mr-5 cursor-pointer" />
          <img src={img11} className="mr-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
function Subhead() {
  return (
    <div className="flex justify-center items-center">
      <div className="head2 absolute mb-5 -top-44  h-auto w-5/6   rounded-lg text-white py-14 px-6 sm:px-24">
        <h1 className="text-2xl font-medium sm:text-3xl">
          Let's talk about your project
        </h1>
        <p className="mt-4 text-sm leading-6 sm:text-base">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
        <button className="mt-5 bg-white text-black p-3 rounded">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
}
export default Foot;
