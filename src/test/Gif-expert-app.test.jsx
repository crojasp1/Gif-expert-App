import { fireEvent, render, screen } from "@testing-library/react"
import GifExpertApp from "../gif-expert-app"


describe('Test in < Gif-expert-app />', () => {
  test('should not post new category with duplicated category ', () => {
    render(<GifExpertApp />)

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: 'One punch'}});
    fireEvent.submit(form);    

    expect(screen.getAllByText('One Punch').length).toBe(1);
  });
  
  test('should post the new diferent category', () => {
      render(<GifExpertApp />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, {target: {value: 'Dragon Ball'}});
      fireEvent.submit(form);

      expect(screen.getByText('Dragon Ball')).toBeTruthy();
      screen.debug();

  })
  
})
