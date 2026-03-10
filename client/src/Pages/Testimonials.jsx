import React from "react";
import testimonials from "../assets/testimonials.json";

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Riders Say
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Thousands of riders and drivers trust RideNow for safe, reliable,
            and affordable rides every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                "{item.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
