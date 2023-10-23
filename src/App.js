import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import CompanyList from "./components/company/CompanyList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersList from "./components/company/UsersList";

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow container mx-auto p-6">
                    <Routes>
                        <Route path="/" element={<CompanyList />} />
                        <Route
                            path="/company/:companyId"
                            element={<UsersList />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
