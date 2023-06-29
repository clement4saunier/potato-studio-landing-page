import Page from "./layout/Page";
import logo from "../assets/logo.png";
import potato from "../assets/potato.png";
import styles from "./Home.module.css";
import Divider from "./layout/Divider";
import Team from "./Team";

import instagram from "../assets/icons/instagram.svg"
import mail from "../assets/icons/mail.svg"
import play from "../assets/icons/play.svg"
import upupandaway from "../assets/upupandaway.png"
import group from "../assets/team/group.jpg"
import Art from "./Art";
import gameplay1 from "../assets/gameplay/gameplay_1.png";
import gameplay2 from "../assets/gameplay/gameplay_2.png";
import gameplay3 from "../assets/gameplay/gameplay_3.png";


export default function Home() {
    const instagramLink = "https://www.instagram.com/potatostudiosgames/";

    return (
        <Page
            header={
                <header>
                    <h2 style={{ margin: "0", display: "flex", gap: "var(--space-m)" }}>
                        <img src={potato} alt="potatina" />
                    </h2>
                    <nav class={styles.nav}>
                        <a href="#game">Up, Up & Away!</a>
                        <a href="#team">About us</a>
                        <a href="#art">Art</a>
                        <a href="#contact">Contact</a>
                    </nav>
                </header>
            }>
            <div class={styles.title}>
                <img src={logo} alt="potato studio logo" />
                <h1>Potato Studio</h1>
                <p>
                    Games to remember
                </p>
            </div>
            <h1 id="team">About us</h1>
            <p>
                We are an international team of students. Each of us started the minor “Game development and simulation” at The Hague University of Applied Sciences.
                During this minor we started working on: “Up, Up, & Away!" A project that we aim to keep working on after the minor is ended. We are passionate about
                game development and work with a professional attitude. Our team consists of nine members.
            </p>
            <br />
            <Team />
            {/* <button onClick={() => { window.open(instagramLink) }}>
                <img src={instagram} alt="instagram" />
                Join us on instagram</button> */}
            <br />
            <h1 id="game">Game</h1>
            <h2>Up, Up & Away!</h2>
            <p>
                It will be a racing game in the sky. Players will compete with each other, using various items to gain an advantage and achieve
                high speeds. The race will have the player constantly engage with trying to win. By balancing the different items such that the
                last player is capable to catch up and even still win in the last round, the game forces the players to be focusing fully for the
                entire race. The game will grant you choices during the race, an item or a boost, left or right and many more. Because you will be
                headed at these choices with high speed, the player will only get a small window to make the decision. By racing as fast as
                possible and making the right decisions throughout the game, the player will be able to win the race. The primary focus of the
                game will be on social competition, with players racing against friends and family members. The key objective is to encourage
                engagement, with the game serving as a means for people to come together and spend time with one another.

            </p>
            <div class="card">
                <iframe style={{ "aspect-ratio": "16 / 9", width: "calc(100%)" }} src="https://www.youtube.com/embed/_XJFnvV2_oY" frameborder="0" allowfullscreen="true"></iframe>
            </div>
            <br />
            <div class="multipleCards">
                <div class="card">
                    <img src={gameplay1} alt="gameplay1" />
                </div>
                <div class="card">
                    <img src={gameplay2} alt="gameplay2" />
                </div>
                <div class="card">
                    <img src={gameplay3} alt="gameplay3" />
                </div>
            </div>
            <br/>
            <div class={styles.play}>
                <p>Play Up, Up & Away !</p>  
                <button class={styles.playButton}> Play Game </button>
            </div>
            {/* <img class="card" src={upupandaway} alt="potato studio logo" /> */}
            <h1 id="art">Art</h1>
            <Art />
            <h1 id="contact">Contact</h1>
            <p>
                You can reach us through email or Instagram !
            </p>
            <div class={styles.links}>
                <div>
                    <img src={mail} alt="mail" />
                    20214081@student.hhs.nl
                </div>
                <div>
                    <img src={instagram} alt="instagram" />
                    @potatostudiosgames
                </div>
            </div>
            <br />
        </Page>
    )
}