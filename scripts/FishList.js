import { Fish } from "./scripts/Fish.js";
import {useFish, getMostHolyFish, getUnworthy, getSoldierFish} from "./scripts/FishData.js"

export const FishList = ()=> {
    // Get a reference to the `<article class="content">` element
    const fishes = useFish();
    // const holyFish = getMostHolyFish();
    // const soldierFish = getSoldierFish();
    // const unWorthyFish = getUnworthy();

    // const allFishes = holyFish.concat(soldierFish, unWorthyFish)

// useFish will return the whole list of fish
    const contentElement = document.querySelector(".fishList")
    
    let fishHTMLRepresentations = "";

    for(const theBestFish of fishes){
        fishHTMLRepresentations += Fish(theBestFish);
    }
    console.log("fishHTMLRepresentaions",fishHTMLRepresentations)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTMLRepresentations;
}


const addFishToDom = () =>{
    const contentElement = document.querySelector(".fishList")
    
    let fishHTMLRepresentations = "";

    for(const theBestFish of fishes){
        fishHTMLRepresentations += Fish(theBestFish);
    }
    console.log("fishHTMLRepresentaions",fishHTMLRepresentations)
    // Add to the existing HTML in the content element
    contentElement.innerHTML += fishHTMLRepresentations;

}