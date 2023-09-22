
import React from 'react';
import SlideCards from './Card';
import './CardSlide.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function CardSlide(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 985 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 985, min: 845  },
      items: 2,      
      partialVisibilityGutter: 0,
    },
    
    tablet: {
      breakpoint: { max: 845, min: 592 },
      items: 2,
    

    },
    mobile: {
      breakpoint: { max: 592, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,

    }
  };
  return (
    <div>
      <section className="bg-gray">
        <div className="container">
          <div className="row card-row ms-auto me-auto">
            <div className="row ">
              <div className="col-12">
                <h1 className='recommendedHeading'>{props.title} </h1>
              </div>
            </div>
            <Carousel
              arrows
              autoPlay
              autoPlaySpeed={4000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover

              responsive={responsive}>
              {
                props.data.map((data,i) => {
                  return <div key={i} >
                    <SlideCards 
                    cardImg={data.angular}
                      title={data.title}
                      profile={data.profile}
                      instructor={data.instructor}
                      courseDuration={data.courseDuration}
                      rating={data.rating}
                      courseRating={data.courseRating}
                    />
                  </div>
                })
              }
            </Carousel>


          </div>
        </div>
      </section>
    </div>
  )
}

export default CardSlide;