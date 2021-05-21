export const fetchUser = (email) => {
  return fetch(`https://fetching-friends-backend.herokuapp.com/api/v1/users?email=${email}`)
  .then(response => {
    if(!response.ok) {
      return response.error
    }
    return response.json()
  })
}
