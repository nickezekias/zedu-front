<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { onMounted } from 'vue';
import { useTimetableStore } from '@/stores/timetable.store';
import Obj from '@/app/models/timetable.model';
import type { FullCalendarEvent } from '@/app/@types/timetable.interface';
import { ref } from 'vue';

const objStore = useTimetableStore();

const calendarOptions = ref({
  plugins: [timeGridPlugin, interactionPlugin],
  initialView: 'timeGridWeek',
  headerToolbar: {
    left: 'prev,next,today',
    center: 'title',
    right: 'timeGridWeek,timeGridDay' // user can switch between the two
  },
  dateClick: handleDateClick,
  events: [] as FullCalendarEvent[],
  allDaySlot: false,
  slotMinTime: '6:00',
  slotMaxTime: '19:00',
})

onMounted(async () => {
  await objStore.getAll()
  const calEvents = Obj.mapToFullCalendarEvents(objStore.objects)
  calendarOptions.value.events = calEvents
  console.log("CAL_EVENTS", calEvents)
  console.log(calendarOptions)

})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleDateClick(arg: any) {
  alert('date click! ' + arg.dateStr)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <FullCalendar :options="calendarOptions" class="w-full" />
  </div>
</template>