const Services = () => {
  const services = [
    {
      title: "CCTV Installation",
      description: "We install surveillance cameras at homes and businesses.",
    },
    {
      title: "Maintenance & Repair",
      description: "We offer regular checks and maintenance services.",
    },
    {
      title: "Smart Monitoring",
      description: "Enable 24/7 remote viewing and alerts on your devices.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;