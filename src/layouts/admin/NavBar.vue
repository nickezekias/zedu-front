<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import UserAvatarMenu from '@/components/forms/user/UserAvatarMenu.vue';
</script>

<template>
  <Toolbar class="py-0 rounded-none border-b">
    <template #start>
      <div class="logo">
        <span class="z">Z</span><span class="edu">edu</span>
      </div>
    </template>

    <template #center>
      <router-link :to="{ name: 'admin.dashboard' }" activeClass="border-b border-primary" class="hidden md:flex py-2">
        <PrimeButton text plain class="" :label="$t('labels.dashboard')" />
      </router-link>

      <router-link :to="{ name: 'admin.students.index' }" activeClass="border-b border-primary"
        class="hidden md:flex py-2">
        <PrimeButton text plain class="" :label="$t('labels.student', 2)" />
      </router-link>

      <router-link :to="{ name: 'admin.timetables.index' }" activeClass="border-b border-primary"
        class="hidden md:flex py-2">
        <PrimeButton text plain class="" :label="$t('labels.timetable', 2)" />
      </router-link>
    </template>

    <template #end>
      <div class="flex align-items-center gap-3">
        <UserAvatarMenu />
      </div>
    </template>
  </Toolbar>
</template>