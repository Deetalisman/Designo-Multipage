import { useState } from "react";
import { Link } from "react-router-dom";
import img01 from "./assets/shared/mobile/icon-close.svg";
import img1 from "./assets/shared/mobile/icon-hamburger.svg";
import img2 from "./assets/shared/mobile/logo-dark.png";
function Headone() {
  const [ham, setHam] = useState(false);
  function handleHam() {
    console.log(ham);
    setHam((ham) => !ham);
  }
  return (
    <div className="flex justify-between py-5 px-3 relative">
      <a href="/" className="flex">
        <img src={img2} width="180px" />
      </a>
      {ham && (
        <div className="bg-slate-700 text-xl text-white absolute left-0 w-full p-10 top-16 py-10 leading-8">
          <p className="mb-5">
            <a href="/about">OUR COMPANY</a>
          </p>{" "}
          <p className="mb-5">
            <a href="/location">LOCATIONS</a>
          </p>{" "}
          <a href="/contact">CONTACT</a>
        </div>
      )}
      <img
        src={ham ? img01 : img1}
        className="cursor-pointer"
        onClick={handleHam}
        alt="mee"
        width="35px"
      />
    </div>
  );
}

export default Headone;
