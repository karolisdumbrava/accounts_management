import { dummyData } from "../../../dummyData";
import * as actionTypes from "./actionTypes";

const getUsersByCompanyID = (companyId) => {
    const company = dummyData.find(
        (company) => company.id === Number(companyId)
    );
    if (company) {
        return company.users;
    }

    return [];
};

export const fetchUsers = (companyId) => {
    const users = getUsersByCompanyID(companyId);

    return {
        type: actionTypes.FETCH_USERS,
        payload: users,
    };
};

export const addUser = (companyId, userData) => {
    let newUser = null;

    const companyIndex = dummyData.findIndex(
        (company) => company.id === Number(companyId)
    );

    if (companyIndex !== -1) {
        newUser = {
            id: dummyData[companyIndex].users.length + 1,
            ...userData,
        };

        const newUsers = [...dummyData[companyIndex].users, newUser];

        dummyData[companyIndex] = {
            ...dummyData[companyIndex],
            users: newUsers,
        };
    }

    return {
        type: actionTypes.ADD_USER,
        payload: { user: newUser },
    };
};

export const updateUser = (companyId, userId, updatedData) => {
    let updatedUser = null;
    const company = dummyData.find(
        (company) => company.id === Number(companyId)
    );
    if (company) {
        const userIndex = company.users.findIndex((user) => user.id === userId);
        if (userIndex !== -1) {
            updatedUser = {
                ...company.users[userIndex],
                ...updatedData,
                id: userId,
            };
            company.users = [
                ...company.users.slice(0, userIndex),
                updatedUser,
                ...company.users.slice(userIndex + 1),
            ];
        }
    }

    return {
        type: actionTypes.UPDATE_USER,
        payload: { user: updatedUser },
    };
};

export const deleteUser = (userId) => {
    return {
        type: actionTypes.DELETE_USER,
        payload: { userId },
    };
};
