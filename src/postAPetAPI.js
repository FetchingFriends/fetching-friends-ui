export const postANewPet = (request) => {
  console.log(JSON.stringify({
    user_id: request.user_id,
    pet_type: request.pet_type,
    age: request.age,
    name: request.name,
    breed: request.breed,
    description: request.description, 
    fixed: request.fixed,
    gender: request.gender,
    photo_url_1: request.photo_url_1
  }))
  return fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/pets`, {
           method: 'POST',headers: {
               "Content-Type": "application/json"
             },
           body: JSON.stringify({
             user_id: request.user_id,
             pet_type: request.pet_type,
             name: request.name,
             age: request.age,
             breed: request.breed,
             description: request.description, 
             fixed: request.fixed,
             gender: request.gender,
             photo_url_1: request.photo_url_1
           })
         })
         .then((response) => response.json())
}