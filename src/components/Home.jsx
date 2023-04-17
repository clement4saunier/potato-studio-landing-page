import Page from "./layout/Page";
import logo from "../assets/logo.png";
import potato from "../assets/potato.png";
import styles from "./Home.module.css";
import Divider from "./layout/Divider";
import Team from "./Team";

import instagram from "../assets/icons/instagram.svg"
import upupandaway from "../assets/upupandaway.png"
import group from "../assets/team/group.jpg"
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
            <img src={upupandaway} alt="potato studio logo" />
            <h2>Our vision</h2>

            <p>
                It will be a racing game in the sky. Players will compete with each other, using various items to gain an advantage and achieve high speeds. The race will have the player constantly engage with trying to win. By balancing the different items such that the last player is capable to catch up and even still win in the last round, the game forces the players to be focussing fully for the entire race. The game will grant you choices during the race, an item or a boost, left or right and many more. Because you will be headed at these choices with high speed, the player will only get a small window to make the decision. By racing as fast as possible and making the right decisions throughout the game, the player will be able to win the race.  The primary focus of the game will be on social competition, with players racing against friends and family members. The key objective is to encourage engagement, with the game serving as a means for people to come together and spend time with one anothe

            </p>
            <Divider />
            <img src={group} alt="potato studio group" />
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
                You can contact us via 20214081@student.hhs.nl
            </p>
        </Page>
    )
}