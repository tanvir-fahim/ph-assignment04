## QNA SESSION.

01. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
  
    ANSWER: 
    ~getElementById() search element by its unique id and then returns it.
    ~getElementByClassName Search elements (multiple elements) by their class name and returns.
    ~querySelector() returns one single and the first matching element of the css selector.
    ~querySelectorAll() returns all the matching elements of the css selector as a list.

02. How do you create and insert a new element into the DOM?

    ANSWER:
    ~First i will create an element using .createElement(). Then use .innerText or .innerHTML to add writing or content inside of the element. Then use appendChild() to insert it into the DOM. 

03. What is Event Bubbling? And how does it work?

    ANSWER:
    ~Event Bubbling is the movement of an event from child to its parent elements. It starts an event at targeted child element then propegates upward through its parent element.

04. What is Event Delegation in JavaScript? Why is it useful?

    ANSWER:
    ~Event Delegation is a way of making one event Listener on parent instead of multiple child elements. Parent element use event.target to detects the target element.
    It is useful beacuse of less code, easy to read, less space need, handle dynamic input easily.

05. What is the difference between preventDefault() and stopPropagation() methods?

    ANSWER:
    ~preventDefault() stops the action or default behaviour of an element.
    ~stopPropagation() stops event bubbling so that event can't propagate from child to parent elements.
