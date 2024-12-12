import type Timetable from '@/app/models/timetable.model'
import axios from '@/lib/axios'

const url = '/api/v1/timetables'

const create = async function (data: Timetable) {
  return axios.post(`${url}`, data)
}

const get = async function (id: string) {
  return axios.get(`${url}/${id}`)
}

const getAll = async function () {
  return axios.get(url)
}

const update = async function (data: Timetable) {
  return axios.post('/user/profile-information?_method=PUT', data)
}

const destroy = async function (id: string) {
  return axios.delete(`${url}/${id}`)
}

export default {
  create,
  get,
  getAll,
  update,
  destroy,
}
