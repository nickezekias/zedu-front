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
    )
  }
}
