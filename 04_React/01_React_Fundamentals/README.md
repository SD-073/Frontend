### JSX rules

| HTML                 | JSX                        |
| -------------------- | -------------------------- |
| `class`              | `className`                |
| `for`                | `htmlFor`                  |
| `<img>`              | `<img />`                  |
| `style="color: red"` | `style={{ color: 'red' }}` |
| `onclick`            | `onClick`                  |
| `onchange`           | `onChange`                 |

---

### Rendering patterns

```jsx
// value
{
  name;
}

// expression
{
  price * quantity;
}

// conditional — ternary
{
  isLoggedIn ? <Dashboard /> : <Login />;
}

// conditional — &&
{
  hasError && <ErrorMessage />;
}

// list
{
  items.map((item) => <Card key={item.id} title={item.title} />);
}
```

---

### Vanilla JS → React

| Vanilla JS                              | React                                          |
| --------------------------------------- | ---------------------------------------------- |
| `document.createElement`                | JSX — just write the element                   |
| `element.innerHTML`                     | `{variable}` in JSX                            |
| `element.addEventListener('click', fn)` | `onClick={fn}`                                 |
| `element.classList.add('active')`       | `className={isActive ? 'active' : ''}`         |
| `arr.map(item => { ... appendChild }`   | `arr.map(item => <Component key={item.id} />)` |
| Manual re-render                        | React re-renders automatically                 |
