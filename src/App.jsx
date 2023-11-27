import person from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = person[index];

  const previousPerson = () => {
    if (index <= 0) {
      setIndex((currentValue) => {
        const newValue = (currentValue = person.length - 1);
        return newValue;
      });
      return;
    }

    setIndex((currentValue) => {
      const newValue = currentValue - 1;
      return newValue;
    });
  };

  const nextPerson = () => {
    if (index >= person.length - 1) {
      setIndex((currentValue) => {
        const newValue = (currentValue = 0);
        return newValue;
      });
      return;
    }

    setIndex((currentValue) => {
      const newValue = currentValue + 1;
      return newValue;
    });
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
          <button type="button" className="prev-btn" onClick={previousPerson}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
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
