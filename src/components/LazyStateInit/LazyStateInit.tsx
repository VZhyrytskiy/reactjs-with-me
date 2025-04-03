import { useState } from "react";

function LazyStateInit() {
    // // Not Lazy Initialization
    // const [userName, setUserName] = useState(localStorage.getItem('userName') || 'Guest');
    
    // // Lazy Initialization
    const [userName, setUserName] = useState<string>(() => {
        console.log('LazyStateInit function executed!');
        return localStorage.getItem('userName') || 'Guest';
    });

    console.log('LazyStateInit component rendered!');

    const onChangeName = () => {
        const names = ['John', 'Jane', 'Doe', 'Smith'];
        const randomName = names[Math.floor(Math.random() * names.length)];
        setUserName(randomName);
    }

    return (
        <>
            <div>User Name: <span className="text-red-600 text-lg">
                {userName}</span>
            </div>
            <button onClick={() => onChangeName()}>Change Name</button>
        </>
    )
}

export default LazyStateInit;