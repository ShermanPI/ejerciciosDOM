import hamburgerMenu from "./dom/01_menu_hamburguesa.js";
import {setClock, alarm} from "./dom/02_reloj_digital.js";
import {getThePressedKey, setBolita, setShorcutAlert, setShorcutConfirm, setShorcutPrompt} from "./dom/03_eventos_del_teclado.js";
import {setCountdown} from "./dom/04_countdown.js";
import {scrollButton} from "./dom/05_scroll_button.js";
import {setLightMode} from "./dom/06_light_mode.js";
import { setMedia } from "./dom/07_responsive_with_js.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    
    // llamadas del ejecicio 1
    hamburgerMenu("#burguer-menu", "nav")
    hamburgerMenu(".img-close", "nav")
    
    // llamadas del ejercicio 2
    setClock(".clock", ".startBtn", ".stopBtn")
    alarm(".playAlarmBtn", ".stopAlarmBtn")
    
    //llamadas del ejercicio 3
    getThePressedKey()
    setShorcutAlert("Has generado una alerta")
    setShorcutConfirm("quieres realizar esta accion")
    setShorcutPrompt("Escribe algun texto, te escucho")
    
    //llamadas ejercicio 4
    setBolita(".bolita-container", ".bolita")
    
    //llamadas del ejercicio 5
    let dateLimit = new Date(new Date().getFullYear()+1, new Date().getMonth(),new Date().getDate(), 10, 29)
    setCountdown(".countdown-container", dateLimit)
    // let dateLimit = new Date("Oct 23, 2022 22:37:25")
    // console.log(dateLimit)
    
    //llamadas ejercicio 6
    scrollButton(".top-button")

    //llamadas ejercicio 7
    setLightMode(".mode")

    //llamadas de l ejercicio 8
    setMedia(700, ...objArray)
})

var objArray = [
    {
    url: "https://www.youtube.com/watch?v=qU9mHegkTc4&ab_channel=ArcticMonkeys-Topic",

    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UlOyFgR-xA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',

    select: ".iframeYT",

    name: "Ver video"
    },
    {
        url: "https://goo.gl/maps/bjFodGaEQ4fGU9XUA",
    
        iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.4460577079453!2d-70.69168113309999!3d19.479435858367655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c5be08b867d9%3A0x235e79071ff0bdd!2sReparto%20Villalona%2C%20Santiago%20De%20Los%20Caballeros%2051000!5e0!3m2!1ses!2sdo!4v1666796240470!5m2!1ses!2sdo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    
        select: ".iframeGoogle",
    
        name: "Ver Mapa"
    }
]




//llamadas ejercicio 7 - en la solucion del jonathan del darkMode se llama fuera porque no se puede tener un eventListener del mismo tipo de donde se agrega otro. o sea, en estre caso no se puede añadir un listener de DOMContentLoad dentro de un handler de un DOMContentLoad

