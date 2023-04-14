import styles from "./Team.module.css";

import clement from "../assets/team/clement.png";

import linkedIn from "../assets/icons/linkedin.svg"
import github from "../assets/icons/github.svg"
import website from "../assets/icons/arrow-up-right.svg"

function Member({ name, role, buttons, image }) {
    return <div class={styles.teamMember}>
        <img src={image} alt={name} />
        <div class={styles.info}>
            <h3>{name}</h3>
            <p>{role}</p>
            {buttons}
        </div>
    </div>
}

export default function Team() {
    const team = [
        {
            name: "Clement",
            role: "Lead Developer",
            image: clement,
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/cl%C3%A9ment-saunier-211453156/") }} /></button>
                <button><img src={github} onClick={() => { window.open("https://github.com/clement4saunier") }} /></button>
                <button><img src={website} onClick={() => { window.open("https://www.sheykei.xyz") }} /></button>
            </>
        },
        {
            name: "Roel",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Esmeralda",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Joey",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Brian",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Parwesh",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Changhao",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Eva",
            image: clement,
            role: "Lead Developer"
        },
        {
            name: "Ayrton",
            image: clement,
            role: "Lead Developer"
        }
    ]

    return <div div class={styles.team}>
        {team.map((member) => <Member {...member} />)}
    </div >
}