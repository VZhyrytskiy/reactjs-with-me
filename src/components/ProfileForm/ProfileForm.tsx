import { useState } from "react";

function ProfileForm() {
    const [userName, setUserName] = useState<string>('Vitaliy');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('User name:', userName);
        setUserName('');
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
            <button type="submit" className="w-30 capitalize self-center">save</button>
        </form>
    </>
  )
}

export default ProfileForm;