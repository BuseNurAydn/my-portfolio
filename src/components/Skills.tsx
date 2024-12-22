import { skills } from '../utils/skillsData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}

function Arrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow ${className.includes("slick-next")
        }`}
      style={{
        position: "absolute",
        top: "40%",
        transform: "translateY(-50%)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {className.includes("slick-next") ? (
        <span style={{ fontSize: "40px", color: "darkblue" }}>›</span>
      ) : (
        <span style={{ fontSize: "40px", color: "darkblue", paddingRight: "70px" }}>‹</span>
      )}
    </div>
  );
};

const Skills = (props: Props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
    ]
  };

  return (
    <section id="skills" className="md:px-20 px-6 bg-slate-50 mt-4">
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-8">Skills</h1>
        <div className="text-black text-center pointer text-xs font-semibold rounded-lg">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded">
                <div>
                  <img src={skill.image} alt='' className='h-20 w-20 text-center flex mx-auto rounded-full'></img>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-2 p-2'>
                  <h3 className='rounded-b-lg'>{skill.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Skills