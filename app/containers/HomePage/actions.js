import { REQUEST_API_DATA, GET_API_DATA } from "./constants";

export const requestAPIData = () => {
    return {
        type: REQUEST_API_DATA
    }
}

export const getAPIData = (data) => {
    return {
        type: GET_API_DATA,
        payload: data
    }
}