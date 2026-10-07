
import { Link } from "react-router-dom";
import doctorImg from '../assets/doctors.png.jpg';
function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <div className="hero-left">

            <div className="brand-title">
              <span>🩺</span>
              <h1>MediCare<span>+</span></h1>
            </div>

            <div className="stars">
              ★★★★★
            </div>

            <p className="premium">
              Premium Healthcare
            </p>

            <h2>
              At Your Fingertips
            </h2>

            <div className="features">

              <div>♿ Certified Specialists</div>
              <div>◷ 24/7 Availability</div>
              <div>🔒 Safe & Secure</div>
              <div>👥 500+ Doctors</div>

            </div>

            <div className="hero-buttons">

              <Link to="/appointments">
                <button className="book-btn">
                  📅 Book Appointment Now
                </button>
              </Link>

              <button className="emergency-btn">
                ☎ Emergency Call
              </button>

            </div>

          </div>

          <div className="hero-right">
            <img
              src={doctorImg}
              alt="Healthcare Doctors"
            />
          </div>

        </div>

      </section>

      <section className="certified">

        <h2>— CERTIFIED & EXCELLENCE —</h2>

        <p>
          Government recognized and internationally
          accredited healthcare standards
        </p>

        <div className="certificate">
          ● OFFICIALLY CERTIFIED
        </div>

      </section>
    </>
  );
}

export default Home;