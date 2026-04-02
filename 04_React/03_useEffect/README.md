### useEffect

## Syntax

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // side effect here

  return () => {
    // cleanup here (optional)
  };
}, [dependencies]);
```

---

## Dependency array

```jsx
useEffect(() => { ... });          // every render
useEffect(() => { ... }, []);      // mount only
useEffect(() => { ... }, [value]); // mount + when value changes
```

---

## Lifecycle mapping

| Class component        | useEffect equivalent                    |
| ---------------------- | --------------------------------------- |
| `componentDidMount`    | `useEffect(() => { ... }, [])`          |
| `componentDidUpdate`   | `useEffect(() => { ... }, [dep])`       |
| `componentWillUnmount` | `return () => { ... }` inside useEffect |

---

## Fetch pattern

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('url');
      if (!res.ok) throw new Error('error');
      const data = await res.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // always runs
    }
  };

  fetchData();
}, []); // or [dependency] to re-fetch when it changes
```
