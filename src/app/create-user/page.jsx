'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaSpinner } from 'react-icons/fa';

const CreateUser = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [formSubmitting, setFormSubmitting] = useState(false);

  const resetFormValues = () => {
    setfirstName('');
    setLastName('');
    setEmail('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    // console.log(baseUrl);

    try {
      const res = await fetch(`${baseUrl}/api/eventDetails`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      if (!res.ok) {
        console.log('Error Response:\n', res);
        setFormSubmitting(false);

        throw new Error('Failed to submit event form!');
      } else {
        resetFormValues();
        setFormSubmitting(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="mx-auto max-w-sm mt-20">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-xl">Create Event</CardTitle>
          <CardDescription>
            Enter your information related to the user
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="event-name">First name</Label>
              <Input
                id="first-name"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="event-name">Last name</Label>
              <Input
                id="last-name"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              {formSubmitting ? (
                <FaSpinner size={30} className="animate-spin" />
              ) : (
                'Create Event'
              )}
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  );
};

export default CreateUser;
