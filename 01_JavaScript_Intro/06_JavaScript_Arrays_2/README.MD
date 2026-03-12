| Method      | What it does                | Returns                | Mutates original? |
| ----------- | --------------------------- | ---------------------- | ----------------- |
| `push()`    | Adds to end                 | New length             | ✅ Yes            |
| `pop()`     | Removes from end            | Removed element        | ✅ Yes            |
| `shift()`   | Removes from start          | Removed element        | ✅ Yes            |
| `unshift()` | Adds to start               | New length             | ✅ Yes            |
| `reverse()` | Reverses order              | Modified array         | ✅ Yes            |
| `splice()`  | Insert / remove / replace   | Removed elements       | ✅ Yes            |
| `slice()`   | Extracts a portion          | New array              | ❌ No             |
| `concat()`  | Merges arrays               | New array              | ❌ No             |
| `join()`    | Converts to string          | String                 | ❌ No             |
| `forEach()` | Runs a function per element | `undefined`            | ❌ No             |
| `map()`     | Transforms each element     | New array              | ❌ No             |
| `filter()`  | Keeps matching elements     | New array              | ❌ No             |
| `find()`    | Finds first match           | Element or `undefined` | ❌ No             |
| `some()`    | Checks if any match         | `true` / `false`       | ❌ No             |
| `every()`   | Checks if all match         | `true` / `false`       | ❌ No             |
| `reduce()`  | Reduces to single value     | Any value              | ❌ No             |
