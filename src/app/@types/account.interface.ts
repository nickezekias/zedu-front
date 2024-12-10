import type Person from '../models/person.model'
import type School from '../models/school.model'

interface DBGetQueryFilter {
  sortBy: Array<string>
  itemsPerPage?: number
  sortDesc?: Array<string>
  page?: number
}

interface LoginRequest {
  email: string
  password: string
}

interface PasswordResetRequest {
  password: string
  passwordConfirmation: SVGStringList
}

interface RegisterRequest {
  person: Person
  school: School
  email: string
  licenseId: string
  password: string
  password_confirmation: string
}

export type { DBGetQueryFilter, LoginRequest, PasswordResetRequest, RegisterRequest }
