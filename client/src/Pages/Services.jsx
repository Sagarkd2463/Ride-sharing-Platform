import React from "react";
import services from "../assets/services.json";

const Services = () => {
  return (
    <section className="px-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
