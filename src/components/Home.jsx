import Page from "./layout/Page";
import logo from "../assets/logo.png";

export default function Home() {
    const instagramLink = "https://www.instagram.com/potatostudiosgames/";

    return (
        <Page>
            <header>
                <img src={logo} alt="potato studio logo" />
            </header>
            <h1>Potato Studio</h1>
            <p>
             🚧 We are building a balloon racing game 🚧
            </p>
            <button onClick={() => {window.open(instagramLink)}}>Join us on instagram</button>
        </Page>
    )
}