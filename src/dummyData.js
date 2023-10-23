export const dummyData = [
    {
        id: 1,
        name: "Acme Inc.",
        users: [
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                email: "johndoe@acme.com",
                phone: "+1 555-555-5555",
                city: "New York",
                position: "CEO",
            },
            {
                id: 2,
                firstName: "Jane",
                lastName: "Doe",
                email: "janedoe@acme.com",
                phone: "+1 555-555-5555",
                city: "New York",
                position: "Manager",
            },
        ],
    },
    {
        id: 2,
        name: "Globex Corp.",
        users: [
            {
                id: 1,
                firstName: "Bob",
                lastName: "Smith",
                email: "bobsmith@globex.com",
                phone: "+1 555-555-5555",
                city: "Los Angeles",
                position: "CEO",
            },
            {
                id: 2,
                firstName: "Alice",
                lastName: "Smith",
                email: "alicesmith@globex.com",
                phone: "+1 555-555-5555",
                city: "Los Angeles",
                position: "Manager",
            },
        ],
    },
    {
        id: 3,
        name: "Soylent Corp.",
        users: [
            {
                id: 1,
                firstName: "Jane",
                lastName: "Doe",
                email: "jane@soylent.com",
                phone: "+1 555-555-5555",
                city: "San Francisco",
                position: "CEO",
            },
            {
                id: 2,
                firstName: "Johny",
                lastName: "Dog",
                email: "johny@soylent.com",
                phone: "+1 555-555-5555",
                city: "San Francisco",
                position: "Manager",
            },
        ],
    },
    {
        id: 4,
        name: "Microsoft",
        users: [
            {
                id: 1,
                firstName: "Bill",
                lastName: "Gates",
                email: "billgates@microsoft.com",
                phone: "+1 555-555-5555",
                city: "Seattle",
                position: "CEO",
            },
            {
                id: 2,
                firstName: "Steve",
                lastName: "Ballmer",
                email: "steve@microsoft.com",
                phone: "+1 555-555-5555",
                city: "Seattle",
                position: "Manager",
            },
            {
                id: 3,
                firstName: "Satya",
                lastName: "Nadella",
                email: "satya@microsoft.com",
                phone: "+1 555-555-5555",
                city: "Seattle",
                position: "Manager",
            },
        ],
    },
];

export const getCompanies = () => {
    return dummyData;
};

export const getUsersByCompany = (id) => {
    return dummyData.find((company) => company.id === id).users;
};