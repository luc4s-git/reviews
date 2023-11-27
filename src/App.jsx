import { useState } from "react";
import person from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = person[index];

  const previousPerson = () => {
    if (index <= 0) return;
    setIndex(index - 1);
  };

  const nextPerson = () => {
    if (index >= person.length - 1) return;
    setIndex(index + 1);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomPerson = () => {
    setIndex(getRandomNumber(0, person.length));
  };

  return (
    <main>
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
        <div className="btn-container">
          <button className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
          <div>
            <button className="btn" onClick={getRandomPerson}>
              surprise me!
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};
export default App;
