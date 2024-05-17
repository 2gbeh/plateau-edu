interface IProps extends React.InputHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const FormFieldset = ({ children, ...rest }: IProps) => {
  return (
    <form {...rest}>
      <fieldset disabled={false} className="flex flex-col gap-4">
        {children}
      </fieldset>
    </form>
  );
};
