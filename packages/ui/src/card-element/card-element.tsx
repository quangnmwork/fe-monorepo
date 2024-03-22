type CardElementProps = {
  children ?:React.ReactNode
}

export const CardElement = ({ children }: CardElementProps) => {
  return (
    <div>
      <h1>CardElement Component</h1>
      {children}
    </div>
  );
};
