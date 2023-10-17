import canmap from "./assets/locations/desktop/image-map-canada.png";
import ausmap from "./assets/locations/desktop/image-map-australia.png";
import ukmap from "./assets/locations/desktop/image-map-united-kingdom.png";
function Location() {
  return (
    <div>
      <div>
        <img src={canmap} width="100%" height="20vh" />
        <div className="text-center loc py-10">
          <h1 className="col font-bold tracking-wide text-center text-2xl ">
            Canada
          </h1>
          <div className="text-black mt-3 leading-7">
            <h1 className="font-bold">Designo Central Office</h1>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontairo M9C 3J5</p>
          </div>
          <div className="text-black mt-5 leading-7">
            <h1 className="font-bold">Contact</h1>
            <p>P : +1 253-863-8967</p>
            <p>M : ishmaeldotun@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <img src={ausmap} width="100%" height="20vh" />
        <div className="text-center loc py-10">
          <h1 className="col font-bold tracking-wide text-center text-2xl">
            Australia
          </h1>
          <div className="text-black mt-3 leading-7">
            <h1 className="font-bold">Designo Au Office</h1>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </div>
          <div className="text-black mt-5 leading-7">
            <h1 className="font-bold">Contact</h1>
            <p>P : +1 253-863-8967</p>
            <p>M : ishmaeldotun@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <img src={ukmap} width="100%" height="20vh" />
        <div className="text-center loc py-10">
          <h1 className="col font-bold tracking-wide text-center text-2xl">
            United Kingdom
          </h1>
          <div className="text-black mt-3 leading-7">
            <h1 className="font-bold">Designo UK Office</h1>
            <p>13 Colorado Way</p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div className="text-black mt-5 leading-7">
            <h1 className="font-bold">Contact</h1>
            <p>P : +1 253-863-8967</p>
            <p>M : ishmaeldotun@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
