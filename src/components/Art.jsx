import styles from "./Art.module.css";

import art0 from "../assets/art/art_0.png";
import art1 from "../assets/art/art_1.png";
import art2 from "../assets/art/art_2.jpg";

export default function Art() {
    return  <div class={styles.container}>
        <img src={art0} alt="art0"/>
        <img src={art1} alt="art1"/>
        <img src={art2} alt="art2"/>
    </div>
}