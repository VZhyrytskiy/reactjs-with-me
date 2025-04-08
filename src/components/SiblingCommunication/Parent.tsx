import { useState } from 'react';
import Sibling1 from './Sibling1';
import Sibling2 from './Sibling2';


const defaultData = {
    s1: "content for sibling1",
    s2: "content for sibling2"
};

function Parent() {
  const [data, setData] = useState<typeof defaultData>(defaultData);

  const changeData = (key: keyof typeof defaultData, text: string) => {
    setData((prevData) => ({
      ...prevData,
      [key]: text,
    }));
  }; 

  return (
    <section className='flex gap-16'>
        <Sibling1 text={data.s1} changeData={changeData} />
        <Sibling2 text={data.s2} changeData={changeData}/>
    </section>
  )
}

export default Parent; 