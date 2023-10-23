import * as actionTypes from "./actionTypes";
import { dummyData } from "../../../dummyData";

const setCompanies = (companies) => {
    return {
        type: actionTypes.FETCH_COMPANIES,
        payload: companies,
    };
};

export const fetchCompanies = () => {
    return (dispatch) => {
        const data = dummyData;
        dispatch(setCompanies(data));
    };
};
