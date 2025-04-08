interface Sibling1Props {
    text: string;
    changeData: (key: 's1' | 's2', text: string) => void;
}

function Sibling1(props: Sibling1Props) {
    const { text, changeData } = props;
    
    const handleClick = () => {
        changeData('s2', 'new content from sibling1 for sibling2');
    };

    return (
        <div>
            <h2 className="text-3xl font-bold capitalize">
                sibling1
            </h2>
            <p>content from sibling2: 
                <br />
                {text}
            </p>
            <button 
                onClick={handleClick}
                className="capitalize">send content to sibling2</button>
        </div>
    )
}

export default Sibling1;