import * as actionTypes from "../actions/actionTypes";

const initialState = {
    companies: [],
    selectedCompany: null,
};

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMPANIES:
            return {
                ...state,
                companies: action.payload,
            };
        case actionTypes.SELECT_COMPANY:
            const selected = state.companies.find(
                (company) => company.id === action.payload
            );
            return {
                ...state,
                selectedCompany: selected,
            };
        default:
            return state;
    }
};

export default companiesReducer;
