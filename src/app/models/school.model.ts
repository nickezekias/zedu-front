export default class School {
  id: string
  abbreviation: string
  address: string
  classLevels: Array<string>
  classes: Array<string>
  email: string
  isActive: boolean
  logo: string
  name: string
  phone: string
  createdAt: string
  updatedAt: string

  constructor(
    id: string,
    abbreviation: string,
    address: string,
    classLevels: Array<string>,
    classes: Array<string>,
    email: string,
    isActive: boolean,
    logo: string,
    name: string,
    phone: string,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id
    this.abbreviation = abbreviation
    this.address = address
    this.classLevels = classLevels
    this.classes = classes
    this.email = email
    this.isActive = isActive
    this.logo = logo
    this.name = name
    this.phone = phone
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    id: string
    abbreviation: string
    address: string
    classLevels: Array<string>
    classes: Array<string>
    email: string
    isActive: boolean
    logo: string
    name: string
    phone: string
    createdAt: string
    updatedAt: string
  }): School {
    return new School(
      data.id,
      data.abbreviation,
      data.address,
      data.classLevels,
      data.classes,
      data.email,
      data.isActive,
      data.logo,
      data.name,
      data.phone,
      data.createdAt,
      data.updatedAt,
    )
  }

  static initEmpty(): School {
    return new School('', '', '', [], [], '', false, '', '', '', '', '')
  }
}
