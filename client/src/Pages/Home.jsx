import React from "react";

const Home = () => {
  return (
    <section className="grid md:grid-cols-2 items-center px-10 py-16">
      <div>
        <h2 className="text-4xl font-bold mb-4">Book a Ride in Seconds</h2>

        <p className="text-gray-600 mb-6 font-semibold">
          Fast, reliable rides at your fingertips.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6 space-y-4 w-full md:w-96">
          <input
            type="text"
            className="border p-3 rounded w-full"
            placeholder="Pickup location"
          />

          <input
            type="text"
            className="border p-3 rounded w-full"
            placeholder="Drop location"
          />

          <button className="bg-lime-500 text-white w-full py-3 rounded-md font-semibold hover:bg-lime-600 transition shadow-lime-400">
            Find your Ride
          </button>
        </div>
      </div>

      <img
        src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy81NGY2MDE2MS1jZjZiLTQ0MDEtYTMwOS04YmIxOTZjMDAxNGMuanBn"
        alt="Ride"
        className="rounded-xl"
      />
    </section>
  );
};

export default Home;
