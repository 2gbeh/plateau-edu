import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

interface IProps {
  children?: React.ReactNode;
  label: string;
  value: string;
  summary?: string;
}
export const StatCard = ({ children, label, value, summary }: IProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        {children}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {summary && <p className="text-xs text-muted-foreground">{summary}</p>}
      </CardContent>
    </Card>
  );
};
