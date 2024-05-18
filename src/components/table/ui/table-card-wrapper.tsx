import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";

interface IProps {
  children: React.ReactNode;
  h1?: string;
  p?: string;
  thead?: string[];
  tfoot?: React.ReactNode;
}

export const TableCardWrapper = ({ children, h1, p, thead, tfoot }: IProps) => {
  return (
    <>
      <CardHeader>
        {h1 && <CardTitle>{h1}</CardTitle>}
        {p && <CardDescription>{p}</CardDescription>}
      </CardHeader>

      {/* BODY */}
      <CardContent>
        <Table>
          {thead && (
            <TableHeader>
              <TableRow>
                {thead.map((e, i) => {
                  let [text, isScreenReader, isRequired] = [
                    e,
                    e.startsWith("#"),
                    e.endsWith("*"),
                  ];
                  text = isScreenReader ? text.slice(1) : text;
                  text = isRequired ? text.slice(0, -1) : text;
                  //
                  return (
                    <TableHead
                      key={i}
                      className={
                        isRequired ? "table-cell" : "hidden sm:table-cell"
                      }
                    >
                      {isScreenReader ? (
                        <span className="sr-only">{text}</span>
                      ) : (
                        text
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
          )}
          <TableBody>{children}</TableBody>
        </Table>
      </CardContent>

      {/* FOOTER */}
      {tfoot && (
        <CardFooter>
          <div className="text-xs text-muted-foreground">{tfoot}</div>
        </CardFooter>
      )}
    </>
  );
};
