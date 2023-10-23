import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../store/actions/companiesActions";
import { Link } from "react-router-dom";

const CompanyList = () => {
    const dispatch = useDispatch();

    const companies = useSelector((state) => state.companies.companies);

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

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
                        {companies.map((company) => (
                            <tr key={company.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900 focus:outline-none py-1">
                                        <Link to={`/company/${company.id}`}>
                                            {company.name}
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompanyList;
