import { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState(reviews);
  const [index, setIndex] = useState(0);

  const previousPerson = () => {
    if (index <= 0) return;
    setIndex(index - 1);
  };

  const nextPerson = () => {
    if (index >= person.length - 1) return;
    setIndex(index + 1);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img
            src={person[index].image}
            alt={person[index].name}
            className="person-img"
          />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{person[index].name}</h4>
        <p className="job">{person[index].job}</p>
        <p className="info">{person[index].text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
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
      </article>
    </main>
  );
};
export default App;
