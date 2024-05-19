interface IProps {
  children: React.ReactNode;
}

export const FormGroup = ({ children }: IProps) => {
  return <div className="flex flex-col flex-grow">{children}</div>;
};
