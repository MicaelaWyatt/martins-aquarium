import { Fish } from "./Fish.js";
import {useFish} from "./FishData.js"

export const FishList = ()=> {
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish();
    let fishHTMLRepresentations = "";
    for(const fish of fishes){
        finishHTMLRepresentaion += Fish(fish);
    }
    console.log("finishhtml",finishHTMLRepresentations)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTMLRepresentaions;`
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}