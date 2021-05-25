export const fetchUser = async (email) => {
  const url = `https://fetching-friends-backend.herokuapp.com/api/v1/users?email=${email}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Something went wrong please check the email you used and try again')
  }
  const user = await response.json()
  return user
}

export const userSignUp = (state) => {
  return fetch('https://fetching-friends-backend.herokuapp.com/api/v1/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(state)
  })
  .then(response => response.json())
}

export const getAnimals = (type) => {
  return fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/pets?type=${type}`)
  .then(res => res.json())
}

export const updatePetStatus = (id, status) => {
  console.log(status)
  return fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/pet_applications/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(status)
  })
  .then(response => response.json())
}
