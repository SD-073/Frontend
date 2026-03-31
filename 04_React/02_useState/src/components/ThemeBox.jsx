const ThemeBox = ({ theme }) => {
  return (
    <div
      style={{
        background: theme === 'dark' ? '#333' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
        padding: '1rem',
      }}
    >
      <p>Current theme: {theme}</p>
    </div>
  );
};

export default ThemeBox;
