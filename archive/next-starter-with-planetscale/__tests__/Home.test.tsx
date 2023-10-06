import { render, screen } from "@testing-library/react";
import Home from "@/pages";

it('should have the Docs text', () => {

    //Arranging items to unit test
    render(<Home />)

    //Action to take to grab the item we want to find in our test
    const docsElement = screen.getByText('Docs')

    // Asserting that our testing item is there
    expect(docsElement).toBeInTheDocument()
}); 