import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    givenName: '',
    surname: '',
    address: '',
    phoneNumber: '',
  });

  useEffect(() => {
    // Fetch consumer profile data
    // This is a mock fetch, replace with actual API call
    const fetchProfile = async () => {
      // Simulating API call
      const response = await new Promise(resolve => setTimeout(() => resolve({
        givenName: 'John',
        surname: 'Doe',
        address: '123 Consumer St',
        phoneNumber: '123-456-7890',
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
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="p-4 bg-secondary rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-primary">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="givenName"
          value={profile.givenName}
          onChange={handleInputChange}
          placeholder="Given Name"
          required
          className="bg-background text-foreground"
        />
        <Input
          type="text"
          name="surname"
          value={profile.surname}
          onChange={handleInputChange}
          placeholder="Surname"
          required
          className="bg-background text-foreground"
        />
        <Input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
          className="bg-background text-foreground"
        />
        <Input
          type="tel"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          required
          className="bg-background text-foreground"
        />
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Update Profile</Button>
      </form>
    </div>
  );
};

export default EditProfile;
