import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en <GifItem />', () => {

    const title = 'My Title'
    const url = 'http://www.sebassolis.com/'

    test('Debe hacer match con el snapshot', () => {
        const container = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem title={title} url={url} />)
        screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
    })

    test('Debe mostrar el título del componente', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy()
    })

})