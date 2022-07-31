import React, {Component} from "react";
import "./App.css";
import FilterInput from "./components/FilterInput";

function App() {
  const fruits = [
    {
      fruit: "Apple",
      color: "Red",
      seeds: "true",
    },
    {
      fruit: "Strawberry",
      color: "Red",
      seeds: "true",
    },
    {
      fruit: "Watermelon",
      color: "Red",
      seeds: "false",
    },
  ];
  return (
    <div>
      <FilterInput items={fruits}/>
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filterString: "",
//       foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
//     };
//   }

//   handleChange(filter) {
//     this.setState({ filterString: filter });
//   }

//   render() {
//     let foodsToDisplay = this.state.foods
//       .filter((element, index) => {
//         return element.includes(this.state.filterString);
//       })
//       .map((element, index) => {
//         return <h2 key={index}>{element}</h2>;
//       });

//     return (
//       <div className="App">
//         <input onChange={e => this.handleChange(e.target.value)} type="text" />
//         {foodsToDisplay}
//       </div>
//     );
//   }
// }

export default App;
