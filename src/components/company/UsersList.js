import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
    addUser,
    deleteUser,
    fetchUsers,
    updateUser,
} from "../store/actions/userActions";
import UserForm from "./components/UserForm";

const UsersList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { companyId } = useParams();

    const [userForm, setUserForm] = useState(null);
    const [editingUserId, setEditingUserId] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        if (companyId) {
            dispatch(fetchUsers(companyId));
        } else {
            navigate("/");
        }
    }, [dispatch, companyId, navigate]);

    const handleInputChange = (name, value) => {
        setUserForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleAddUser = () => {
        setIsAdding(true);
        setUserForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            position: "",
        });
    };

    const handleSaveNewUser = () => {
        dispatch(addUser(companyId, userForm));
        setIsAdding(false);
        setUserForm(null);
    };

    const handleUpdateUser = () => {
        if (editingUserId) {
            dispatch(updateUser(companyId, editingUserId, userForm));
            setUserForm(null);
            setEditingUserId(null);
        }
    };

    const handleEditUser = (user) => {
        setIsAdding(false);
        setUserForm({ ...user });
        setEditingUserId(user.id);
    };

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUser(userId));
        }
    };

    const handleCancelUser = () => {
        setIsAdding(false);
        setUserForm(null);
        setEditingUserId(null);
    };

    if (!companyId) {
        navigate("/");
    }

    return (
        <div className="mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-700">Users List</h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleAddUser}
            >
                Add User
            </button>
            <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 table-fixed w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                First Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Last Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Email
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Phone
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                City
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Position
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users?.map((user) => (
                            <Fragment key={user.id}>
                                {editingUserId === user.id ? (
                                    <UserForm
                                        key={user.id}
                                        user={user}
                                        onChange={handleInputChange}
                                        onSave={handleUpdateUser}
                                        onCancel={handleCancelUser}
                                        creating={false}
                                    />
                                ) : (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {user.firstName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.lastName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.city}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {user.position}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() =>
                                                    handleEditUser(user)
                                                }
                                                className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteUser(user.id)
                                                }
                                                className="text-red-600 hover:text-red-900 ml-4 focus:outline-none"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </Fragment>
                        ))}
                        {isAdding && (
                            <UserForm
                                user={userForm}
                                onChange={handleInputChange}
                                onSave={handleSaveNewUser}
                                onCancel={handleCancelUser}
                                creating={true}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersList;
