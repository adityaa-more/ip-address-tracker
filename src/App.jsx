import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import background from "./assets/bg.jpg";
import arrow from "./assets/icon-arrow.svg";
import Markerposition from "./components/Markerposition";

function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");
  /*  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/; */

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://ipapi.co/json/`);
        const data = await res.json();
        setAddress(data);
      };
      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  const getEnteredData = async () => {
    const res = await fetch(`https://ipapi.co/${ipAddress}/json/`);
    const data = await res.json();
    setAddress(data);
  };

  function handleSubmit(e) {
    e.preventDefault();
    getEnteredData();
    setIpAddress("");
  }

  /* checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : "" */

  return (
    <>
      <section className="w-full h-full">
        <div className="absolute w-full -z-10 object-cover">
          <img src={background} className="w-full h-80 object-cover" />
        </div>
        <article className="p-8">
          <h1 className="text-2xl text-center lg:text-3xl text-white font-bold mb-8">
            IP Address Tracker
          </h1>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="flex justify-center max-w-xl mx-auto"
          >
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP address or domain"
              required
              className="py-2 px-4 rounded-l-lg w-full"
              value={ipAddress}
              onChange={(e) => setIpAddress(e.target.value)}
            />
            <button
              type="submit"
              aria-label="Submit"
              className="bg-black py-4 px-4 hover:bg-gray-800 rounded-r-lg"
            >
              <img src={arrow} />
            </button>
          </form>
        </article>
        {address && (
          <>
            <article
              className=" bg-white rounded-lg shadow-lg p-8 mx-16 grid grid-cols-1 gap-6 
            md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center md:text-left -mb-80 md:-mb-28 lg:-mb-20 z-[1000] relative "
            >
              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-400 tracking-wider mb-1">
                  Ip Address
                </h2>
                <p className="break-all font-semibold text-slate-900 text-lg md:text-xl xl:text-xl">
                  {address.ip}
                </p>
              </div>
              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-400 tracking-wider mb-1">
                  Location
                </h2>
                <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-xl">
                  {address.city}, {address.region_code} {address.postal}
                </p>
              </div>
              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-400 tracking-wider mb-1">
                  Timezone
                </h2>
                <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-xl">
                  UTC {address.utc_offset}
                </p>
              </div>
              <div>
                <h2 className="uppercase text-sm font-bold text-slate-400 tracking-wider mb-1">
                  Isp
                </h2>
                <p className="font-semibold text-slate-900 text-lg md:text-xl xl:text-xl">
                  {address.org}
                </p>
              </div>
            </article>

            <MapContainer
              center={[address.latitude, address.longitude]}
              zoom={14}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=EXz1FCjaWJDfj8xr50rN"
              />
              <Markerposition address={address} />
            </MapContainer>
          </>
        )}
      </section>
    </>
  );
}

export default App;
/* https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=EXz1FCjaWJDfj8xr50rN 
https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=e099dfd10e984f0481066aff067da1b8 */
