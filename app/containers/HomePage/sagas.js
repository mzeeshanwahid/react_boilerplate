import { REQUEST_API_DATA } from "./constants";
import { getAPIData } from "./actions";
import { put, call, takeLatest } from "redux-saga/effects";

const processRequest = async url => {
    let data = await fetch(url);
    return data.json();
}

function* getTodos() {
    //let data = yield call(fetch, "https://jsonplaceholder.typicode.com/todos?userId=1");
    //let data = [{title:"Hello" },{title:"World"}]
    let data = yield processRequest("https://jsonplaceholder.typicode.com/todos?userId=1");
    console.log("Data", data);
    yield put(getAPIData(data));
}

export default function* getAPIDataSaga() {
    yield takeLatest(REQUEST_API_DATA, getTodos);
}