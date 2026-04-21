export type GreetingProps = {
  name: string;
};

export type ButtonProps = {
  label: string;
  color?: string;
};

export type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export type StudentType = {
  name: string;
  age: number;
  city?: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
};
