import type { FullCalendarEvent } from '../@types/timetable.interface'

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

  private createDateTimeISOString(day: string, time: string): string {
    const now = new Date()
    const dayIndex = [
      'SUNDAY',
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
    ].indexOf(day.toUpperCase())

    // Calculate the difference in days to the target day, ensuring it's within the current week
    const dayDiff = dayIndex - now.getUTCDay()

    // Create the target date by adding the day difference to the current date
    const targetDate = new Date(now.getTime() + dayDiff * 24 * 60 * 60 * 1000)

    // Set the time components
    targetDate.setUTCHours(
      parseInt(time.split(':')[0]),
      parseInt(time.split(':')[1]),
      parseInt(time.split(':')[2]),
    )

    // Format the date in the desired ISO 8601 format without milliseconds and 'Z'
    const year = targetDate.getUTCFullYear()
    const month = (targetDate.getUTCMonth() + 1).toString().padStart(2, '0')
    const dayRes = targetDate.getUTCDate().toString().padStart(2, '0')
    const hours = targetDate.getUTCHours().toString().padStart(2, '0')
    const minutes = targetDate.getUTCMinutes().toString().padStart(2, '0')
    const seconds = targetDate.getUTCSeconds().toString().padStart(2, '0')

    return `${year}-${month}-${dayRes}T${hours}:${minutes}:${seconds}`
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

  static fromObjects(
    data: Array<{
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
    }>,
  ): Array<Timetable> {
    return data.map((item) => Timetable.fromObject(item))
  }

  static initEmpty(): Timetable {
    return new Timetable('', '', '', '', '', '', '', '', '', '')
  }

  public mapToFullCalendarEvent(): FullCalendarEvent {
    return {
      id: this.id,
      title: this.subject,
      start: this.createDateTimeISOString(this.day, this.startTime),
      end: this.createDateTimeISOString(this.day, this.endTime),
      extendedProps: {
        classe: this.classe,
        professor: this.professor,
        day: this.day,
      },
      allDay: false,
    }
  }

  static mapToFullCalendarEvents(timetables: Timetable[]): FullCalendarEvent[] {
    return timetables.map((timetable) => timetable.mapToFullCalendarEvent())
  }
}
