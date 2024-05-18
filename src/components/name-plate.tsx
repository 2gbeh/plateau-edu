interface IProps {
  h1: string;
  p: string;
}
export const NamePlate = ({
  h1 = "/avatars/01.png",
  p = "Not Available",
}: IProps) => {
  return (
    <div className="grid gap-1">
      <p className="text-sm font-medium leading-none">{h1}</p>
      <p className="text-sm text-muted-foreground">{p}</p>
    </div>
  );
};
