import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from "./components/home/Sidebar";
import EmployeeTab from "./components/home/Employeetab/EmployeeTab";
import EmployeeNavBar from "./components/home/Employeetab/EmployeeNavBar";
import AllEmployees from "./components/home/Employeetab/AllEmployees";
import LeaveRequest from "./components/home/Employeetab/LeaveRequest";
import DepartmentList from "./components/home/Employeetab/DepartmentList";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/employee" element={<EmployeeTab />} />
          <Route path="/navbar" element={<EmployeeNavBar />} />
          <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/leaveRequest" element={<LeaveRequest />} />
          <Route path="/departmentlist" element={<DepartmentList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
