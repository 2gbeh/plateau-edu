import { Button } from "@/components/shadcn/ui/button";

export const ButtonVariants = () => {
  return (
    <section className="gap-4 capitalize">
      <Button>none</Button>

      <Button variant="default">default</Button>

      <Button variant="destructive">destructive</Button>

      <Button variant="ghost">ghost</Button>

      <Button variant="link">link</Button>

      <Button variant="outline">outline</Button>

      <Button variant="secondary">secondary</Button>
    </section>
  );
};
