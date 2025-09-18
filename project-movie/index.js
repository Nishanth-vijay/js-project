function getmovie(){
    let inp = document.getElementById("mov")
    let data =inp.value
    console.log(data);
    
    fetchdata(data)
}
async function fetchdata(data){
//    const url = "http://localhost:3000/movies_shows"
    const url = 'https://rottentomato.p.rapidapi.com/search?search-term=war2';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3dfb9b12a1msh5a3826faddd1f25p15322ejsn3351eec2aa3a',
		'x-rapidapi-host': 'rottentomato.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    // const response = await fetch(url);
	const result = await response.json();
	if (!result){
        console.log("Enter correct movie name")
    }
moviedetails(result)
// console.log(result);


} catch (error) {
	// console.error(error);
}
}

function moviedetails(){
   
    let movieactors =data.movies_shows[0].castCrew.cast
    let description = data.movies_shows[0].description
    let imageurl = data.movies_shows[0].posterImageUrl
    let genre = data.movies_shows[0].genres
    let runTime =data.movies_shows[0].runTime
    let title =data.movies_shows[0].title
    let suggestions = []
    let releaseYear = data.movies_shows[0].releaseYear
    let audienceScore= data.movies_shows[0].audienceScore
    let wantToSeeCount = data.movies_shows[0].wantToSeeCount
    let criticsScore   = data.movies_shows[0].criticsScore






data.movies_shows.forEach(element => {
    if(element.aka){
    element.aka.forEach(
        ele=>suggestions.push(ele)
    )}
});







    // console.log()
 
    // for (let index = 0; index < 4; index++) {
    //     // moviename.push =     movies_shows._highlightResult.castCrew.cast[index].value;

    //     // let movieactors =data[0].castCrew.cast
    //      movieactor.push(data.movies_shows[0]._highlightResult.castCrew.cast[index].value);   
    // }
console.log(movieactors);
console.log(description);
console.log(imageurl);
// console.log(suggestions);
console.log(genre);
console.log(runTime);
console.log(title);
console.log(suggestions);
// console.log();
// console.log();


let div1 = document.getElementById("div1")
div1.innerHTML=""
let img = document.createElement("img")
img.src= imageurl
// div1.appendChild(img)

let div2 = document.getElementById("div2")
div2.innerHTML=`
<h1> Title : ${title} </h1>  
<h1> releaseYear : ${releaseYear} </h1> 
<h3> genre : ${genre} </h3>  
<h3> Runtime : ${runTime}  Min</h3> 
<h4> audienceScore : ${audienceScore} ,wantToSeeCount : ${wantToSeeCount} ,criticsScore : ${criticsScore}</h4>  
<h5> Description : ${description} </h5> `


let div3 = document.getElementById("div3")
div3.innerHTML=""
suggestions.forEach(element => {
let a = document.createElement("a")
a.innerText=element
a.href="#"
// a.onclick= fetchdata(element)  
  a.onclick = function(e) {
    e.preventDefault(); // prevent page jump
    fetchdata(element);
  };

div3.appendChild(a)
});


}





// getmovie()




// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();


/*

function moviedetails(data){
    // let movieactors =data.movies_shows[0].castCrew.cast
    // let description = data[0].description
    // let imageurl = data[0].posterImageUrl
    // let genre = data[0].genres
    // let runTime =data[0].runTime
    // let title =data[0].title
    // let suggestions = []







// data.forEach(element => {
//     if(element.aka){
//     element.aka.forEach(
//         ele=>suggestions.push(ele)
//     )}
// });


data.movies_shows[0]._highlightResult.forEach(element => {
    if(element.aka){
    element.aka.forEach(
        ele=>suggestions.push(ele)
    )}
});





    // console.log()
    // data[1].aka
    // for (let index = 0; index < 4; index++) {
    //     // moviename.push =     movies_shows._highlightResult.castCrew.cast[index].value;

    //     // let movieactors =data[0].castCrew.cast
    //      movieactor.push(data.movies_shows[0]._highlightResult.castCrew.cast[index].value);   
    // }
console.log(movieactors);
console.log(description);
console.log(imageurl);
// console.log(suggestions);
console.log(genre);
console.log(runTime);
console.log(title);
console.log(suggestions);
// console.log();
// console.log();


let div1 = document.getElementById("div1")
div1.innerHTML=""
let img = document.createElement("img")
img.src= imageurl
// div1.appendChild(img)

let div2 = document.getElementById("div2")
div2.innerHTML=`
<h1> Title : ${title} </h1>  
<h3> genre : ${genre} </h3>  
<h3> Runtime : ${runTime}  Min</h3>  
<h5> Description : ${description} </h5> `


let div3 = document.getElementById("div3")
div3.innerHTML=""
suggestions.forEach(element => {
let a = document.createElement("a")
a.innerText=element
a.href="#"
// a.onclick= fetchdata(element)  
  a.onclick = function(e) {
    e.preventDefault(); // prevent page jump
    fetchdata(element);
  };

div3.appendChild(a)
});


}


*/