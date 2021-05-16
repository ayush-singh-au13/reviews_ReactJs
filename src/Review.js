import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextClickHandler = () => {
    // if (index < people.length-1) {
    //   setIndex(index + 1);
    // } else {
    //   setIndex((index) => {
    //     return 0
    //   });
    // }

    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevClickHandler = () => {
    // if (index > 0) {
    //   setIndex(index - 1);
    // } else {
    //   setIndex((index) => {
    //     return people.length - 1;
    //   })
    // }
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomClickHandler = () => {
    setIndex((index) => {
      const random = Math.floor(Math.random() * people.length);
      return checkNumber(random);
    });
  };
  return (
    <>
      <main>
        <section className="container">
          <article className="review">
            <div className="img-container">
              <img src={image} alt={name} className="person-img" />
              <span className="quote-icon">
                <FaQuoteRight />
              </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
              <button className="prev-btn" onClick={prevClickHandler}>
                <FaChevronLeft />
              </button>
              <button className="next-btn" onClick={nextClickHandler}>
                <FaChevronRight />
              </button>
              <div>
                <button className="random-btn" onClick={randomClickHandler}>
                  Check Randomly
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Review;
