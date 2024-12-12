export default class Timetable {
  id: string
  academicPeriodId: string = ''
  classe: string
  day: string
  endTime: string
  professor: string = ''
  startTime: string
  subject: string
  createdAt: string
  updatedAt: string

  constructor(
    id: string,
    academicPeriodId: string,
    classe: string,
    day: string,
    endTime: string,
    professor: string,
    startTime: string,
    subject: string,
    createdAt: string,
    updatedAt: string,
  ) {
    this.id = id
    this.academicPeriodId = academicPeriodId
    this.classe = classe
    this.day = day
    this.endTime = endTime
    this.professor = professor
    this.startTime = startTime
    this.subject = subject
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static fromObject(data: {
    id: string
    academicPeriodId: string
    classe: string
    day: string
    endTime: string
    professor: string
    startTime: string
    subject: string
    createdAt: string
    updatedAt: string
  }): Timetable {
    return new Timetable(
      data.id,
      data.academicPeriodId,
      data.classe,
      data.day,
      data.endTime,
      data.professor,
      data.startTime,
      data.subject,
      data.createdAt,
      data.updatedAt,
    )
  }

  static initEmpty(): Timetable {
    return new Timetable('', '', '', '', '', '', '', '', '', '')
  }
}
