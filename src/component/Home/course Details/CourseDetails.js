
import React from 'react';
import { BsCameraVideo  } from 'react-icons/bs';
import { FiUsers  } from 'react-icons/fi';
import { IoMdTime  } from 'react-icons/io';
import './CourseDeatils.css'

function CourseDetails() {
  return (
    <div>
      <section className='bg-white py-4 shadow-sm'>
        <div className="container">
          <div className="row mt-3 mt-md-0 ms-auto me-auto">
          <div className="col-12 col-md-4">
            <div className="row d-flex g-5 ">
              <div className="col-2 "><span className='bg-light-warning' ><BsCameraVideo style={{color : "brown", fontWeight : "bold" ,  fontSize : "1.3rem"          
              }}/></span></div>
              <div className="col-10">
                <h4 className='course-heading'>30,000 online courses</h4>
                <p className='course-text'>Enjoy a variety of fresh topics</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="row g-5 ">
              <div className="col-2"><span className='bg-light-warning' ><FiUsers style={{color : "brown", fontWeight : "bold" ,  fontSize : "1.3rem"          
              }}/></span></div>
              <div className="col-10">
                <h4 className='course-heading'>Expert instruction</h4>
                <p className='course-text'>Find the right instructor for you</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="row g-5">
              <div className="col-2"><span className='bg-light-warning' ><IoMdTime style={{color : "brown", fontWeight : "bold" ,  fontSize : "1.3rem"          
              }}/></span></div>
              <div className="col-10">
                <h4 className='course-heading'>Lifetime access</h4>
                <p className='course-text'>Learn on your schedule</p>
              </div>
            </div>
          </div>
         
           
            

          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetails;