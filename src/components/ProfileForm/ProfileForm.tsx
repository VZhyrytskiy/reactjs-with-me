import { useState } from "react";

function ProfileForm() {
    const [userName, setUserName] = useState<string>('Vitaliy');
    const [hobbies, setHobbies] = useState<string>('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            userName, hobbies
        }
        console.log('Payload:', payload);
        setUserName('');
        setHobbies('');
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="border-1 rounded bg-white border-gray-300 p-2" />
            <label htmlFor="hobbies" className="capitalize text-left font-bold mt-4">hobbies:</label>
            <textarea 
                id="hobbies"
                rows={4}
                className="border-1 rounded bg-white border-gray-300 p-2"
                placeholder="Your hobbies..." 
                value={hobbies}
                onChange={(e) => setHobbies(e.target.value)}
            />
            <button type="submit" className="w-30 capitalize self-center">save</button>
        </form>
    </>
  )
}

export default ProfileForm;