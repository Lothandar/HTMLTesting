const KEY = "f37eafbe";
const id = new URLSearchParams(location.search).get('id');
if(id != null){
    searching(id);
}

function searching(){
                    if(arguments[0]){
                        fetch("http://www.omdbapi.com/?apikey="+KEY+"&i="+arguments[0]+"&plot=full").then(res => res.json())
                        .then(json => {console.log(json);
                        displayUnique(json);
                        })
                        .catch(err => console.error(err));
                    }
                    else{
                        let searchItem=document.getElementById("searchBar").value;
                        fetch("http://www.omdbapi.com/?apikey="+KEY+"&s="+searchItem+"&plot=full").then(res => res.json())
                        .then(json => {console.log(json);
                        display(json);
                        })
                        .catch(err => console.error(err));
                    }
                }
                function displayUnique(jsonfile){
                    if(jsonfile.Response != "False")
                    {
                        document.getElementById("JsonParsing").innerText ="";
                        let card = document.createElement("div");
                        document.getElementById("JsonParsing").appendChild(card);
                        card.className = "card";
                        let row = document.createElement("div");
                        row.className ="row";
                        card.appendChild(row);
                        let Title = document.createElement("h1");
                        let Poster = document.createElement("img");
                        Poster.className ="w-100";
                        let myp = document.createElement("p");
                        Poster.src = jsonfile.Poster;
                        myp.innerText = jsonfile.Year;
                        Title.innerText = jsonfile.Title;
                        card = document.createElement("div");
                        card.className = "col-md-4";
                        row.appendChild(card);
                        card.appendChild(Poster);
                        card = document.createElement("div");
                        card.className = "col-md-8 px-3";
                        row.appendChild(card);
                        row= document.createElement("div");
                        row.className = "card-block px-3";
                        card.appendChild(row);
                        card.appendChild(Title);
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText = jsonfile.Plot;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText = jsonfile.Rated;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Released ;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Runtime;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Actors;
                        card.appendChild(myp);
                        if(jsonfile.Awards != "N/A"){
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Awards;
                        card.appendChild(myp);
                        }
                        if(jsonfile.BoxOffice != "N/A"){
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.BoxOffice;
                        card.appendChild(myp);
                        }
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Country;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Director;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Genre;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Production;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Type;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.Writer;
                        card.appendChild(myp);
                        myp = document.createElement("p");
                        myp.innerText =jsonfile.imdbRating;
                        card.appendChild(myp);
        
                    }
                }



                function display(jsonfile){
                    if(jsonfile.Response != "False"){
                        document.getElementById("JsonParsing").innerText ="";
                   // let result = JSON.parse(jsonfile);
                        for(let search of jsonfile.Search){
                            let card = document.createElement("div");
                            card.classList.add("card");
                            card.addEventListener('click', () => window.location ="film.html?id="+search.imdbID);
                            let Title = document.createElement("h1");
                            let Poster = document.createElement("img");
                            Poster.style="width:25%";
                            let myp = document.createElement("p");

                            Poster.src = search.Poster;
                            myp.innerText = search.Year;
                            Title.innerText = search.Title;
                            document.getElementById("JsonParsing").appendChild(card);
                            card.appendChild(Poster);
                            card.appendChild(Title);
                            card.appendChild(myp);
                        }
                    }
                }