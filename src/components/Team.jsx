import styles from "./Team.module.css";

import clement from "../assets/team/clement.jpg";
import eva from "../assets/team/eva.jpg";
import esmeralda from "../assets/team/esmeralda.jpg";
import brian from "../assets/team/brian.jpg";
import roel from "../assets/team/roel.jpg";
import parwesh from "../assets/team/parwesh.jpg";
import changhao from "../assets/team/changhao.jpg";
import ayrton from "../assets/team/ayrton.jpg";
import joey from "../assets/team/joey.jpg";

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
            image: roel,
            role: "Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/ro%C3%ABl-francees-0bb419186/") }} /></button>
            </>
        },
        {
            name: "Esmeralda",
            image: esmeralda,
            role: "Lead Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/esmeraldagasanz/") }} /></button>
            </>
        },
        {
            name: "Joey",
            image: joey,
            role: "Producer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/joey-visbeen-662b69236/") }} /></button>
                <button><img src={github} onClick={() => { window.open("https://github.com/JoeyVisbeen") }} /></button>
            </>
        },
        {
            name: "Brian",
            image: brian,
            role: "Artist / Developer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/brian-bel-797148154/") }} /></button>
            </>
        },
        {
            name: "Parwesh",
            image: parwesh,
            role: "Level Designer",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/parweshsoekhoe-463ab19a/") }} /></button>
            </>
        },
        {
            name: "Changhao",
            image: changhao,
            role: "Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/changhao-li-955a95212/") }} /></button>
            </>
        },
        {
            name: "Eva",
            image: eva,
            role: "Artist",
            buttons: <>
                <button><img src={linkedIn} onClick={() => { window.open("https://www.linkedin.com/in/evavanderkroft/") }} /></button>
            </>
        },
        {
            name: "Ayrton",
            image: ayrton,
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