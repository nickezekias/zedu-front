interface FullCalendarEvent {
  id: string
  allDay: boolean
  end: string
  extendedProps: {
    classe: string
    professor: string
    day: string
  }
  start: string
  title: string
}

export type { FullCalendarEvent }
