// console.log('%c HI', 'color: firebrick')

// const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
// const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
// const breedsList = document.querySelector("#dog-breeds")
// const breedDropDown = document.querySelector("#breed-dropdown")

// function fetchImages(){
//     const dogImages = document.querySelector("#dog-image-container")
    
//     fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(images => {
//         const imgs = images["message"].map((image) => {
//            return `<img src="${image}">`
//         })
     
//         imgs.forEach((img) => {
//             dogImages.innerHTML += img })
//     }) 
// }

// function fetchBreeds(){
//     fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(breeds => {
//         const dogBreeds = Object.keys(breeds["message"]).map((breed) => {
//             return `${breed}`
//         })

//         dogBreeds.forEach((dogBreed) => {
//             breedsList.innerHTML += `<li>${dogBreed}</li>`
//         })
//     })
// }

// function handleClick(e){
//     e.target.style.color = "blue"
// }


// document.addEventListener('DOMContentLoaded', fetchImages())
// document.addEventListener('DOMContentLoaded', fetchBreeds())
// breedsList.addEventListener('click', handleClick)
// breedDropDown.addEventListener('change', handleChange)

// function handleChange(e){
//     filterDogBreeds(e.target.value)
// }

// function filterDogBreeds(letter){
//     debugger
// }

const dogImages = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const breedsList = document.querySelector("#dog-breeds")
const breedDropDown = document.querySelector("#breed-dropdown")
let dogBreeds;

document.addEventListener('DOMContentLoaded', fetchImages())
document.addEventListener('DOMContentLoaded', fetchBreeds())
breedsList.addEventListener('click', handleClick)
breedDropDown.addEventListener('change', handleChange)


function fetchImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const imgs = images["message"]
        const imgsArray = createImgElement(imgs)
        renderImgs(imgsArray)
    })
}

function createImgElement(imgs){
    return imgs.map((image) => {
        return `<img src="${image}">`
    })
}

function renderImgs(imgsArray){
    imgsArray.forEach(element => {
        renderElement(element)
    })
}

function renderElement(element){
    dogImages.innerHTML += element
}


function fetchBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        dogBreeds = Object.keys(breeds["message"])
        breedsLis = createLiElement(dogBreeds)
        renderLis(breedsLis)
})
}

function createLiElement(dogBreeds){
    return dogBreeds.map((breed) => {
        return `<li>${breed}</li>`
    })
}

function renderLis(breedsLis){
    breedsLis.forEach((breed) => {
        renderLi(breed)
    })
}

function renderLi(breed){
    breedsList.innerHTML += breed
}

function handleClick(e){
    if (e.target.style.color === "blue"){
    e.target.style.color = "black"
    } else {e.target.style.color = "blue"} 
}

function handleChange(e){
    const letter = e.target.value
    const filteredBreeds = dogBreeds.filter(breed => breed.startsWith(letter))
    const filteredBreedsLis = createLiElement(filteredBreeds)
    breedsList.innerHTML = ''
    renderLis(filteredBreedsLis)
}