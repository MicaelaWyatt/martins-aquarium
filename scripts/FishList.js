import { Fish } from "./Fish.js";
import {useFish, getMostHolyFish, getSoldierFish, getUnworthy} from "./FishData.js"
// getMostHolyFish, getUnworthy, getSoldierFish
export const FishList = ()=> {
    // Get a reference to the `<article class="content">` element
    const holyFish = getMostHolyFish();
    const soldierFish = getSoldierFish();
    const unworthyFish = getUnworthy();
    // const fishes = useFish();
    // const fishes = getMostHolyFish();
    // const fishes = getSoldierFish();
    // const fishes = getUnworthy();
const fishes = holyFish.concat(soldierFish,unworthyFish);
    // I cant figure this one out
    // const allFishes = holyFishArray.concat(soldierFishArray, unWorthyFishArray)

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


// const addFishToDom = () =>{
    // const contentElement = document.querySelector(".fishList")
    
    // let fishHTMLRepresentations = "";

    // for(const theBestFish of fishes){
        // fishHTMLRepresentations += Fish(theBestFish);
    // }
    // console.log("fishHTMLRepresentaions",fishHTMLRepresentations)
    // Add to the existing HTML in the content element
    // contentElement.innerHTML += fishHTMLRepresentations;

// }