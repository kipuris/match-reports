<template>
  <div class="overflow-x-auto">
    <table class="w-full table-auto rounded-10 bg-white">
      <thead class="bg-dart-table-blue text-white">
        <tr>
          <th
            class="w-auto rounded-tl-10 border border-r border-white px-6 py-[25px] text-center font-semibold lg:w-1/4"
          >
            <div class="text-sm leading-143">Opponents</div>
          </th>
          <th class="w-auto border border-r border-white px-6 py-[10px] font-semibold lg:w-1/4">
            <div class="flex flex-col items-center text-sm leading-143">
              <div class="mb-2">Match</div>
              <ul class="flex w-full">
                <li class="mx-1 lg:w-1/3">Score</li>
                <li class="mx-1 lg:w-1/3">Sets</li>
                <li class="mx-1 lg:w-1/3">Legs</li>
              </ul>
            </div>
          </th>
          <th class="w-auto border border-r border-white px-6 py-[10px] font-semibold lg:w-1/4">
            <div class="flex flex-col items-center text-sm leading-143">
              <div class="mb-2">All 01 Games</div>
              <ul class="flex w-full">
                <li class="mx-1 lg:w-1/3">Points</li>
                <li class="mx-1 lg:w-1/3">Darts</li>
                <li class="mx-1 lg:w-1/3">PPR</li>
              </ul>
            </div>
          </th>
          <th class="w-auto rounded-tr-10 px-6 py-[10px] font-semibold lg:w-1/4">
            <div class="flex flex-col items-center text-sm leading-143">
              <div class="mb-2">All Cricket Games</div>
              <ul class="flex w-full">
                <li class="mx-1 lg:w-1/3">Marks</li>
                <li class="mx-1 lg:w-1/3">Darts</li>
                <li class="mx-1 lg:w-1/3">MPR</li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in rows"
          :key="row.name"
          class="border-b border-dart-blue-tertiary text-sm leading-143"
        >
          <td class="border border-r border-dart-blue-tertiary px-6 py-[10px] text-center">
            {{ row.name }}
          </td>
          <td class="border border-r border-dart-blue-tertiary px-6">
            <ul class="flex w-full">
              <li
                v-for="(score, index) in row.match"
                :key="score + index"
                class="w-1/3 text-center"
              >
                {{ score }}
              </li>
            </ul>
          </td>
          <td class="border border-r border-dart-blue-tertiary px-6">
            <ul class="flex w-full">
              <li
                v-for="(point, index) in row.points"
                :key="point + index"
                class="w-1/3 text-center"
              >
                {{ point }}
              </li>
            </ul>
          </td>
          <td class="px-6">
            <ul class="flex w-full">
              <li
                v-for="(cricket, index) in row.cricket"
                :key="cricket + index"
                class="w-1/3 text-center"
              >
                {{ cricket }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
      <tfoot class="bg-dart-table-green text-white">
        <tr class="text-sm leading-143">
          <td
            class="rounded-bl-10 border border-r border-white px-6 py-[10px] text-center font-semibold"
          >
            All Games Played (AGP)
          </td>
          <td class="border border-r border-white px-6 font-semibold">
            <ul class="flex w-full">
              <li class="w-1/3 text-center">n/a</li>
              <li class="w-1/3 text-center">1</li>
              <li class="w-1/3 text-center">15</li>
            </ul>
          </td>
          <td class="border border-r border-white px-6 font-semibold">
            <ul class="flex w-full">
              <li class="w-1/3 text-center">15,018</li>
              <li class="w-1/3 text-center">500</li>
              <li class="w-1/3 text-center">335.54</li>
            </ul>
          </td>
          <td class="rounded-br-10 px-6">
            <ul class="flex w-full">
              <li class="w-1/3 text-center">-</li>
              <li class="w-1/3 text-center">-</li>
              <li class="w-1/3 text-center">-</li>
            </ul>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
const rows = [
  {
    name: 'Dudeney',
    match: ['3', '0', '3'],
    points: ['4,043', '150', '80.86'],
    cricket: ['-', '-', '-'],
  },
  {
    name: 'Lorem Ipsum',
    match: ['2', '0', '2'],
    points: ['3,403', '100', '85.65'],
    cricket: ['-', '-', '-'],
  },
  {
    name: 'Bottenberg',
    match: ['6', '1', '6'],
    points: ['4,169', '150', '83.38'],
    cricket: ['-', '-', '-'],
  },
  {
    name: 'Lorem Ipsum',
    match: ['2', '0', '2'],
    points: ['3,403', '100', '85.65'],
    cricket: ['-', '-', '-'],
  },
]
</script>
