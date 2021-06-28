import axios from 'axios'

const getColourLoversApi = () => {
  return axios.get('/new', { params: { format: 'json' } })
}

export { getColourLoversApi }
