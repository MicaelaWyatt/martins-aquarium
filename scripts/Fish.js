export const Fish = (fish) =>{
    return `
    <section class="fish card">
    <div><img class="fish__imgage--card" src="${fish.image}"/></div>
    <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__inches">${fish.inches}</div>
            <div class="fish__harvestlocation">${fish.harvestLocation}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
}