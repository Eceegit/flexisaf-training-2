let cardButton1 = document.getElementById("card-1-btn");
let cardButton2 = document.getElementById("card-2-btn");
let cardButton3 = document.getElementById("card-3-btn");
let cardPara = document.querySelectorAll(".card-para")
console.log(cardPara)
let previousContent1 = cardPara[0].textContent
let previousContent2 = cardPara[1].textContent
let previousContent3 = cardPara[2].textContent
let moreContentOfSedan = "A sedan or saloon (British English) is a passenger car in a three-box configuration with separate compartments for an engine, passengers, and cargo. The first recorded use of sedan in reference to an automobile body occurred in 1912.[4] The name derives from the 17th-century litter known as a sedan chair, a one-person enclosed box with windows and carried by porters. Variations of the sedan style include the close-coupled sedan, club sedan, convertible sedan, fastback sedan, hardtop sedan, notchback sedan, and sedanet/sedanette."

let moreContentOfSuv = "SUV stands for 'Sports Utility Vehicle', a fairly loose term but one that generally refers to stylish, sleek looking vehicles that offer elegant city driving but also handle rugged terrain thanks to a typical 4x4 capability. SUVs can come in any size-small, midsize or large. A sport utility vehicle (SUV) is a car classification that combines elements of road-going passenger cars with features from off-road vehicles, such as raised ground clearance and four-wheel drive."

let moreContentOfLuxury = "A luxury car is a car that provides above-average to high-end levels of comfort, features, and equipment. Often more expensive materials and surface finishes are used, and buyers expect better build quality. The usually higher pricing and more upscale appearance is often associated with higher social status of the users, compared to low and mid-market segment cars. The term is relative and partially subjective, reflecting both objective qualities of a car, as well as the projected and perceived image of the car marque. Luxury brands rank above premium brands, though there is no clear demarcation between the two"

cardButton1.addEventListener('click', function(){
    if(cardPara[0].textContent !== moreContentOfSedan){
        cardPara[0].textContent = moreContentOfSedan 
    }else{
        cardPara[0].textContent = previousContent1
    }

})

cardButton2.addEventListener('click', function(){
    if(cardPara[1].textContent !== moreContentOfSuv){
        cardPara[1].textContent = moreContentOfSuv 
    }else{
        cardPara[1].textContent = previousContent2
    }

})

cardButton3.addEventListener('click', function(){
    if(cardPara[2].textContent !== moreContentOfLuxury){
        cardPara[2].textContent = moreContentOfLuxury
    }else{
        cardPara[2].textContent = previousContent3
    }
})
