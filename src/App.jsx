import person from './data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = person[index];

  const checkNumber = (number) => {
    if (number > person.length - 1) {
      return 0;
    }

    if (number < 0) {
      return person.length - 1;
    }

    return number;
  };

  const previousPerson = () => {
    setIndex((currentValue) => {
      const newIndex = currentValue - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((currentValue) => {
      const newIndex = currentValue + 1;
      return checkNumber(newIndex);
    });
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomPerson = () => {
    setIndex((currentValue) => {
      const newValue = getRandomNumber(0, person.length);
      return newValue;
    });
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
        </div>
        <button className="btn" onClick={getRandomPerson}>
          surprise me!
        </button>
      </article>
    </main>
  );
};
export default App;
