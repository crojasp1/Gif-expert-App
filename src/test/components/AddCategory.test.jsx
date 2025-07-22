import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components"

describe('Test in <AddCategory />', () => {

  test('should change input value', () => {
    render( <AddCategory onNewCategory={() => {}}/> );

    const input = screen.getByRole('textbox');

    fireEvent.input( input, {target:{value:'Saitama'}});

    //screen.debug();

    expect(input.value).toBe('Saitama');
    
  });

  test('should call onCategory if input get a value', () => {

    const inputValue = 'Saitama';
    const onNewCategory = vi.fn();
    
    render( <AddCategory onNewCategory={onNewCategory}/> );
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value: inputValue}});
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

  });

  test('Shouldnt call onNewCategory if empty input', () => {
    
    const onNewCategory = vi.fn();

    render( <AddCategory onNewCategory={onNewCategory}/> );

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    //expect(onNewCategory).not.toHaveBeenCalled();
    

  })
  
  
})


