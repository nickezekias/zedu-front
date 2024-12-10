export default class Person {
  id: string
  age: number
  avatar: string
  birthDate: string
  birthPlace: string
  country: string
  firstName: string
  fullName: string
  gender: string
  initials: string
  lastName: string
  phone: string
  createdAt: string
  updatedAt: string

  public static readonly genders = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER',
  }

  constructor(
    id: string,
    age: number,
    avatar: string,
    birthDate: string,
    birthPlace: string,
    country: string,
    firstName: string,
    fullName: string,
    gender: string,
    initials: string,
    lastName: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id
    this.age = age
    this.avatar = avatar
    this.birthDate = birthDate
    this.birthPlace = birthPlace
    this.country = country
    this.firstName = firstName
    this.fullName = fullName
    this.gender = gender
    this.initials = initials
    this.lastName = lastName
    this.phone = phone
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    id: string
    age: number
    avatar: string
    birthDate: string
    birthPlace: string
    country: string
    firstName: string
    fullName: string
    gender: string
    initials: string
    lastName: string
    phone: string
    createdAt: string
    updatedAt: string
  }): Person {
    return new Person(
      data.id,
      data.age,
      data.avatar,
      data.birthDate,
      data.birthPlace,
      data.country,
      data.firstName,
      data.fullName,
      data.gender,
      data.initials,
      data.lastName,
      data.phone,
      data.createdAt,
      data.updatedAt,
    )
  }

  static initEmpty(): Person {
    return new Person('', 0, '', '', '', '', '', '', '', '', '', '', '', '')
  }
}
