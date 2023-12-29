import { render, screen } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it show 2 input and a button", () => {
  // NOTE: 1) Render the Component
  render(<UserForm />);

  // NOTE: 2) Manipulate the component or Find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");




  // NOTE: 3) Assertion make sure the component id doing what we expect to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
