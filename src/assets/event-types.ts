/**
 * Базовий тип для всіх подій
 * React.SyntheticEvent<T = Element, E = Event>
 * T — тип цільового елемента (event.target)
 * E — тип події (MouseEvent, KeyboardEvent)
 * 
 */

// Приклад
function handleEvent1(event: React.SyntheticEvent) {
    console.log(event.type); // Тип події (наприклад, "click", "change")
    console.log(event.target); // Цільовий елемент, який викликав подію
}

function handleEvent2(event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) {
    console.log(event.type); // Тип події (наприклад, "click", "change")
    console.log(event.target); // Цільовий елемент, який викликав подію
}


/**
 * Події миші
 * React.MouseEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onClick
 *  onDoubleClick
 *  onMouseDown
 *  onMouseUp
 *  onMouseMove
 *  onMouseEnter
 *  onMouseLeave
 *  onContextMenu
 */

// Приклад
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event.clientX, event.clientY); // Координати миші
}

/**
 * Події клавіатури
 * React.KeyboardEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onKeyDown
 *  onKeyPress (застаріла подія)
 *  onKeyUp
 */

// Приклад
function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    console.log(event.key); // Натиснута клавіша
}


/**
 * Події фокусу
 * React.FocusEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onFocus
 *  onBlur
 */

// Приклад
function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    console.log(event.type); // Тип події (наприклад, "focus", "blur")
}

/**
 * Події зміни
 * React.ChangeEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onChange
 *  onInput
 */

// Приклад
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value); // Значення елемента
}

/**
 * Події форми
 * React.FormEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onSubmit
 *  onReset
 */

// Приклад
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Заборонити стандартну поведінку форми
    console.log('Form submitted');
}

/**
 * Події сенсорних пристроїв
 * React.TouchEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onTouchStart
 *  onTouchMove
 *  onTouchEnd
 */

// Приклад
function handleTouch(event: React.TouchEvent<HTMLDivElement>) {
    console.log(event.touches[0].clientX, event.touches[0].clientY); // Координати точки дотику
}

/**
 * Події прокрутки
 * React.UIEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onScroll
 */

// Приклад
function handleScroll(event: React.UIEvent<HTMLDivElement>) {
    console.log("Scrolled!");
}

/**
 * Події колеса миші
 * React.WheelEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onWheel
 */

// Приклад
function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    console.log(event.deltaY); // Дельта, на яку прокручено колесо
}
  
/**
 * Події перетягування
 * React.DragEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onDrag
 *  onDragStart
 *  onDragEnd
 *  onDragEnter
 *  onDragLeave
 *  onDragOver
 *  onDrop
 */

// Приклад
function handleDrag(event: React.DragEvent<HTMLDivElement>) {
    console.log('Element dragged');
}

/**
 * Події буферу обміну
 * React.ClipboardEvent<T = Element>
 * T — тип цільового елемента (event.target)
 * 
 * Події
 *  onCopy
 *  onCut
 *  onPaste
 */

// Приклад
function handleCopy(event: React.ClipboardEvent<HTMLInputElement>) {
    console.log('Text copied');
}