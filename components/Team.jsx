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

  return (
    <div>
        <div
     
   
          className="grid grid-cols-3 m-1 rounded p-2 bg-zinc-300 shadow-lg"
        >
          <div>Users Names </div>
          <div>Country</div>
          <div className="flex justify-center ">
           <div>Action</div>
          </div>
        </div>
      {fake_data.map((item, index) => (
        <div
          key={index}
          onClick={opener}
          className="grid grid-cols-3 m-1 rounded p-2 my-3 bg-zinc-100 shadow-lg"
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
