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
            role: "Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/ro%C3%ABl-francees-0bb419186/") }} /></button>
            </>
        },
        {
            name: "Esmeralda",
            image: clement,
            role: "Lead Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/esmeraldagasanz/") }} /></button>
            </>
        },
        {
            name: "Joey",
            image: clement,
            role: "Producer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/joey-visbeen-662b69236/") }} /></button>
                <button><img src={github} onClick={() => { window.open("https://github.com/JoeyVisbeen") }} /></button>
            </>
        },
        {
            name: "Brian",
            image: clement,
            role: "Artist / Developer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/brian-bel-797148154/") }} /></button>
            </>
        },
        {
            name: "Parwesh",
            image: clement,
            role: "Level Designer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/parweshsoekhoe-463ab19a/") }} /></button>
            </>
        },
        {
            name: "Changhao",
            image: clement,
            role: "Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/changhao-li-955a95212/") }} /></button>
            </>
        },
        {
            name: "Eva",
            image: clement,
            role: "Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/evavanderkroft/") }} /></button>
            </>
        },
        {
            name: "Ayrton",
            image: clement,
            role: "Developer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/parweshsoekhoe-463ab19a/") }} /></button>
            </>
        }
    ]

    return <div div class={styles.team}>
        {team.map((member) => <Member {...member} />)}
    </div >
}