export const fetchUser = (id: number) => {
  return fetch(`http://localhost:4000/users/${id}`)
}
