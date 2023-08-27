import { toggleMenu } from "./toggleMenu"

export let menuOpen = false

export const mobilemenuButton = document.querySelector(".mobilemenubtn")

mobilemenuButton.addEventListener("click", toggleMenu)
