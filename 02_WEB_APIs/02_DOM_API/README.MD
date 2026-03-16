### document methods

| Method                                | What it does                                |
| ------------------------------------- | ------------------------------------------- |
| `document.getElementById(id)`         | Returns the element with the given id       |
| `document.querySelector(selector)`    | Returns the first matching element          |
| `document.querySelectorAll(selector)` | Returns all matching elements as a NodeList |
| `document.createElement(tag)`         | Creates a new element (not yet in the DOM)  |

---

### Element properties & methods

| Property / Method                     | What it does                          |
| ------------------------------------- | ------------------------------------- |
| `element.textContent`                 | Get or set the text inside an element |
| `element.innerHTML`                   | Get or set the HTML inside an element |
| `element.style.property`              | Set inline CSS styles                 |
| `element.classList.add/remove/toggle` | Manage CSS classes                    |
| `element.setAttribute(name, value)`   | Set an HTML attribute                 |
| `element.getAttribute(name)`          | Get an HTML attribute                 |
| `element.appendChild(child)`          | Add a child element to the end        |
| `element.removeChild(child)`          | Remove a specific child element       |
| `element.remove()`                    | Remove the element itself             |
| `element.parentElement`               | Access the parent element             |

---

### EventTarget methods

| Method                                 | What it does                         |
| -------------------------------------- | ------------------------------------ |
| `target.addEventListener(type, fn)`    | Listen for an event                  |
| `target.removeEventListener(type, fn)` | Stop listening for an event          |
| `e.preventDefault()`                   | Prevent the default browser behavior |
| `e.target`                             | The element that triggered the event |
