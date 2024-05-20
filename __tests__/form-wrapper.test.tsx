// https://nextjs.org/docs/app/building-your-application/testing/jest
import { render, screen } from "@testing-library/react";
import { FormWrapper } from "@/components/form/ui/form-wrapper";

describe("form-wrapper", () => {
  it("should render the save button", () => {
    render(
      <FormWrapper>
        <></>
      </FormWrapper>
    );

    const heading = screen.getByText("Save");

    expect(heading).toBeInTheDocument();
  });
});
