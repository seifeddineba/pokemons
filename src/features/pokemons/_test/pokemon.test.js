import { fireEvent, render } from "@testing-library/react";
import Pokemons from "../../pokemons";
test("testClickNextPage", () => {
  const component = render(<Pokemons />);
  const offset = 9;
  expect(offset).toHaveTextContent(9);
  fireEvent.click(component.getByText("next"));
  expect(offset).toHaveTextContent(18);
});
