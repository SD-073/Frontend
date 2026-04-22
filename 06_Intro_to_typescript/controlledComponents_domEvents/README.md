### Controlled components

```tsx
// controlled input — inline
<input value={name} onChange={(e) => setName(e.target.value)} />;

// controlled input — extracted handler
const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  setName(e.target.value);
};

// controlled select
const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
  setCourse(e.target.value as Course);
};
```

---

### as const + derived type

```tsx
const options = ['A', 'B', 'C'] as const;
// as const → readonly ['A', 'B', 'C']  (not string[])

type Option = (typeof options)[number];
// → 'A' | 'B' | 'C'
```

---

### Event types

```tsx
// click
(event: MouseEvent<HTMLButtonElement>) => void
MouseEventHandler<HTMLButtonElement>

// input / select change
(event: ChangeEvent<HTMLInputElement>) => void
ChangeEventHandler<HTMLInputElement>

// form submit
(event: FormEvent<HTMLFormElement>) => void
FormEventHandler<HTMLFormElement>

// keyboard
(event: KeyboardEvent<HTMLInputElement>) => void
KeyboardEventHandler<HTMLInputElement>
```

---

### Hooks

```tsx
// useState
const [count, setCount] = useState(0); // inferred
const [user, setUser] = useState<User | null>(null); // explicit

// useRef — DOM element
const ref = useRef<HTMLInputElement>(null);
ref.current?.focus(); // ?. handles null safely

// useEffect — no typing needed, just type values inside
useEffect(() => {
  if (user) document.title = user.name;
}, [user]);
```
