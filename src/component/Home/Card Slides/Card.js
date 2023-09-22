import React from 'react';
import {BsFillStarFill, BsBookmark} from 'react-icons/bs';
import { IoMdTime  } from 'react-icons/io';
import { LuBarChart} from 'react-icons/lu';


function RecoCards({cardImg, title , profile,instructor, courseDuration, rating, courseRating }) {

  return (
    <div>
    <div className="card recocard  h-100 ">
                    <img src={cardImg} className="card-img-top" alt=""/>
                    <div className="card-body">
                        <i className="fa-regular float-end text-dark fa-heart"></i>
                        <h1 className="card-subtitle fw-bold fs-4 text-dark mt-3 mb-3">{title}
                        </h1>
                        
                        <span className="ps-1   text-muted">
                            <IoMdTime/> <span>{courseDuration}</span>
                            <LuBarChart /> <span>{courseRating}</span>
                        </span>
                        <br />
                        <span className="text-warning  ps-1">
                            <i><BsFillStarFill/></i>
                            <i><BsFillStarFill/></i>
                            <i><BsFillStarFill/></i>
                            <i><BsFillStarFill/></i>
                            <i><BsFillStarFill/></i>
                        </span>
                        <span className="ps-1 text-warning">4.5</span> <span className='text-muted'>{rating}</span>
                        <hr />
                        
                            <img className='profile-avater' src={profile} alt="profile" />
                            <span>{instructor}</span>
                            <BsBookmark className='float-end' />
                        
                    </div>
                </div>
    </div>
  )
}

export default RecoCards;