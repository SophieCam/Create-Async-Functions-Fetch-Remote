// function getRandomNumber (){
// let promise = new Promise ( (resolve, reject) => {
//     setTimeout(() => resolve(Math.random()) , 500);
// });

// return promise 

// // async function getRandomNumber().then(result =>console.log(result));

// async function newFunction () {
//     let randNum = await getRandomNumber ();
//     console.log (randNum); 

//   },


// newFunction ();

//////
async function getRandomNumber () {
    let promise = new Promise ((resolve, reject) => {
        setTimeout(() => resolve(Math.Floor(Math.random() * 55)) , 500)   //max number is set by Math.Floor so gives number 0-54
    });
    let result = await promise;
    console.log(result);
}

getRandomNumber();

//////////////////////////////////////////////
async function cityName(city) {
 fetch (`https://geocode.xyz/${city}?json=1`)  
  .then(response => response.json())
  .then(result => {
    console.log(result);
    console.log(`the the latitude of ${city} is ${result.latt}`);
    console.log(`the longitude ${city} is ${result.longt}`);
  })
  .catch(error => console.log('error', error));
}
 cityName('New York')
