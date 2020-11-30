import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  function deletePeople() {
    setPeople([]);
  }

  function deletePerson(id) {
    let newArray = people.filter((person) => person.id !== id);
    setPeople(newArray);
  }

  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => deletePerson(person.id)}>
              Delete person
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={deletePeople}>
        Delete
      </button>
    </>
  );
};

export default UseStateArray;

// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);

//   const removeItem = function (id) {
//     let newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };
//   return (
//     <>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div className="item">
//             <h4 key={id}>{name}</h4>
//             <button onClick={() => removeItem(id)}>Delete item</button>
//           </div>
//         );
//       })}
//       <button className="btn" onClick={() => setPeople([])}>
//         Delete
//       </button>
//     </>
//   );
// };
