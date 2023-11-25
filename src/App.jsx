import { useState } from "react";
import reviews from "./data";
import { FaBeer } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";

const App = () => {
  const [person, setPerson] = useState(reviews);
  const [index, setIndex] = useState(0);

  console.log(person.length);
  return (
    <main>
      {/* <FaBeer className="beer" /> */}
      <div className="reviews">
        <div className="review">
          <div className="img-container">
            <img src={person[index].image} alt="" className="person-img" />
          </div>
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
              <GrPrevious />
            </button>
            <button
              className="next-btn"
              onClick={() => {
                if (index >= person.length - 1) return;
                setIndex(index + 1);
              }}
            >
              <GrNext />
            </button>
            <div>
              <button className="btn">surprise me!</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default App;
