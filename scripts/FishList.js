import { Fish } from "./Fish.js";
import {useFish} from "./FishData.js"

export const FishList = ()=> {
    // Get a reference to the `<article class="content">` element
    const fishes = useFish();

    const contentElement = document.querySelector(".fishList")
    
    let fishHTMLRepresentations = "";

    for(const theBestFish of fishes){
        fishHTMLRepresentations += Fish(theBestFish);
    }
    console.log("fishHTMLRepresentaions",fishHTMLRepresentations)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTMLRepresentations;
}