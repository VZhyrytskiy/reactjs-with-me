interface Sibling2Props {
    text: string;
    changeData: (key: 's1' | 's2', text: string) => void;
}

function Sibling2(prop: Sibling2Props) {
    const { text, changeData } = prop;

    const handleClick = () => {
        changeData('s1', 'new content from sibling2 for sibling1');
    };
    
    return (
        <div>
            <h2 className="text-3xl font-bold capitalize">
                sibling2
            </h2>
            <p>content from sibling1: 
                <br />
                {text}
            </p>
            <button 
                onClick={handleClick}
                className="capitalize">send content to sibling1</button>
        </div>
    )
}

export default Sibling2;