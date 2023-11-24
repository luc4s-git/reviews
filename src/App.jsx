import { useState } from "react";
import reviews from "./data";
import { FaBeer } from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState(reviews);
  console.log(person);
  return (
    <main>
      {/* <FaBeer className="beer" /> */}
      <div className="reviews">
        <div className="review">
          <div className="img-container">
            <img src={person[0].image} alt="" className="person-img" />
          </div>
          <h5>{person[0].name}</h5>
          <div className="job">{person[0].job}</div>
          <p>{person[0].text}</p>
        </div>
      </div>
    </main>
  );
};
export default App;
