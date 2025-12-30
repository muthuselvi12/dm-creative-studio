export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4" data-aos="fade-up">
          Our Services
        </h2>
        <p>
          <i>
            Empowering businesses and individuals with creative web solutions,
            stunning designs, and reliable tech support. From modern websites to
            brand designs and digital assistance, I help turn your ideas into
            reality.
          </i>
        </p>

        <div className="row g-4">
          {[
            "Logo & Branding",
            "Flyer / Poster / Banner",
            "Brochure",
            "Business Card",
            "Website & UI Design",
            "Invitation & Certificates",
            "Menu Card Design",
            "Presentation / Report",
            "Social Media Creatives",
          ].map((service, i) => (
            <div className="col-md-4" key={i} data-aos="fade-up">
              <div className="card shadow border-0 p-4">
                <h4>{service}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
