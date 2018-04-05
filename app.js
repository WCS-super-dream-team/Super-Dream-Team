// Access-Control-Allow-Origin: https://akabab.github.io/superhero-api/api

const apiUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

const api = path => fetch(`${apiUrl}/${path}.json`)
	.then(res => res.json())

api.all = () => api(`all`)  // All heroes

api.id = id => api(`id/${id}`) // Heroes by id

api.powerstats = id => api(`/powerstats/${id}`) // Powerstats by id

api.appearance = id => api(`/appearance/${id}`) // Appearance by id

api.biography = id => api(`/biography/${id}`) // Biography by id

api.connections = id => api(`/connections/${id}`) // Connections by id

api.work = id => api(`/work/${id}`) // Work by id


//____id call exemple____//
// api.id(1)
// 	.then(json => console.log(json))

//____All call exemple____//
// api.all()
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
api.work(1)
	.then(json => console.log(json))