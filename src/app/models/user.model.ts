import Person from './person.model'

export default class User {
  id: string
  email: string
  emailVerifiedAt: string
  isActive: boolean
  licenseSchoolId: string
  person: Person
  roles: Array<string>
  createdAt: string
  updatedAt: string

  public constructor(
    id: string,
    email: string,
    emailVerifiedAt: string,
    isActive: boolean,
    licenseSchoolId: string,
    person: Person,
    roles: Array<string>,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id
    this.email = email
    this.emailVerifiedAt = emailVerifiedAt
    this.isActive = isActive
    this.licenseSchoolId = licenseSchoolId
    this.person = person
    this.roles = roles
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    id: string
    email: string
    emailVerifiedAt: string
    isActive: boolean
    licenseSchoolId: string
    person: Person
    roles: Array<string>
    createdAt: string
    updatedAt: string
  }): User {
    return new User(
      data.id,
      data.email,
      data.emailVerifiedAt,
      data.isActive,
      data.licenseSchoolId,
      Person.fromObject(data.person),
      data.roles,
      data.createdAt,
      data.updatedAt,
    )
  }

  public isAdmin(): boolean {
    return this.roles.includes('ADMIN')
  }

  public isSchoolAdmin(): boolean {
    return this.roles.includes('SCHOOL_ADMIN')
  }
}