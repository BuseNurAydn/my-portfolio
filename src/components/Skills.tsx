import { skills } from '../utils/skillsData'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Htext from '../shared/Htext';

type Props = {}

function Arrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Skills = (props: Props) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <Arrow/>,
    prevArrow: <Arrow/>,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  const containerStyle = 'xl:container xl:mx-auto';
  const paddingStyle = 'lg:p-2 p-4 scroll-mt-14';

  return (
    <section id="skills" className={`${paddingStyle} bg-zinc200-color dark:bg-gray900-color `}>
      <div className={`${containerStyle} pt-6`}>
        <Htext>Skills</Htext>
        <div className="text-black-color text-center pointer text-xs font-semibold rounded-lg mb-8">
          <Slider {...settings}>
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded-lg cursor-pointer">
                <div>
                  <img src={skill.image} alt='' className='h-16 w-16 text-center flex mx-auto'></img>
                </div>
                <div className='flex flex-col text-blue-color font-bold justify-center items-center gap-y-2 p-2'>
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

export default Skills;