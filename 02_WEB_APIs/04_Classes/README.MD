### `this` cheat sheet

| Context                       | `this`                     |
| ----------------------------- | -------------------------- |
| Global                        | `window`                   |
| Regular function (standalone) | `undefined` / `window`     |
| Object method                 | The object                 |
| Arrow function                | Inherited from outer scope |
| `new`                         | The new object             |

---

### OOP Pillars

| Pillar            | What it means                                  |
| ----------------- | ---------------------------------------------- |
| **Encapsulation** | Bundle data + methods, control access with `#` |
| **Abstraction**   | Hide complexity, expose only what's needed     |
| **Inheritance**   | `extends` — child class gets parent's features |
| **Polymorphism**  | Same method name, different behavior per class |

---

### Prototype chain

```
custom object → ClassName.prototype → Object.prototype → null
array         → Array.prototype     → Object.prototype → null
```

> Every method you call on an object is looked up through this chain until it's found — or `undefined` is returned.
