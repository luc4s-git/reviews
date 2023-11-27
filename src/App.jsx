import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState(reviews);
  const [index, setIndex] = useState(0);

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={person[index].image} alt="" className="person-img" />
        </div>
        <div className="review">
          <h5>{person[index].name}</h5>
          <div className="job">{person[index].job}</div>
          <p>{person[index].text}</p>
          <div className="btn-container">
            <button
              className="prev-btn"
              onClick={() => {
                if (index <= 0) return;
                setIndex(index - 1);
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="next-btn"
              onClick={() => {
                if (index >= person.length - 1) return;
                setIndex(index + 1);
              }}
            >
              <FaChevronRight />
            </button>
            <div>
              <button
                className="btn"
                onClick={() => {
                  const getRandomNumber = (min, max) => {
                    return Math.floor(Math.random() * (max - min) + min);
                  };

                  setIndex(getRandomNumber(0, person.length));
                }}
              >
                surprise me!
              </button>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
export default App;
