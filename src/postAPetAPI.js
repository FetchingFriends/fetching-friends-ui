export const postANewPet = (request) => {
  return fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/pets`, {
           method: 'POST',headers: {
               "Content-Type": "application/json"
             },
           body: JSON.stringify({
             name: request.name,
             breed: request.breed,
             description: request.description, 
             fixed: request.fixed,
             gender: request.gender,
             goodWithKids: request.goodWithKids,
             goodWithPets: request.goodWithPets, 
             photo_url_1: request.photo_url_1
           })
         })
         .then((response) => response.json())
}