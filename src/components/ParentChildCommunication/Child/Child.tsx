interface ChildPropsType {
  data: string;
  notifyParent: () => void;
  notifyParentWithData: (data: string) => void;
  callParentFn: () => void;
}

function Child(props: ChildPropsType) {
  const { data, notifyParent, notifyParentWithData, callParentFn } = props;

  return (
    <>
      <div>{data}</div>
      <button onClick={notifyParent}>Notify Parent</button>
      <button onClick={() => notifyParentWithData('Vitaliy')}>Notify Parent With Data</button>
      <button onClick={callParentFn}>Notify Parent With Its own Data</button>
    </>
  )
}

export default Child;