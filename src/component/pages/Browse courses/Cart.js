import React from "react";
import "./BrowseCourses.css";
import {useEffect, useState} from "react";
import {BsCartPlusFill} from "react-icons/bs";
import "./BrowseCourses.css";
import {RiDeleteBin6Line} from "react-icons/ri";
import {Cards} from "./Cards";

const fromLS = JSON.parse(localStorage.getItem('cart') || '[]')
function Cart() {
  const [cart, setCart] = useState(fromLS);

  useEffect(() => {
localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function removeBtn(removeProduct) {
    setCart(cart.filter((product) => product !== removeProduct));
  }

  function addToCart(product) {
    console.log(product);
    setCart([...cart, {...product}]);
  }

  return (
    <>
      <div className='row'>
        <div className='col-2 col-lg-1 offset-lg-11'>
          {/* <!-- Button trigger modal --> */}

          <button
            type='button'
            className='btn  btn-cart btn-outline-secondary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            <BsCartPlusFill />
            <p className='cart-items'>{cart.length}</p>
          </button>

          {/* <!-- Modal --> */}
          <div
            className='modal fade'
            id='exampleModal'
            tabindex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Cart
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  {cart.map((product, ind) => {
                    return (
                      <div key={ind}>
                        <div className='d-flex justify-content-between align-items-center'>
                          <img
                            src={product.angular}
                            alt='img'
                            width={"100px"}
                          />
                          <h5 className='fw-bold'>${product.id}.531</h5>
                          <button
                            onClick={() => removeBtn(product)}
                            className=' btn fs-3 mt-0 text-danger'
                          >
                            <RiDeleteBin6Line />
                          </button>
                        </div>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>


{/* cards */}
      <Cards addToCart={addToCart} />
    </>
  );
}

export default Cart;
