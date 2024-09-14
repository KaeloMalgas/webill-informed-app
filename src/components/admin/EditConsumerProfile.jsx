import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const EditConsumerProfile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({
    givenName: '',
    surname: '',
    address: '',
    electricMeterId: '',
    email: '',
    enabled: true,
  });

  useEffect(() => {
    // Fetch consumer profile data
    // This is a mock fetch, replace with actual API call
    const fetchProfile = async () => {
      // Simulating API call
      const response = await new Promise(resolve => setTimeout(() => resolve({
        givenName: 'Jane',
        surname: 'Doe',
        address: '456 Consumer St',
        electricMeterId: 'METER123',
        email: 'jane@example.com',
        enabled: true,
      }), 500));
      setProfile(response);
    };
    fetchProfile();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleEnabled = () => {
    setProfile(prev => ({ ...prev, enabled: !prev.enabled }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your backend
    console.log('Updated consumer profile:', profile);
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 500));
    alert('Consumer profile updated successfully!');
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this consumer account? This action cannot be undone.')) {
      // Here you would typically send a delete request to your backend
      console.log('Deleting consumer account:', id);
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 500));
      alert('Consumer account deleted successfully!');
      // Redirect to consumer list or dashboard
    }
  };

  return (
    <div className="p-4 bg-orange-100 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-orange-800">Edit Consumer Profile</h2>
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
          type="text"
          name="electricMeterId"
          value={profile.electricMeterId}
          readOnly
          className="bg-gray-100 text-orange-800"
        />
        <Input
          type="email"
          name="email"
          value={profile.email}
          readOnly
          className="bg-gray-100 text-orange-800"
        />
        <div className="flex items-center space-x-2">
          <Switch
            id="enabled"
            checked={profile.enabled}
            onCheckedChange={handleToggleEnabled}
          />
          <label htmlFor="enabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Account Enabled
          </label>
        </div>
        <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">Update Profile</Button>
      </form>
      <Button onClick={handleDelete} className="w-full mt-4 bg-red-500 text-white hover:bg-red-600">Delete Account</Button>
    </div>
  );
};

export default EditConsumerProfile;