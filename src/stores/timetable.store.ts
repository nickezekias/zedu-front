import { ref, type Ref } from 'vue'
import objService from '@/app/adapters/timetable.service'
import { defineStore } from 'pinia'
import Obj from '@/app/models/timetable.model'

export const useStudentStore = defineStore('student', () => {
  const objList: Ref<Array<Obj>> = ref([])

  async function create(obj: Obj) {
    const response = await objService.create(obj)
    objList.value.push(Obj.fromObject(response.data.data))
  }

  async function get(id: string) {
    const response = await objService.get(id)
    return Obj.fromObject(response.data.data)
  }

  async function getAll() {
    const response = await objService.getAll()
    objList.value = response.data.data
  }

  async function update(obj: Obj) {
    const response = await objService.update(obj)
    objList.value = objList.value.map((item) => {
      if (item.id === obj.id) {
        return Obj.fromObject(response.data.data)
      }
      return item
    })
  }

  async function destroy(obj: Obj) {
    await objService.destroy(obj.id)
    objList.value = objList.value.filter((item) => item.id !== obj.id)
  }

  return { objList, create, get, getAll, update, destroy }
})
