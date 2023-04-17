import styles from "./Art.module.css";

import art0 from "../assets/art/art_0.png";
import art1 from "../assets/art/art_1.png";
import art2 from "../assets/art/art_2.jpg";
import art3 from "../assets/art/art_3.png";
import art4 from "../assets/art/art_4.png";
import art5 from "../assets/art/art_5.png";
import art6 from "../assets/art/art_6.png";
import art7 from "../assets/art/art_7.png";
import art8 from "../assets/art/art_8.png";
import art9 from "../assets/art/art_9.png";
import art10 from "../assets/art/art_10.png";
import art11 from "../assets/art/art_11.png";
import art12 from "../assets/art/art_12.png";
import art13 from "../assets/art/art_13.png";

export default function Art() {
    return  <div class={styles.container}>
        <img src={art0} alt="art0"/>
        <img src={art10} alt="art10"/>
        <img src={art3} alt="art3"/>

        <img src={art6} alt="art6"/>
        <img src={art9} alt="art9"/>
        <img src={art1} alt="art1"/>

        <img src={art2} alt="art2"/>
        <img src={art4} alt="art4"/>

        <img src={art7} alt="art7"/>
        <img src={art8} alt="art8"/>
        <img src={art11} alt="art11"/>

        <img src={art5} alt="art5"/>
        <img src={art12} alt="art12"/>
        <img src={art13} alt="art13"/>
    </div>
}