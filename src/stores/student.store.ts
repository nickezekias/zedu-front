import { ref } from 'vue'
import studentService from '@/app/features/admin/student/student.service'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student', () => {
  const students = ref([])

  async function getAll() {
    const response = await studentService.getAll()
    students.value = response.data.data
  }

  return { students, getAll }
})
