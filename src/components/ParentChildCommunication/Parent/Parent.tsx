/**
 * 1. Передача даних: Parent -> Child
 * 2. Інформування про подію: Child -> Parent
 * 3. Інформування про подію з передачею даних: Child -> Parent
 * 4. Інформування про подію: Child -> Parent (Parent функція зі власними даними) 
 * 
 */

import Child from "../Child/Child";

function Parent() {
    const showMessage = () => {
        console.log('Hello from Child');
    }

    const showMessageWithData = (data: string) => {
        console.log(`Hello from ${data}`);
    }

    return (
        <Child 
            data={'Hello from Parent'} 
            notifyParent={showMessage}
            notifyParentWithData={showMessageWithData}
            callParentFn={() => showMessageWithData('Anna')}
        />
    )
}

export default Parent;