import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { LuBarChart } from "react-icons/lu";
import { CardData } from "./CardsData";

export function Cards({addToCart}) {
  return (<div className="row row-gutter  g-4 ">
  {CardData.map((product) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={product.rating}>
        <div className="card shadow-sm h-100 w-100  ">
          <img src={product.angular} className="card-img-top" alt="" />
          <div className="card-body">
            <i className="fa-regular float-end text-dark fa-heart"></i>
            <h1 className="card-subtitle fw-bold fs-4 text-dark mt-3 mb-3">
              {product.title}
            </h1>
            <span className="ps-1   text-muted">
              <IoMdTime /> <span>{product.courseDuration}</span>
              <LuBarChart /> <span>{product.courseRating}</span>
            </span>
            <br />
            <span className="text-warning  ps-1">
              <i>
                <BsFillStarFill />
              </i>
              <i>
                <BsFillStarFill />
              </i>
              <i>
                <BsFillStarFill />
              </i>
              <i>
                <BsFillStarFill />
              </i>
              <i>
                <BsFillStarFill />
              </i>
            </span>
            <span className="ps-1 text-warning">4.5</span>{" "}
            <span className="text-muted">{product.rating}</span>
            <hr />
            <img
              className="profile-avater"
              src={product.profile}
              alt="profile"
            />
            <span>{product.instructor}</span>
            <button
              onClick={() => addToCart(product)}
              className="float-end btn btn-dark"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>
  );
}


