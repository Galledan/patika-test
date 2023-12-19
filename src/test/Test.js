import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import emojiList from "../emojiList.json";
import App from "../App";


describe("Emoji Test",() =>{
   
    beforeEach(() => {
        render(<App></App>)
        
    });


    //Header test
    test('Header Rendered Successfully ', () => { 
        const header = screen.getByText(/Emoji Search/i);
        expect(header).toBeInTheDocument();
     });

     //Emoji list test
    test("Emoji List Rendered Successfully", ()=>{
        const eList = emojiList.slice(0, 20);
        eList.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    });

     // Emoji filter test
     test("Emoji Filter Works Successfully", ()=>{
        const emoji = "Joy";
        const input = screen.getByTitle("input");
        fireEvent.change(input, {target: {value: emoji}});
        expect(screen.getByText(emoji)).toBeInTheDocument

     });

     // Emoji copy test
     test("Emoji Copying is Working Successfully", () => {
        let list = screen.getByText(/grimacing/i);
        let text = "Grimacing";
        userEvent.click(list);
        
        expect(list).toHaveTextContent(text);
})
})