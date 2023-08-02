import React, { useReducer} from "react";

let initialState = {
    counter: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc': {
            return { ...state, counter: state.counter + action.payload };
        }


        case "dec": {
            return { ...state, counter: state.counter - action.payload };
        }


        case "inc5": {
            return { ...state, counter: state.counter + action.payload };
        }


        case "reset": {
            return initialState
        }


        default: {
            return state
        }

    }
}

const App = () => {
    let [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="col-6 offset-3 p-5 text-white mt-3 bg-dark text-center">
            <h3>counter:{state.counter}</h3>
            <button onClick={() => dispatch({ type: "inc", payload: 1 })}>+</button>
            <button onClick={() => dispatch({ type: "dec", payload: 1 })} >-</button>
            <button onClick={() => dispatch({ type: "inc5", payload: 5 })} >5</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

        </div>
    );
}

export default App;