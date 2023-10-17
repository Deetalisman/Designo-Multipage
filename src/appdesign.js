function Appdesign() {
  return (
    <div>
      <Headthree />
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
