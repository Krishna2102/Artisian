import React, { useState } from 'react';

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: 'KRISHNA',
    lastName: 'KUMAR',
    addresses: '',
    phone: '08847859244',
    email: 'krishnakumarjena2102@gmail.com',
    password: '',
    confirmPassword: '',
    currentPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Account Details:', formData);
    alert('Account details updated successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-gray-500 text-sm mb-4">
        Home / Your Account / <span className="font-semibold">Account Details</span>
      </div>

      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

      {/* Account Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First Name <span className="text-red-500">*</span></label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Last Name <span className="text-red-500">*</span></label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Addresses</label>
          <input type="text" name="addresses" value={formData.addresses} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" required />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>

        <div>
          <label className="block text-sm font-medium">Current Password</label>
          <input type="password" name="currentPassword" value={formData.currentPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded-md" />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button type="submit" className="w-full py-2 bg-pink-500 text-white font-semibold rounded-md">
            UPDATE DETAILS
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account;
