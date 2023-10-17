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
    <div className="flex justify-between py-5 px-2 relative">
      <a href="/" className="flex">
        <img src={img2} width="150px" />
      </a>
      {ham && (
        <div className="bg-slate-700  text-white absolute left-0 w-full p-5 leading-8 top-14">
          <a href="/about">OUR COMPANY</a> <br></br>
          <a href="/location">LOCATIONS</a> <br></br>
          <a href="/contact">CONTACT</a>
        </div>
      )}
      <img
        src={ham ? img01 : img1}
        className="cursor-pointer"
        onClick={handleHam}
        alt="mee"
      />
    </div>
  );
}

export default Headone;
