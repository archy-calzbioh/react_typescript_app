interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}
export const Child = ({color, onClick, children}: ChildProps) => {
  return <div>
    {color}
    {children}
    <button onClick={onClick}>Click me</button>
  </div>;

}

export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
  return <div>Hi there!</div>;
};

