import { useEffect } from "react";
import Slider from "react-slick";
import GLightbox from "glightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "glightbox/dist/css/glightbox.css";
import "../styles/Portfolio/Portfolio.css";

const Gallery = ({ images, title }) => {
  useEffect(() => {
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px 0", 
    }}>
      <h2 style={{ marginBottom: "15px", 
        backgroundColor: "var(--color2)",
        width: "fit-content",
        padding: "5px 15px",
        borderRadius: "8px",
        color: "white",
      }}>{title}</h2>

      <Slider className="portfolio-slider" {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <a href={img} className="glightbox">
              <img
                src={img}
                alt={`Imagem ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "38px",
                  cursor: "pointer",
                  padding: "0px 10px",
                }}
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
