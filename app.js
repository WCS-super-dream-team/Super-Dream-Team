// Access-Control-Allow-Origin: https://akabab.github.io/superhero-api/api

const apiUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api' // join the api

const api = path => fetch(`${apiUrl}/${path}.json`)	// path function
	.then(res => res.json())

api.all = () => api(`all`)  // All heroes

api.id = id => api(`id/${id}`) // Heroes by id

api.powerstats = id => api(`/powerstats/${id}`) // Powerstats by id

api.appearance = id => api(`/appearance/${id}`) // Appearance by id

api.biography = id => api(`/biography/${id}`) // Biography by id

api.connections = id => api(`/connections/${id}`) // Connections by id

api.work = id => api(`/work/${id}`) // Work by id

//____All call exemple____//
// api.all()
// 	.then(json => console.log(json))

//____id call exemple____//
// api.id(1)
// 	.then(json => console.log(json))

//____Powerstats by id call exemple____//
// api.powerstats(1)
// 	.then(json => console.log(json))

//____Appearance by id call exemple____//
// api.appearance(1)
// 	.then(json => console.log(json))

//____Biography by id call exemple____//
// api.biography(1)
// 	.then(json => console.log(json))

//____connections by id call exemple____//
// api.connections(1)
// 	.then(json => console.log(json))

//____work by id call exemple____//
// api.work(1)
// 	.then(json => console.log(json))

//==============================================//

//______array for hero qty______//
var memberNumber = new Array(11)  
for(var i = 0; i < memberNumber.length; i++) { 
   memberNumber[i] = i
   console.log(memberNumber[i]) 
}

//______dynamic dropdown______//
const createDropDown = count => {
	for (let i = 0; i < count; i++ ) {
		document.getElementById("1member").innerHTML += `<div class="block">
				 <select>
				  <option value=fetch api.all() >text</option>
				  <option value="saab">Saab</option>
				  <option value="mercedes">Mercedes</option>
				  <option value="audi">Audi</option>
				</select> 
			</div>`;
	}
}
	
let dropdown = document.getElementById('1member');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Character';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = api.all.name()';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].name;
      option.value = data[i].abbreviation;
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();
