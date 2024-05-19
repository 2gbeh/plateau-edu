interface IProps {
  children: React.ReactNode;
}

export const FormGrid = ({ children }: IProps) => {
  return <div className="flex-between gap-4 flex-wrap">{children}</div>;
};
