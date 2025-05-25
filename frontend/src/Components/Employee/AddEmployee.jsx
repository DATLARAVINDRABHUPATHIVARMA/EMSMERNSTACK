import React from 'react'

const AddEmployee = () => {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
        <h2 className='text-2xl font-bold mb-6'>Add New Employee</h2>
        <form>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {/* Name */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Name
                    </label>
                    <input type="text" name='name' placeholder='Insert Name' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Personal Contact Number */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Personal Contact Number
                    </label>
                    <input type="text" name='contactSelf' placeholder='Enter Personal Phone Number' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
                {/* Email */}
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Email
                    </label>
                    <input type="email" name='email' placeholder='Enter Email' className='mt-1 p-2 block w-full border border-gray-300 rounded-md' required/>
                </div>
            </div>
        </form>
      
    </div>
  )
}

export default AddEmployee
