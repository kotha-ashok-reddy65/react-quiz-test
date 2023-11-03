import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

//write reducer function outside of the component
function reducer(state, action) {
  switch (action.type) {
    case "dec":
      // console.log(...state);
      return { ...state, count: state.count - state.step };
    case "inc":
      //console.log(...state);
      return { ...state, count: state.count + state.step };
    case "setCount":
      //console.log(...state);
      return { ...state, count: action.payLoad };
    case "setStep":
      // console.log(...state);
      return { ...state, step: action.payLoad };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown error occured!");
  }
  //   if (action.type === "dec") return state - action.payLoad;
  //   if (action.type === "inc") return state + action.payLoad;
  //   if (action.type === "setCount") return action.payLoad;
  // console.log(state, action);
  //return state + Number(action);
}

function DateCounter() {
  //step 1 replace useState() hook with usereducer()
  //const [count, setCount] = useState(0);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  //const [step, setStep] = useState(1);
  //  const initialState={count:0,step:1};

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec", payLoad: -1 });
    // setCount((count) => count - 1);
    //setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc", payLoad: 1 });
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payLoad: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payLoad: Number(e.target.value) });
    //setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    //setCount(0);
    //setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
