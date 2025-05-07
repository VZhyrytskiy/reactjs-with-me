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
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
    

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);       
        const data: { [key: string]: FormDataEntryValue | FormDataEntryValue[] | boolean} = Object.fromEntries(formData.entries());

        // Handle multiple select options
        const multipleSelectName = 'cuisines';
        const selectedOptions = formData.getAll(multipleSelectName);
        data[multipleSelectName] = selectedOptions;

        // Handle checkbox
        data.showAdvancedSettings = data.showAdvancedSettings === 'true' ? true : false;

        console.log(data);

        event.currentTarget.reset(); // Reset the form fields
        setShowAdvancedSettings(false); // Reset the advanced settings toggle
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
                defaultValue={initialUserProfile.userName}
                className="border-1 rounded bg-white border-gray-300 p-2" />
            <label htmlFor="hobbies" className="capitalize text-left font-bold mt-4">hobbies:</label>
            <textarea 
                id="hobbies"
                rows={4}
                className="border-1 rounded bg-white border-gray-300 p-2"
                placeholder="Your hobbies..."
                name="hobbies" 
                defaultValue={initialUserProfile.hobbies}
            />
            <label htmlFor="showAdvancedSettings" className="capitalize text-left font-bold mt-4">
                <input 
                    id="showAdvancedSettings"
                    type="checkbox"
                    name="showAdvancedSettings"
                    value="true"
                    checked={showAdvancedSettings}
                    onChange={() => setShowAdvancedSettings(prev => !prev)}
                    className="border-1 rounded bg-white border-gray-300 p-2 mr-4" />
                <span>show advanced settings</span>
            </label>

            {showAdvancedSettings ? (
                <section className="flex flex-col">
                    <h3 className="text-left font-bold mt-4">Налаштування видимості профілю</h3>
                    <label htmlFor="visibility-private" className="capitalize text-left mt-4">
                        <input 
                            id="visibility-private"
                            type="radio"
                            name="visibility"
                            value="private"
                            defaultChecked={initialUserProfile.visibility === 'private'}
                            className="mr-4" />
                        <span>тільки я</span>
                    </label>
                    <label htmlFor="visibility-friends" className="capitalize text-left">
                        <input 
                            id="visibility-friends"
                            type="radio"
                            name="visibility"
                            value="friends"
                            defaultChecked={initialUserProfile.visibility === 'friends'}
                            className="mr-4" />
                        <span>друзі</span>
                    </label>
                    <label htmlFor="visibility-all" className="capitalize text-left">
                        <input 
                            id="visibility-all"
                            type="radio"
                            name="visibility"
                            value="all"
                            defaultChecked={initialUserProfile.visibility === 'all'}
                            className="mr-4" />
                        <span>всі</span>
                    </label>
                </section>
            ) : (
                <>
                    <input type="hidden" name="visibility" value={initialUserProfile.visibility} />
                    <input type="hidden" name="showAdvancedSettings" value={`${initialUserProfile.showAdvancedSettings}`} />
                </>
            )}

            <label htmlFor="color" className="capitalize text-left font-bold mt-4">favorite color:</label>
            <select 
                id="color"
                name="color"
                defaultValue={initialUserProfile.color}
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
                defaultValue={initialUserProfile.cuisines}
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