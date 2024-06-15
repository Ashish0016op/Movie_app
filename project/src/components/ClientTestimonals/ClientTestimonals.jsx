import React from "react";
import "./ClientTestimonals.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { ImQuotesRight } from "react-icons/im";
import { PiStarThin } from "react-icons/pi";
const ClientTestimonals = () => {
  const slideProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };
  return (
    <div className="Client_testimonals_section">
      <div>
        <p className="ClientTest_heading">ClientTestimonals</p>
      </div>
      <div className="ClientSlides">
        <Slide {...slideProperties}>
          <div>
            <div>
              <ImQuotesRight />
            </div>
            <div>
              <p>Priya</p>
            </div>
            <div>
              <p>
                "I've been a fan of Jayam rose milk &amp; coffee for years, and
                their decoction maker has truly been a game-changer for me. As
                someone who values both authenticity and convenience, I am able
                to brew authentic South Indian filter coffee at home.
              </p>
            </div>
            <div>
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
            </div>
          </div>
          <div>
            <div>
              <ImQuotesRight />
            </div>
            <div>
              <p>Rajesh</p>
            </div>
            <div>
              <p>
                Indulging in rose milk and filter coffee at this quaint café was
                an absolute delight.
              </p>
            </div>
            <div>
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
              <PiStarThin />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default ClientTestimonals;
