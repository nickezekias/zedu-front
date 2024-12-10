import axios from '@/lib/axios'

const url = '/api/v1/students'

const getAll = async function () {
  return axios.get(url)
}

export default {
  getAll,
}
