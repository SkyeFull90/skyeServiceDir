import {render, screen} from '@testing-library/react'
import Home from "../pages";

it('should have Shop from the hottest items in the world', () => {
    render(<Home />)

    const mainParagraph = screen.getByText('🔥 Shop from the hottest items in the world 🔥')

    expect(mainParagraph).toBeInTheDocument()
});