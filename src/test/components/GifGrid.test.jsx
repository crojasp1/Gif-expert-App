import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../components"
import useFetchGif from "../../hooks/useFetchGif";

vi.mock('../../hooks/useFetchGif', () => ({
  default: vi.fn()
}));

describe('Test in < GifGrid />', () => {

  const category = 'Dragon Ball';

  test('should show loading starting', () => {

    useFetchGif.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));

  });
  
  test('should show items when useFetchGifs images are charged', () => {
    //Simulamos que el useFetchGifs va a regresar cualquier valor que requiera con 'moks'
    const simulatedGifs = [{
      id: '123',
      title: 'Dragon Ball',
      url: 'https://localhost/dragon-ball.jpg',
    },{
      id: 'ABS',
      title: 'Naruto',
      url: 'https://localhost/naruto.jpg',
    }
  ]

    useFetchGif.mockReturnValue({
      gifs: simulatedGifs,
      isLoading: false,
    }) 
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);


  });

  
})

