import React, { useEffect, useState } from "react";
import UsersInput from "./UsersInput";

const UserForm = ({ user, onChange, onSave, onCancel, creating }) => {
    const [userValues, setUserValues] = useState(user);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        return isValidEmail ? "" : "Invalid email address";
    };

    const validateNotEmpty = (text) => {
        return text.trim() ? "" : "This field is required";
    };

    const validateField = (fieldName, value) => {
        let errorMessage = "";
        if (fieldName === "email") {
            errorMessage = validateEmail(value);
        } else {
            errorMessage = validateNotEmpty(value);
        }

        return errorMessage;
    };

    const validateAllFields = () => {
        const newErrors = {};

        const fieldsToValidate = [
            "firstName",
            "lastName",
            "email",
            "phone",
            "city",
            "position",
        ];

        fieldsToValidate.forEach((fieldName) => {
            const value = user[fieldName];
            const errorMessage = validateField(fieldName, value);
            if (errorMessage) {
                newErrors[fieldName] = errorMessage;
            }
        });

        setErrors(newErrors);
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleInputChange = (fieldName, value) => {
        setUserValues((prevState) => ({
            ...prevState,
            [fieldName]: value,
        }));
        onChange(fieldName, value);
    };

    const handleValidation = (fieldName, errorMessage) => {
        setErrors((prevState) => ({
            ...prevState,
            [fieldName]: errorMessage,
        }));
    };

    const isSaveDisabled = Object.values(errors).some((error) => error);

    const handleSave = () => {
        if (isSaveDisabled) return;
        onSave(user);
    };

    useEffect(() => {
        setUserValues(user);
        validateAllFields();
    }, [user]);

    return (
        <tr className={`${creating ? "h-20 px-2" : ""}`} key={user.id}>
            <td>
                <UsersInput
                    name="firstName"
                    value={userValues.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    validate={validateNotEmpty}
                    onValidation={handleValidation}
                />
            </td>
            <td>
                <UsersInput
                    name="lastName"
                    value={userValues.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    validate={validateNotEmpty}
                    onValidation={handleValidation}
                />
            </td>
            <td>
                <UsersInput
                    name="email"
                    value={userValues.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    validate={validateEmail}
                    onValidation={handleValidation}
                />
            </td>
            <td>
                <UsersInput
                    name="phone"
                    value={userValues.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    validate={validateNotEmpty}
                    onValidation={handleValidation}
                />
            </td>
            <td>
                <UsersInput
                    name="city"
                    value={userValues.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    validate={validateNotEmpty}
                    onValidation={handleValidation}
                />
            </td>

            <td>
                <UsersInput
                    name="position"
                    value={userValues.position}
                    onChange={handleInputChange}
                    placeholder="Position"
                    validate={validateNotEmpty}
                    onValidation={handleValidation}
                />
            </td>
            <td className="px-2">
                <button
                    className={`ml-2 mt-2 ${
                        isSaveDisabled ? "text-gray-400" : "text-green-500"
                    } `}
                    onClick={handleSave}
                    disabled={isSaveDisabled}
                    aria-disabled={isSaveDisabled}
                >
                    {creating ? "Create" : "Save"}
                </button>

                <button
                    className="ml-2 mt-2 text-red-500"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default UserForm;
