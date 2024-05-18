interface IProps extends React.InputHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const FormFieldset = ({ children, ...props }: IProps) => {
  return (
    <form {...props}>
      <fieldset disabled={false} className="flex flex-col gap-4">
        {children}
      </fieldset>
    </form>
  );
};
