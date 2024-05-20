// https://nextjs.org/docs/app/building-your-application/testing/jest
import { render, screen } from "@testing-library/react";
import { Heading } from "@/components/heading";

describe("heading", () => {
  it("should render the text 'Dashboard'", () => {
    render(
      <Heading text="Dashboard" hasAside={false}>
        <></>
      </Heading>
    );

    const heading = screen.getByText("Dashboard");

    expect(heading).toBeInTheDocument();
  });
});
