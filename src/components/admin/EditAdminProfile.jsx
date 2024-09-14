import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditAdminProfile = () => {
  const [profile, setProfile] = useState({
    givenName: '',
    surname: '',
    address: '',
    email: '',
    secretWord: '',
  });

  useEffect(() => {
    // Fetch admin profile data
    // This is a mock fetch, replace with actual API call
    const fetchProfile = async () => {
      // Simulating API call
      const response = await new Promise(resolve => setTimeout(() => resolve({
        givenName: 'John',
        surname: 'Doe',
        address: '123 Admin St',
        email: 'admin@example.com',
      }), 500));
      setProfile(response);
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    console.log('Updated profile:', profile);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    alert('Profile updated successfully!');
  };

  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Edit Admin Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="givenName"
          value={profile.givenName}
          onChange={handleInputChange}
          placeholder="Given Name"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="text"
          name="surname"
          value={profile.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
          className="bg-white text-orange-800"
        />
        <Input
          type="email"
          name="email"
          value={profile.email}
          readOnly
          className="bg-gray-100 text-orange-800"
        />
        <Input
          type="password"
          name="secretWord"
          value={profile.secretWord}
          onChange={handleInputChange}
          placeholder="New Secret Word (leave blank to keep current)"
          className="bg-white text-orange-800"
        />
        <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">Update Profile</Button>
      </form>
    </div>
  );
};

export default EditAdminProfile;