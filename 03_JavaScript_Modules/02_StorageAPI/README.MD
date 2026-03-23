## localStorage vs sessionStorage

|          | `localStorage`             | `sessionStorage`        |
| -------- | -------------------------- | ----------------------- |
| Lifetime | Persists forever           | Cleared when tab closes |
| Scope    | All tabs on same origin    | Only the current tab    |
| Use case | User preferences, settings | Temporary form data     |

### Web Storage

```js
// store
localStorage.setItem('key', 'string value');
localStorage.setItem('key', JSON.stringify(arrayOrObject));

// retrieve
localStorage.getItem('key');
JSON.parse(localStorage.getItem('key')); // for arrays/objects

// remove
localStorage.removeItem('key');
localStorage.clear();

// same API for sessionStorage
sessionStorage.setItem('key', 'value');
// ...
```

---

### Arrow function syntax

```js
// full syntax
const fn = (a, b) => {
  return a + b;
};

// implicit return (single expression)
const fn = (a, b) => a + b;

// single parameter — parentheses optional
const fn = (x) => x * 2;

// no parameters
const fn = () => console.log('hello');

// returning an object — wrap in parentheses
const fn = (name) => ({ name: name });
```
