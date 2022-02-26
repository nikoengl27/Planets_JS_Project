const baseURL = 'http://localhost:5000/api/planets/';

const PlanetService =  {
//   getPlanets() {
//     return fetch(baseURL)
//       .then(res => res.json());
//   },

//   addPlanet(booking) {
//     return fetch(baseURL, {
//       method: 'POST',
//       body: JSON.stringify(planet),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
//   },

//   updatePlanet(planet) {
//     return fetch(baseURL + planet._id, {
//       method: 'PUT',
//       body: JSON.stringify(planet),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(res => res.json());
//   },

  deletePlanet(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default PlanetService;