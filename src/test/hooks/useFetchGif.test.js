import { renderHook, waitFor } from "@testing-library/react"
import useFetchGif from "../../hooks/useFetchGif"

describe('Test in < useFetchGifs />  hook', () => {
  test('should return initial state', () => {
    
    const{result} = renderHook( () => useFetchGif('DragonBall'));
    const{gifs, isLoading} = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return image arrange and isLoading in true', async() => {
     const{result} = renderHook( () => useFetchGif('DragonBall'));

     await waitFor(
      () => expect(result.current.gifs.length).toBeGreaterThan(0));
      
      const{gifs, isLoading} = result.current;
    
      expect(gifs.length).toBeGreaterThan(0);
      expect(isLoading).toBeFalsy();
  });
  
  
});


