import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { FiPlusCircle, FiEdit, FiTrash2 } from "react-icons/fi";
import SideBar from "../Sidebar";
function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDepartments =
      JSON.parse(localStorage.getItem("departments")) || [];
    setDepartments(storedDepartments);
  }, []);

  const handleDelete = (id) => {
    const updatedDepartments = departments.filter(
      (department) => department.id !== id
    );
    setDepartments(updatedDepartments);
    localStorage.setItem("departments", JSON.stringify(updatedDepartments));
  };

  return (
    <>
      <SideBar />
      <div
        id="main"
        className="h-screen w-auto bg-transparent p-4 mt-24 ml-[240px]"
      >
        <div className="ml-5">
          <p className="text-[#e65f2b] font-semibold">
            Employees/DepartmentList
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <div
            id="addemployee"
            className="w-auto inline-block bg-[#0098f1] h-[48px] rounded-lg justify-end items-center"
          >
            <button
              type="button"
              className="flex justify-center items-center w-[228px] h-[48px] text-white"
              onClick={() => navigate("/add-department")}
            >
              <FiPlusCircle className="text-2xl font-bold mr-2" /> Add New
              Department
            </button>
          </div>
        </div>
        <div id="table" className="w-full">
          <table className="min-w-full overflow-x-auto">
            <thead>
              <tr>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Department Name
                </th>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Department Head
                </th>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Total Employees
                </th>
                <th className="py-4 px-16 border-b bg-[#0098f1] bg-opacity-30 text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.id}>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {department.department}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {department.departmentHead}
                  </td>
                  <td className="py-2 px-4 border-b bg-transparent text-center">
                    {department.totalEmployees}
                  </td>
                  <td className="py-2 px-4 border-b pt-6 bg-transparent text-center flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleDelete(department.id)}
                      className="flex items-center"
                    >
                      <MdDelete className="text-red-500 text-2xl mr-1" />
                    </button>
                    <button
                      onClick={() =>
                        navigate(`/edit-departmentList/${department.id}`)
                      }
                      className="flex items-center"
                    >
                      <MdEdit className="text-blue-500 text-2xl mr-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DepartmentList;
