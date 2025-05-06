import { useState } from "react";

interface UserProfile {
    userName: string;
    hobbies: string;
    showAdvancedSettings: boolean;
    visibility: string;
    color: string;
    cuisines: string[];
}

const initialUserProfile: UserProfile = {
    userName: '',
    hobbies: '',
    showAdvancedSettings: false,
    visibility: 'private',
    color: '',
    cuisines: []
};

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

const cuisinesData = [
    { value: "italian", label: "Італійська" },
    { value: "japanese", label: "Японська" },
    { value: "mexican", label: "Мексиканська" },
    { value: "indian", label: "Індійська" },
    { value: "french", label: "Французька" },
];

function ProfileForm() {
    const [userProfile, setUserProfile] = useState<UserProfile>(initialUserProfile);
    const { userName, hobbies, showAdvancedSettings, visibility, color, cuisines } = userProfile;

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, multiple } = event.target as HTMLSelectElement;
        
        // multiple select handling
        if (type === 'select-multiple' && multiple) {
            const selectedOptions = Array.from((event.target as HTMLSelectElement).selectedOptions, (option) => option.value);
            setUserProfile((prevState) => ({
                ...prevState,
                [name]: selectedOptions
            }));
            return;
        }

        // text input, textarea, checkbox, radio, single select handling
        else {
            setUserProfile((prevState) => ({
                ...prevState,
                [name]: (event.target as HTMLInputElement).type === 'checkbox' ? (event.target as HTMLInputElement).checked : value
            }));
        }        
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = { ...userProfile }
        console.log('Payload:', payload);

        setUserProfile(initialUserProfile);
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
                value={userName}
                onChange={onChangeInput}
                className="border-1 rounded bg-white border-gray-300 p-2" />
            <label htmlFor="hobbies" className="capitalize text-left font-bold mt-4">hobbies:</label>
            <textarea 
                id="hobbies"
                rows={4}
                className="border-1 rounded bg-white border-gray-300 p-2"
                placeholder="Your hobbies..."
                name="hobbies" 
                value={hobbies}
                onChange={onChangeInput}
            />
            <label htmlFor="showAdvancedSettings" className="capitalize text-left font-bold mt-4">
                <input 
                    id="showAdvancedSettings"
                    type="checkbox"
                    name="showAdvancedSettings"
                    checked={showAdvancedSettings}
                    onChange={onChangeInput}
                    className="border-1 rounded bg-white border-gray-300 p-2 mr-4" />
                <span>show advanced settings</span>
            </label>

            {showAdvancedSettings && (
                <section className="flex flex-col">
                    <h3 className="text-left font-bold mt-4">Налаштування видимості профілю</h3>
                    <label htmlFor="visibility-private" className="capitalize text-left mt-4">
                        <input 
                            id="visibility-private"
                            type="radio"
                            name="visibility"
                            value="private"
                            checked={visibility === 'private'}
                            onChange={onChangeInput}
                            className="mr-4" />
                        <span>тільки я</span>
                    </label>
                    <label htmlFor="visibility-friends" className="capitalize text-left">
                        <input 
                            id="visibility-friends"
                            type="radio"
                            name="visibility"
                            value="friends"
                            checked={visibility === 'friends'}
                            onChange={onChangeInput}
                            className="mr-4" />
                        <span>друзі</span>
                    </label>
                    <label htmlFor="visibility-all" className="capitalize text-left">
                        <input 
                            id="visibility-all"
                            type="radio"
                            name="visibility"
                            value="all"
                            checked={visibility === 'all'}
                            onChange={onChangeInput}
                            className="mr-4" />
                        <span>всі</span>
                    </label>
                </section>
            )}

            <label htmlFor="color" className="capitalize text-left font-bold mt-4">favorite color:</label>
            <select 
                id="color"
                name="color"
                value={color}
                onChange={onChangeInput}
                className="border-1 rounded bg-white border-gray-300 p-2">
                <option value=''>Select Favorite Color</option>
                {colors.map((color) => (
                    <option key={color} value={color}>{color}</option>
                ))}
            </select>

            <label htmlFor="cuisines" className="capitalize text-left font-bold mt-4">favorite cuisines:</label>
            <select 
                multiple
                id="cuisines"
                name="cuisines"
                value={cuisines}
                onChange={onChangeInput}
                className="border-1 rounded bg-white border-gray-300 p-2">
                {cuisinesData.map((cuisine) => (
                    <option key={cuisine.value} value={cuisine.value}>{cuisine.label}</option>
                ))}
            </select>


            <button type="submit" className="w-30 capitalize self-center">save</button>
        </form>
    </>
  )
}

export default ProfileForm;