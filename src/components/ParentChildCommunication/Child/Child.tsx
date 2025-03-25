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
          <button onClick={() => notifyParentWithData('Vitaliy')}>Notify Parent with Data</button>
          <button onClick={callParentFn}>Notify Parent with Parent Data</button>
        </>
  )
}

export default Child;