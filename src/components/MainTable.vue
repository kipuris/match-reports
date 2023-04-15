<template>
  <div class="overflow-x-auto">
    <table class="w-full table-auto rounded-10 bg-white">
      <thead class="bg-dart-table-blue text-white">
        <tr>
          <th colspan="3" class="w-auto rounded-tl-10 px-6 py-3 text-center font-semibold">
            <div class="text-sm leading-143">Opponents</div>
          </th>
          <th colspan="3" class="w-auto px-6 py-3 font-semibold">
            <div class="flex flex-col items-center text-sm leading-143">
              <div class="mb-2">
                <IconSvg name="dartconnect-item" />
              </div>
            </div>
          </th>
          <th colspan="3" class="w-auto rounded-tr-10 px-6 py-3 font-semibold">
            <div class="flex flex-col items-center text-sm leading-143">
              <div class="mb-2">All Cricket Games</div>
            </div>
          </th>
        </tr>
        <tr>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">Leg</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">3DA</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">Players</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">Score</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143"></div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">Score</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">Players</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">3DA</div>
          </th>
          <th colspan="1" class="w-auto px-6 py-[10px] text-center font-semibold">
            <div class="text-sm leading-143">Darts</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="row.leg"
          class="border-b border-dart-blue-tertiary text-sm leading-143"
          :class="{ 'bg-dart-table-bg': index % 2 !== 0 }"
        >
          <td
            v-for="td in Object.keys(row)"
            :key="td"
            class="border border-l border-r border-dart-blue-tertiary px-6 py-[10px] text-center"
            :class="{
              'text-dart-red-primary': isRed(row[td]),
              'font-semibold': isSemibold(td, row[td]),
            }"
          >
            {{ row[td] }}
          </td>
        </tr>
      </tbody>
      <tfoot class="bg-dart-blue-tertiary text-white">
        <tr class="text-sm leading-143">
          <td
            colspan="9"
            class="rounded-bl-10 rounded-br-10 px-6 py-[10px] text-center text-primary"
          >
            Match ID: 63973b8cd10cff3ecc1595ee
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import IconSvg from '@/components/IconSvg.vue'

const rows = [
  {
    leg: '1.1',
    threeDA1: '69.00',
    players1: '',
    score1: '18',
    dartconnect: '501',
    score2: '0 ♦',
    players2: '',
    threeDA2: '75.15',
    darts: '20',
  },
  {
    leg: '1.2',
    threeDA1: '76.83',
    players1: '',
    score1: '40',
    dartconnect: '501',
    score2: '0 ♦',
    players2: '',
    threeDA2: '79.11',
    darts: '19',
  },
  {
    leg: '1.3',
    threeDA1: '115.62',
    players1: '',
    score1: '0 ♦',
    dartconnect: '501',
    score2: '138',
    players2: '',
    threeDA2: '90.75',
    darts: '13',
  },
  {
    leg: '1.4',
    threeDA1: '70.20',
    players1: '',
    score1: '150',
    dartconnect: '501',
    score2: '0 ♦',
    players2: '',
    threeDA2: '93.94',
    darts: '16',
  },
  {
    leg: '1.5',
    threeDA1: '83.50',
    players1: 'Tavis Dudeney',
    score1: '0 ♦',
    dartconnect: '501',
    score2: '188',
    players2: 'Jarno Bottenberg',
    threeDA2: '62.60',
    darts: '18',
  },
  {
    leg: '1.6',
    threeDA1: '62.20',
    players1: '',
    score1: '190',
    dartconnect: '501',
    score2: '0 ♦',
    players2: '',
    threeDA2: '83.50',
    darts: '18',
  },
  {
    leg: '1.7',
    threeDA1: '74.83',
    players1: '',
    score1: '52',
    dartconnect: '501',
    score2: '0 ♦',
    players2: '',
    threeDA2: '88.41',
    darts: '17',
  },
  {
    leg: '1.8',
    threeDA1: '107.36',
    players1: '',
    score1: '0 ♦',
    dartconnect: '501',
    score2: '14',
    players2: '',
    threeDA2: '97.40',
    darts: '14',
  },
  {
    leg: '1.9',
    threeDA1: '80.83',
    players1: '',
    score1: '16',
    dartconnect: '501',
    score2: '0 ★',
    players2: '',
    threeDA2: '83.50',
    darts: '18',
  },
]

const isRed = (value) => {
  return value.includes('♦') || value.includes('★')
}

const isSemibold = (key, value) => {
  return (
    value.includes('♦') ||
    value.includes('★') ||
    key === 'dartconnect' ||
    (['players1', 'players2'].includes(key) && value)
  )
}
</script>
