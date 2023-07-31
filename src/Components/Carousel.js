import React from 'react'

function Carousel({img1,img2,img3}) {
  return (
    
       <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner ">
              <div class="carousel-item active" data-bs-interval="10000">
                <img
                  src={(img1)}
                  class="d-block mx-auto md:w-2/3  h-96 "
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img
                  src={(img2)}
                  class="d-block mx-auto md:w-2/3 h-96 "
                  alt="..."
                ></img>
              </div>
              <div class="carousel-item">
                <img
                  src={(img3)}
                  class="d-block mx-auto md:w-2/3 h-96"
                  alt="..."
                ></img>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

   
  )
}

export default Carousel