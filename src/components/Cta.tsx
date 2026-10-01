import { Link } from "react-router-dom";

// call-to-action
const Cta = () => {
  return (
    <section className="cta">
      {/* contact text */}
      <p className="cta-text">
        Vous avez un projet en tête ? <br className="sm:block hidden" />
        Construisons-le ensemble !
      </p>

      {/* contact btn */}
      <Link to="/contact" className="btn" title="Me contacter">
        Contact
      </Link>
    </section>
  );
};

export default Cta;
