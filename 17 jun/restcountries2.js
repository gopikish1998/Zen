var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {var data = JSON.parse(this.response);
    for(var j in data){
        console.log(data[j].name,"",data[j].region,"",data[j].subregion,"",data[j].population)};
}
// console.log(data)}
    xhr.send();
