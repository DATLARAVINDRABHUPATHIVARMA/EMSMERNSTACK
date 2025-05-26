import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const AddEmployee = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleVisibility = () => setVisiblePassword(!visiblePassword);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Full Name as per Aadhaar"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Personal Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="number"
              name="personalContact"
              placeholder="Enter Personal Phone Number"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Employee ID*
            </label>
            <input
              type="text"
              name="employeeID"
              placeholder="Enter Employee ID"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Date Of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth*
            </label>
            <input
              type="date"
              name="dateOfBirth"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Personal Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Personal Email
            </label>
            <input
              type="email"
              name="personalEmail"
              placeholder="Enter Personal Email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative flex justify-between">
            <input
              type={visiblePassword ? "text" : "password"}
              name="password"
              placeholder="**********"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
            <button
              type="button"
              onClick={toggleVisibility}
              className="absolute inset-y-0 right-0 px-2 py-2 text-grey-500 hover:text-purple-500 transition-colors duration-100"
            >
              {visiblePassword ? (
                <IoMdEye size={24} />
              ) : (
                <IoMdEyeOff size={24} />
              )}
            </button>
            </div>
          </div>
          {/* Present Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Present Address*
            </label>
            <input
              type="text"
              name="presentAddress"
              placeholder="Enter Present Address"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender*
            </label>
            <select name="gender" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required> 
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
            </select>
            </div>
            {/* Employee Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo*
            </label>
            <input
              type="file"
              name="profileImage"
              placeholder="Upload Image"
              accept="image/*"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Date Of Joining */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Joining*
            </label>
            <input
              type="date"
              name="dateOfJoining"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Aadhaar Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Aadhaar Number*
            </label>
            <input
              type="number"
              name="aadhaarNumber"
              placeholder="Enter Aadhaar Number"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Marital Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marital Status*
            </label>
            <select name="maritalStatus" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required> 
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
            </select>
            </div>
          {/* Emergency Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Other Emergency Phone Number*
            </label>
            <input
              type="number"
              name="emergencyContact"
              placeholder="Enter Other Contact Number for Emergency "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* PAN Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PAN Number
            </label>
            <input
              type="text"
              name="PANNumber"
              placeholder="Enter PAN Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Spouse Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Spouse Name
            </label>
            <input
              type="text"
              name="spouseName"
              placeholder="Enter Spouse Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Children Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Children Count
            </label>
            <input
              type="number"
              name="childrenCount"
              placeholder="Number of Children "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Permanent Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Permanent Address*
            </label>
            <input
              type="text"
              name="permanentAddress"
              placeholder="Enter Permanent Address "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Office Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Office Phone Number
            </label>
            <input
              type="number"
              name="officeContact"
              placeholder="Enter Office Phone Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Office Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Office Email
            </label>
            <input
              type="email"
              name="officeEmail"
              placeholder="Enter Office Email "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
