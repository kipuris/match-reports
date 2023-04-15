<template>
  <MainHeader />
  <main>
    <section class="flex w-full items-center justify-center bg-dart-red-secondary">
      <div class="max-w-screen-content py-8 lg:w-full">
        <h3 class="mb-5 text-2xl font-semibold leading-133 text-dart-red-primary">Quarter-Final</h3>
        <div class="flex flex-col gap-5 lg:flex-row">
          <DartCard v-for="(card, index) in cardData" :key="index" :data="card" />
        </div>
      </div>
    </section>
    <section
      class="flex w-full items-center justify-center bg-gradient-to-b from-dart-blue-tertiary from-[88.6%] to-dart-blue-secondary to-15%"
    >
      <div class="w-full max-w-screen-content">
        <SecondaryNav />
        <div class="mx-4 my-5 lg:mx-0">
          <img :src="digitalSteelTopBanner" alt="Digital steel top banner" />
        </div>
        <div class="mx-4 my-5 lg:mx-0">
          <OpponentsTable />
        </div>
        <div class="mx-4 my-5 lg:mx-0">
          <img :src="dartConnectBanner" alt="Dart connect banner" />
        </div>
        <div class="mx-4 my-5 lg:mx-0">
          <MainTable />
        </div>
      </div>
    </section>
    <section class="flex w-full items-center justify-center bg-dart-blue-secondary">
      <div class="mx-4 mb-10 mt-5 w-full max-w-screen-content lg:mx-0">
        <h3 class="mb-5 text-2xl font-semibold leading-133 text-dart-dark-primary">
          Did everyone in the match receive a copy of the match recap?
        </h3>
        <div class="flex flex-col gap-7 lg:flex-row">
          <RecapCard v-for="(card, index) in recapData" :key="index" :data="card" />
        </div>
      </div>
    </section>
    <div class="mx-4 my-5 max-w-screen-content lg:mx-auto">
      <img :src="digitalSteelBottomBanner" alt="Digital steel bottom banner" />
    </div>
  </main>
  <DartFooter />
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import DartCard from '@/components/DartCard.vue'
import SecondaryNav from '@/components/SecondaryNav.vue'
import OpponentsTable from '@/components/OpponentsTable.vue'
import MainTable from '@/components/MainTable.vue'
import DartFooter from '@/components/DartFooter.vue'
import digitalSteelTopBanner from '@/assets/img/digital-steel-top-banner-min.jpeg'
import dartConnectBanner from '@/assets/img/dartconnect-banner-min.jpeg'
import digitalSteelBottomBanner from '@/assets/img/digital-steel-bottom-banner-min.jpeg'
import RecapCard from './components/RecapCard.vue'

const cardData = [
  [
    {
      title: 'Date',
      value: 'Mon, 12 Dec 2022',
      datetime: '2022-12-12',
      isDatetime: true,
    },
    {
      title: 'Start',
      value: '3:29 PM',
      isDatetime: true,
    },
    {
      title: 'End',
      value: '3:48 PM',
      isDatetime: true,
    },
  ],
  [
    {
      title: 'Game Time',
      value: '00:19',
      isDatetime: false,
    },
    {
      title: 'Match Length',
      value: '00:19',
      isDatetime: false,
    },
    {
      title: 'DER',
      value: '98%',
      isDatetime: false,
    },
  ],
  [
    {
      title: 'Matches',
      value: '1',
      isDatetime: false,
    },
    {
      title: 'Games',
      value: '9',
      isDatetime: false,
    },
    {
      title: 'Darts',
      value: '900',
      isDatetime: false,
    },
  ],
]

const recapData = [
  {
    title: 'Home/Host Players',
    subtitle: 'Tavis Dudeney • Member',
    bgColor: 'before:bg-primary',
  },
  {
    title: 'Away/Guest Players',
    subtitle: 'Jarno Bottenberg • Recap Sent',
    bgColor: 'before:bg-dart-red-primary',
  },
]
</script>

<style></style>
