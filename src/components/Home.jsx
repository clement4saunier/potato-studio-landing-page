import Page from "./layout/Page";
import logo from "../assets/logo.png";
import potato from "../assets/potato.png";
import styles from "./Home.module.css";
import Divider from "./layout/Divider";
import Team from "./Team";

import instagram from "../assets/icons/instagram.svg"
import Art from "./Art";


export default function Home() {
    const instagramLink = "https://www.instagram.com/potatostudiosgames/";

    return (
        <Page
            header={
                <header>
                    <h3 style={{ margin: "0", display: "flex", gap: "var(--space-m)" }}>
                        <img src={potato} alt="potatina" />
                        Potato Studio
                    </h3>
                    <nav class={styles.nav}>
                        <a href="#game">Up, Up & Away!</a>
                        <a href="#team">About us</a>
                        <a href="#art">Art</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </header>
            }>
            <img src={logo} alt="potato studio logo" />
            <Divider />
            <h1>Our mission</h1>
            <p>
                Potato studios aims to create games that promote social interactions, happiness, and enjoyment. We strive to deliver an experience that has been created with a main focus on uniqueness and quality.
            </p>
            <button onClick={() => { window.open(instagramLink) }}>
                <img src={instagram} alt="instagram" />
                Join us on instagram</button>
            <Divider />
            <h1 id="game">Up, Up & Away !</h1>
            <p>
                In a post-apocalyptic world, the happy, cartoonish characters race in hot air balloons, using everything they can to win and get all the fame, fortune, and land.
            </p>
            <img src={logo} alt="potato studio logo" />
            <h2>Our vision</h2>
            <p>

            </p>
            <Divider />
            <img src={logo} alt="potato studio logo" />
            <h1 id="team">About us</h1>
            <p>
                We are an international team of students. Each of us started the minor
                “Game development and simulation” at The Hague University of Applied Sciences.
                During this minor we started working on: “Up, Up, & Away!”. A project that we aim to
                keep working on after the minor is ended. We are passionate about game development
                and work with a professional attitude. Our team consists of nine members.
            </p>
            <Team />
            <Divider />
            <h1 id="art">Art</h1>
            <Art />
            <Divider />
            <p id="contact">
                You can contact us via ???
            </p>
        </Page>
    )
}