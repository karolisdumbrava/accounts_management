import React, { useState } from "react";

const UsersInput = ({
    name,
    value,
    onChange,
    onValidation,
    placeholder,
    type = "text",
    validate,
}) => {
    const [error, setError] = useState("");

    const handleValidation = (value) => {
        if (validate) {
            const errorMessage = validate(value);
            setError(errorMessage);
            if (onValidation) {
                onValidation(name, errorMessage);
            }
        }
    };

    const handleChange = (event) => {
        onChange(name, event.target.value);
        handleValidation(event.target.value);
    };

    return (
        <div className="relative">
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onBlur={() => handleValidation(value)}
            />
            <div className="absolute left-0 bottom-0 w-full h-0 text-xs">
                {error && (
                    <p className={`text-red-500 ${!error && "opacity-0"}`}>
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default UsersInput;
