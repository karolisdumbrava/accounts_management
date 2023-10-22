import { useState } from 'react';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import CompanyList from './components/company/CompanyList';
import CompanyDetail from './components/company/CompanyDetail';

function App() {
  
  const [view, setView] = useState('list');

  const toggleView = () => {
    setView(view === 'list' ? 'detail' : 'list');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="mb-4">
          <button 
            onClick={toggleView} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Switch to {view === 'list' ? 'Detail' : 'List'} View
          </button>
        </div>

        {view === 'list' ? <CompanyList /> : <CompanyDetail />}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
