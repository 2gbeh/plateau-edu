// https://nextjs.org/docs/app/building-your-application/testing/jest
import { render, screen } from "@testing-library/react";
import { mockFetch } from "./mocks/mockFetch";
import DashboardPage from "@/app/(web)/page";

describe("Page", () => {
  it("renders a heading", async () => {
    window.fetch = mockFetch();
    // const result = await postInput();
    // expect(result).toEqual(someJson);

    render(<DashboardPage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
