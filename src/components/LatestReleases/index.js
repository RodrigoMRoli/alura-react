import { books } from './dataLatestReleases'
import { Title } from '../Title'
import bookImg from '../../img/livro2.png'
import RecomendationCard from '../RecomendationCard'
import styled from 'styled-components'

const LatestReleasesContainer = styled.section`
    backgroud-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display:flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title 
                cor="#EB9B00"
                tamanhoFonte="36px"
                alinhamento="center"
            >
                LATEST RELEASES
            </Title>
            <NewBooksContainer>
                { books.map( book => (
                    <img src = {book.src} />
                )) }
            </NewBooksContainer>
            <RecomendationCard 
                title = "Talvez você se interesse por..."
                subtitle = "Angular 11"
                description = "Construindo uma aplicação com a plataforma Google."
                img={bookImg}
            />
            <RecomendationCard 
                title = "Talvez você se interesse por..."
                subtitle = "Javascript"
                description = "Construindo uma aplicação com Javascript."
                img={bookImg}
            />
        </LatestReleasesContainer>
    )
}

export default LatestReleases