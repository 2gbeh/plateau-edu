interface IProps {
  children: React.ReactNode;
}

export const FormInputGroup = ({ children }: IProps) => {
  return <div className="flex-center-between gap-4 flex-wrap">{children}</div>;
};
