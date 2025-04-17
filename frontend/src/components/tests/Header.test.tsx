import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "../Header";

describe("Header", () => {
    test("should render", () => {
        render(<Header/>);
        const linkElement = screen.getByText(/Fruit-Basket/i);
        expect(linkElement).toBeInTheDocument();
    });
});


