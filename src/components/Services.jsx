export default function Services() {
  return (
    <section id="services" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4" data-aos="fade-up">Our Services</h2>

        <div className="row g-4">
          {[
            "Logo & Branding",
            "Flyer / Poster / Banner",
            "Website & UI Design",
            "Invitation & Certificates",
            "Menu Card Design",
            "Social Media Creatives"
          ].map((service,i)=>
            <div className="col-md-4" key={i} data-aos="fade-up">
              <div className="card shadow border-0 p-4">
                <h4>{service}</h4>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
