import { useState } from "react";

interface UserProfile {
    [key: string]: string;
}

function ProfileForm() {
    const [userProfile, setUserProfile] = useState<UserProfile>({
        userName: 'Vitaliy',
        hobbies: ''
    });

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setUserProfile((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = { ...userProfile }
        console.log('Payload:', payload);

        const clearedProfile = Object.keys(userProfile).reduce((acc: UserProfile, key) => {
            acc[key] = '';
            return acc;
        }, {} as UserProfile);

        setUserProfile(clearedProfile);
    };

  return (
    <>
        <h1 className="font-bold capitalize">user profile</h1>
        <form
            onSubmit={onSubmit}
            className="w-md border-1 border-gray-300 rounded p-4 mt-8 bg-gray-200 flex flex-col gap-2">
            <label htmlFor="userName" className="capitalize text-left font-bold">user name:</label>
            <input 
                id="userName"
                type="text"
                name="userName"
                value={userProfile.userName}
                onChange={onChangeInput}
                className="border-1 rounded bg-white border-gray-300 p-2" />
            <label htmlFor="hobbies" className="capitalize text-left font-bold mt-4">hobbies:</label>
            <textarea 
                id="hobbies"
                rows={4}
                className="border-1 rounded bg-white border-gray-300 p-2"
                placeholder="Your hobbies..."
                name="hobbies" 
                value={userProfile.hobbies}
                onChange={onChangeInput}
            />
            <button type="submit" className="w-30 capitalize self-center">save</button>
        </form>
    </>
  )
}

export default ProfileForm;