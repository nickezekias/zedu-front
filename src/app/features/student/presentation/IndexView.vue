<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStudentStore } from '@/stores/student.store';

import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'


const objStore = useStudentStore()

const selectedProducts = ref([])

onMounted(() => {
  objStore.getAll()
})
</script>

<template>
  <div>
    <h2 class="font-extralight text-2xl">{{ $t('labels.student', 2) }}</h2>
    <!-- <p class="text-surface-200">{{ $t('labels.stude') }}</p> -->
  </div>
  <DataTable v-model:selection="selectedProducts" :value="objStore.students" dataKey="id"
    class="mt-6 border rounded-lg">
    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
    <Column :header="$t('labels.name')" sortable sortField="person.fullName">
      <template #body="{ data }">
        <div class="flex items-center gap-3">
          <PrimeAvatar :label="data.person.initials" style="background-color: #0099ff11; color: #0099ff"
            shape="circle" />
          <span>{{ data.person.fullName }}</span>
        </div>
      </template>
    </Column>
    <Column field="schoolCode" :header="$t('labels.studentId')"></Column>

    <Column :header="$t('labels.gender')">
      <template #body="{ data }">
        <div class="flex items-center">
          <div>{{ $t(`labels.${data.person.gender}`.toLowerCase()) }}</div>
        </div>
      </template>
    </Column>
    <Column :header="$t('labels.birthDate')">
      <template #body="{ data }">
        <div class="flex items-center">
          <div>{{ data.person.birthDate }} ({{ data.person.age }})</div>
        </div>
      </template>
    </Column>
    <Column field="classe" :header="$t('labels.class')"></Column>
    <Column :header="$t('labels.schoolFees')">
      <template #body>
        <Tag v-if="Math.random() >= 0.5" :value="$t(`labels.paid`)" />
        <Tag v-else :value="$t(`labels.unpaid`)" severity="danger" />
      </template>
    </Column>
    <Column field="person.address" :header="$t('labels.address')"></Column>
  </DataTable>
</template>