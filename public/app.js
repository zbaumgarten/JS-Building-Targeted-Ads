// get user's data                                                            
// Get the user's coordinates:                                                              
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

console.log(getCoords());                            

// Get the user's time:                                                              
function userTime(){
    const now = new Date()
    return now.getHours()
}
console.log(userTime())    

function getMealTime(){
    const tod = userTime()
    return tod > 20 ? 'latenight snack' : tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}                        


// helper functions
// check time of day


// build ads
// build ad 1
function buildAd1(){
    const mealTime = getMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}


// build ad 2                                                         
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}


// event listeners
// On load, build ads:                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}
