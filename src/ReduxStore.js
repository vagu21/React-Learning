import { type } from "@testing-library/user-event/dist/type";
import { createStore } from "redux";

const initialState = {
    balance: 0,
    fullName: "",
    mobile: null,
};

function reducer(state = initialState, action) {
    if (action.type === "deposit") {
        return { ...state, balance: state.balance + action.payload };
    } else if (action.type === "withdraw") {
        return { ...state, balance: state.balance - action.payload };
    } else if (action.type === "mobileUpdate") {
        return { ...state, mobile: action.payload };
    } else if (action.type === "nameUpdate") {
        return { ...state, fullName: action.payload };
    } else {
        return state;
    }
}

const store = createStore(reducer);
console.log(store.getState());
store.dispatch({ type: "deposit", payload: 2000 });
store.dispatch({ type: "withdraw", payload: 100 });
store.dispatch({ type: "mobileUpdate", payload: 9866867309});
store.dispatch({ type: "nameUpdate", payload: "Bharadwaj" });

console.log(store.getState());
