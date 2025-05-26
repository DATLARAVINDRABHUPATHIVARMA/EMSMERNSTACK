import React, { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const AddEmployee = () => {
  useEffect(() => {}, []);

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
            <select
              name="gender"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
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
          {/* Qualification*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Highest Qualification
            </label>
            <input
              type="text"
              name="qualifiaction"
              placeholder="Enter Highest Qualification "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Marital Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marital Status*
            </label>
            <select
              name="maritalStatus"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
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
          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department*
            </label>
            <select
              name="department"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Department</option>
            </select>
          </div>
          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation*
            </label>
            < input type='text' name="designation" placeholder='Enter Designation' className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required /> 
          </div>
          {/* Work Place */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site*
            </label>
            <select
              name="workPlace"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Site</option>
            </select>
          </div>
          {/* Job Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Role*
            </label>
            < textarea name="jobRole" placeholder='Enter Job Details' className="mt-1 p-2 block w-full border border-gray-300 rounded-md" rows={4} required /> 
          </div>
          {/* Site Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Site Details*
            </label>
            < textarea name="workSiteDetails" placeholder='Enter Site Details' className="mt-1 p-2 block w-full border border-gray-300 rounded-md" rows={4} required /> 
          </div>
          {/* Client */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client*
            </label>
            <select
              name="client"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Client</option>
            </select>
          </div>
          {/* Client  ID*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Client ID*
            </label>
            <select
              name="clientID"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Client ID</option>
            </select>
          </div>
          {/* Reporting Incharge / Manager */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Person
            </label>
            <input
              type="text"
              name="reportingInchargePerson"
              placeholder="Enter Reporting Person Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Reporting Incharge Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Person Designation
            </label>
            <input
              type="text"
              name="repPersonDesignation"
              placeholder="Enter Reporting Person Designation "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Reporting Incharge Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reporting Person Employee ID
            </label>
            <input
              type="text"
              name="repPersonEmployeeID"
              placeholder="Enter Reporting Person Employee ID "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary*
            </label>
            <input
              type="text"
              name="salary"
              placeholder="Enter Salary "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required
            />
          </div>
          {/* Bank Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank Name*
            </label>
            <input
              type="text"
              name="bankName"
              placeholder="Enter Bank Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Bank Account Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank Account Number*
            </label>
            <input
              type="number"
              name="bankAccountNumber"
              placeholder="Enter Account Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Bank IFSC Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank IFSC Code*
            </label>
            <input
              type="text"
              name="IFSCCode"
              placeholder="Enter IFSC Code"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* Bank Branch */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Bank Branch
            </label>
            <input
              type="text"
              name="bankBranch"
              placeholder="Enter Branch "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* ESI Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ESI Number
            </label>
            <input
              type="text"
              name="ESIDetails"
              placeholder="Enter ESI Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Insurance Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Insurance Number
            </label>
            <input
              type="text"
              name="insuranceDetails"
              placeholder="Enter Insurance Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* PF Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              PF Number
            </label>
            <input
              type="text"
              name="PFDetails"
              placeholder="Enter PF Number "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          /*
          <div>
            <label className="block text-sm font-medium text-gray-700">
               Total Team
            </label>
            <input
              type="number"
              name="teamCount"
              placeholder="Enter Total Team Members "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Team Details 
            </label>
            <input
              type="text"
              name="teamDetails"
              placeholder="Enter Team Details "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>*/
          {/*Previous Designation*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Designation
            </label>
            <input
              type="text"
              name="previousDesignation"
              placeholder="Enter Previous Designation "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/*Previous Salary*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Salary
            </label>
            <input
              type="text"
              name="previousSalary"
              placeholder="Enter Previous Salary "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Date Of Promotion */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Promotion
            </label>
            <input
              type="date"
              name="dateOfPromotion"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Date Of Termination */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Termination
            </label>
            <input
              type="date"
              name="dateOfTermination"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/*Reference Person*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person Name
            </label>
            <input
              type="text"
              name="refPerson"
              placeholder="Enter Reference Person Name "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/*Reference Person Contact*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person Contact
            </label>
            <input
              type="number"
              name="refPersonContact"
              placeholder="Enter Reference Contact"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Reference Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Status Employee or Not
            </label>
            <select
              name="isRefPersonEmployee"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            >
              <option value="">Reference Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/*Reference Person Employee ID*/}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reference Person Employee ID
            </label>
            <input
              type="text"
              name="refPersonEmployeeID"
              placeholder="Enter Reference Person Employee ID "
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            />
          </div>
          {/* Web Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Web Role*
            </label>
            <select
              name="webRole"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Web Role</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="staff">Staff</option>
              <option value="employee">Employee</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Employee
        </button>
        <div className="mt-3">
          <p>All * marked must be fields must be required</p>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
