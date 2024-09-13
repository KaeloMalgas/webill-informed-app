import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditProfile = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="name" placeholder="Enter your name" className="mt-1" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="email" placeholder="Enter your email" className="mt-1" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <Input type="tel" id="phone" placeholder="Enter your phone number" className="mt-1" />
        </div>
        <Button type="submit">Update Profile</Button>
      </form>
    </div>
  );
};

export default EditProfile;