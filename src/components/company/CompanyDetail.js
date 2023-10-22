import React, { useState } from 'react';
import { dummyData } from '../../dummyData';

const CompanyDetail = () => {
    const [visibleCompany, setVisibleCompany] = useState(null);

    const handleToggle = (id) => {
        if (visibleCompany === id) {
            setVisibleCompany(null);
        } else {
            setVisibleCompany(id);
        }
    };

    return (
        <div className="container mx-auto p-6">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Company Name
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {dummyData.map((company) => (
                            <React.Fragment key={company.id}>
                                <tr className={visibleCompany === company.id ? 'bg-blue-50' : 'hover:bg-gray-50'}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleToggle(company.id)}
                                            className="text-sm font-medium text-gray-900 focus:outline-none"
                                            style={{ transition: "background-color 0.5s" }}
                                        >
                                            {company.name}
                                        </button>
                                    </td>
                                </tr>
                                {visibleCompany === company.id && (
                                    <tr>
                                        <td className="">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-3 py-2 text-xs font-medium text-gray-500 border-r-2 border-gray-200">First Name</th>
                                                        <th className="px-3 py-2 text-xs font-medium text-gray-500 border-r-2 border-gray-200">Last Name</th>
                                                        <th className="px-3 py-2 text-xs font-medium text-gray-500">Position</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200">
                                                    {company.users.map((user) => (
                                                        <tr key={user.id} className="hover:bg-gray-100 cursor-pointer">
                                                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                                                                {user.firstName}
                                                            </td>
                                                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                                                                {user.lastName}
                                                            </td>
                                                            <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                                                                {user.position}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompanyDetail;
