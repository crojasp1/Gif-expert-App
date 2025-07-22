import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components";


describe('Pruebas en <GifItem.jsx>', () => {
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';

  test('should match with snapshot', () => {
    
    const {container} = render(<GifItem 
      gifElement={{title:title, url:url}}
      />);

      expect( container ).toMatchSnapshot();
  });

  test('should show the alt and url set', () => {
    render(<GifItem gifElement={{title:title, url:url}} />);
    //screen.debug();
    //console.log(screen.getByRole('img').alt);
    
    expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByText('Dragon Ball')).toBeTruthy();

  });
  
})
