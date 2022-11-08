import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const estilosDaHomePage = {
        //backgroundColor: "red"
    };

    // console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists}>
                    Conteúdo
                </Timeline>
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width:80px;
        height: 80px;
        border-radius: 50px;
        border: 1px solid white;
    }
    .user-info {
        margin-top: 55px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;

    }
`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner" /> */}

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {
    // console.log("Dentro do componente", props.playlists)
    const playlistNames = Object.keys(props.playlists)
    // For é uma estrutura de Statement (é uma estrutura que tem abertura e fechamento)
    // O REACT prefere o que tem Retorno por expressão (o proprio "playlists "tem que dizer o que retorna pra ir pra tela)
    return (
        <StyledTimeline>
            {playlistNames.map(function (playlistName) {
                const videos = props.playlists[playlistName]
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}