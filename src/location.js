import canmap from "./assets/locations/desktop/image-map-canada.png";
import canmap1 from "./assets/locations/tablet/image-map-canada.png";
import ausmap from "./assets/locations/desktop/image-map-australia.png";
import ausmap1 from "./assets/locations/tablet/image-map-australia.png";
import ukmap from "./assets/locations/desktop/image-map-united-kingdom.png";
import ukmap1 from "./assets/locations/tablet/image-map-uk.png";
function Location() {
  return (
    <div className="px-10 sm:mt-7">
      <div>
        <picture>
          <source srcSet={canmap} media="(max-width:430px)" />
          <img
            src={canmap1}
            width="100%"
            height="20vh"
            className="sm:rounded-xl"
          />
        </picture>
        <div className="text-center loc py-10 sm:text-left sm:px-16 sm:mt-3 sm:rounded-xl">
          <h1 className="col font-bold tracking-wide text-2xl sm:text-3xl ">
            Canada
          </h1>
          <div className="sm:flex sm:justify-between">
            <div className="text-black mt-3 leading-7 sm:mt-5">
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
      </div>
      <div className="mt-5 sm:mt-12">
        <picture>
          <source srcSet={ausmap} media="(max-width:430px)" />
          <img
            src={ausmap1}
            width="100%"
            height="20vh"
            className="rounded-xl"
          />
        </picture>
        <div className="text-center loc sm:px-16 sm:mt-3 sm:text-left py-10 sm:rounded-xl">
          <h1 className="col font-bold tracking-wide  text-2xl sm:text-3xl">
            Australia
          </h1>
          <div className="sm:flex sm:justify-between">
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
      </div>
      <div className="mt-5 sm:mt-12">
        <picture>
          <source srcSet={ukmap} media="(max-width:430px)" />
          <img
            src={ukmap1}
            width="100%"
            height="20vh"
            className="sm:rounded-xl"
          />
        </picture>
        <div className="text-center loc py-10 sm:text-left sm:px-16 sm:mt-3 sm:rounded-xl">
          <h1 className="col font-bold tracking-wide text-2xl sm:text-3xl">
            United Kingdom
          </h1>
          <div className="sm:flex sm:justify-between">
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
    </div>
  );
}

export default Location;
