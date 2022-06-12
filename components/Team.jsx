import { useState } from "react";
import TeamView from "./TeamView";

const Team = (props) => {
  const [isActive, setActive] = useState(true);
  //  opening Team viewer
  function opener() {
    setActive(false);
  }
  function closer() {
    setActive(true);
  }

  const { fake_data } = props.data;
  console.log(fake_data);
  return (
    <div>
      {fake_data.map((item, index) => (
        <div
          key={index}
          onClick={opener}
          className="grid grid-cols-3 m-1 rounded p-2 bg-zinc-200 shadow-lg"
        >
          <div>{item.name} </div>
          <div>{item.region} </div>
          <div className="flex justify-center ">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-0.5 px-2 border border-blue-500 hover:border-transparent rounded
    "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className={`${isActive ? "hidden" : ""}`}>
        <TeamView closer={closer} />
      </div>
    </div>
  );
};

export default Team;
