import dogs from "./data.js"


class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogProfile() {
        const {name, avatar, age, bio } = this;
        return `
            <img class="profile-pic" src="${avatar}">
            <div id="status">
            </div>
            <div class="text-details">
                <p class="bold">${name}, ${age}</p>
                <p>${bio}</p>
            </div>
            `
    }

    likedProfile(){
        document.getElementById('status').innerHTML = '<img src="./images/badge-like.png" alt="liked">'
        document.getElementById('like-button').style.background = "#DBFFF4"
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
        
        nextDog()
    }
    
    nopedProfile(){
        console.log('nope')
        document.getElementById('status').innerHTML = '<img src="./images/badge-nope.png" alt="nope">'
        document.getElementById('nope-button').style.background = "#FFE7EF"
        this.hasBeenSwiped = true

        nextDog() 
    }

}

let dogIndex = 0
let currentDog = new Dog(dogs[dogIndex])



function nextDog() {
    dogIndex = dogIndex + 1
    if (dogIndex > 2) {
        dogIndex = 0 
    }
    return currentDog = new Dog(dogs[dogIndex])
 }


export { Dog, currentDog } 