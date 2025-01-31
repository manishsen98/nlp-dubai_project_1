import "./SCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const SCarousel = ({ data }) => {
  return (
    <Carousel
      showThumbs={true}
      autoPlay={true}
      interval={2500}
      transitionTime={500}
      infiniteLoop={true}
      showStatus={false}
      animationHandler="fade"
    >
      {data.map((item) => (
        <div className="poster-block">
          <div className="posterImage">
            <img src={`${item.img_url}`} />
          </div>
          <div className="posterImage__overlay">
            <div className="posterImage__text">
              <div className="posterImage__text--title">
                {item ? item.text : ""}
              </div>
              <a className="btn-click" to={""}>
                Click Here
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SCarousel;
