import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';
import { dataFetching, fetchDataFunction } from "./Redux/action";

function App() {
  const data = useSelector((store) => store.data);
  console.log(data);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(dataFetching());
  };

  const handleButtonClick = () => {
    const button = document.getElementById("DataButton");
    if (button) {
      button.style.display = "none";
    }
  };

  return (
    <div id="container">
      <div id="align-box">
        {data.map((el) => {
          return (
            <div id="data" key={el.id}>
              <div id="name">
                {el.name}
              </div>
              <div id="email">
                {el.email}
              </div>
            </div>
          );
        })}
      </div>

      <button id="DataButton" onClick={() => { handleButtonClick(); getData(); }}>
        Get Data
      </button>
    </div>
  );
}

export default App;
