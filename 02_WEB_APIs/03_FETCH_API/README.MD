### Fetch structure

```js
// GET (default)
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(console.error);

// POST / PUT / DELETE
fetch(url, {
  method: 'POST', // or 'PUT', 'DELETE'
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key: 'value' }),
});
```

---

### Promise chain vs async/await

|                | Promise chain     | async/await              |
| -------------- | ----------------- | ------------------------ |
| Syntax         | `.then().catch()` | `try/catch` with `await` |
| Error handling | `.catch()`        | `try/catch`              |
| Readability    | Can get nested    | Reads like sync code     |
| Preferred?     | ✅ Fine           | ✅ Best practice         |

---

### HTTP Methods

| Method   | Action      | Has body? |
| -------- | ----------- | --------- |
| `GET`    | Read data   | ❌ No     |
| `POST`   | Create data | ✅ Yes    |
| `PUT`    | Update data | ✅ Yes    |
| `DELETE` | Delete data | ❌ No     |

---

### Useful APIs for practice

- **JSONPlaceholder** → `https://jsonplaceholder.typicode.com` — fake REST API, great for testing
- **PokeAPI** → `https://pokeapi.co/api/v2/pokemon/1` — Pokémon data
- **Fake Store API** → `https://fakestoreapi.com/products` — product data (we've used this!)
