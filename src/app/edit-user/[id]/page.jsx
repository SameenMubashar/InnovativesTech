'use client';
import TopBar from '@/components/General/TopBar';
import { montserrat } from '@/app/fonts';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const EditUserPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split('/').pop();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchEvent = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

      try {
        const response = await fetch(
          `${baseUrl}/api/eventDetails/${currentId}`
        );
        const data = await response.json();

        if (response.ok) {
          console.log('data fetched successfully', data);
          setFirstName(data.eventResponse.firstName);
          setLastName(data.eventResponse.lastName);
          setEmail(data.eventResponse.email);
        } else {
          console.log('failed to fetch data');
          setError(data.error || 'Failed to fetch event data');
        }
      } catch (error) {
        setError('Failed to fetch event data');
      }
    };

    fetchEvent();
  }, [currentId]);

  const handleUpdate = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      const response = await fetch(`${baseUrl}/api/eventDetails/${currentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('User updated successfully');
      } else {
        setError(data.error || 'Failed to update user');
      }
    } catch (error) {
      setError('Failed to update user');
    }
  };

  return (
    <div className="flex flex-col">
      <TopBar />
      <h2
        className={`${montserrat.className} mt-4 text-4xl text-blueMain font-bold text-center mb-4`}
      >
        User Details
      </h2>
      <div className="px-[5%] flex flex-col gap-6 ">
        <div className="flex flex-col gap-4 w-[60%] mx-auto ">
          <div className="flex flex-col gap-4 mx-auto w-full">
            <Label htmlFor="eventName" className="text-left">
              First Name
            </Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto w-full">
            <Label htmlFor="lastName" className="text-left">
              Last Name
            </Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-4 mx-auto w-full">
            <Label htmlFor="email" className="text-left">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
            />
          </div>

          <Button
            type="button"
            className="w-[40%] mx-auto"
            onClick={handleUpdate}
          >
            Save changes
          </Button>
        </div>
        {error && <div className="text-red-500 mx-auto">{error}</div>}
        {successMessage && (
          <div className="text-green-500 mx-auto">{successMessage}</div>
        )}
      </div>
    </div>
  );
};

export default EditUserPage;
