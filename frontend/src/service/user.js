import axios from 'axios'
const Url = '/api/notes'

const getAll = () => {
  const request = axios.get(Url)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(Url, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${Url}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, update }