function Button() {
  const onShowMessage = (event) => {
    console.log('Hello, user', event);
  };

  const onShowMessage2 = (name: string) => (event) => {
    console.log(`Hello, ${name}`, event);
  };


  return (
    <>
        <button onClick={() => console.log('Hello, user')}>Show message (inline)</button>
        <button onClick={onShowMessage}>Show message</button>
        <button onClick={onShowMessage2('Vitaliy')}>Show message (with param)</button>
    </>
  )
}

export default Button;