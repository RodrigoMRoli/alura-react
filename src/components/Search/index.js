import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { books } from './searchData'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 370px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])

    return (
        <SearchContainer>
            <Title>Já sabe por onde vai começar?</Title>
            <SubTitle>Encontre seu livro na nossa estante</SubTitle>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const text = event.target.value
                    const resultSearch = books.filter( book => book.name.includes(text) )
                    setSearchedBooks(resultSearch)
                }}
            />
            { searchedBooks.map( book => (
                <Resultado>
                    <p>{book.name}</p>
                    <img src = {book.src} />
                </Resultado>
            ) ) }
        </SearchContainer>
    )
}

export default Search