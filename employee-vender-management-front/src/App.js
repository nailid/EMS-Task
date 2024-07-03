import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './screens/Dashboard';
import { EmployeeList } from './screens/EmployeeList';
import { VendorList } from './screens/VendorList';
import { SendEmail } from './screens/SendEmail';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <BrowserRouter>
      <Routes>
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/vendors" element={<VendorList />} />
      <Route path="/send-email" element={<SendEmail />} />
      </Routes>
      </BrowserRouter>
      {/* <EmployeeList />
      <VendorList /> */}
    </div>
  );
}

export default App;
