<template>
  <div
    class="relative flex items-center justify-start gap-6 rounded-10 bg-white p-5 shadow-dart-card before:absolute before:inset-0 before:h-full before:w-[5px] before:rounded-l-full before:bg-dart-red-primary before:content-['']"
  >
    <div
      class="text-sm leading-143 tracking-wide"
      v-for="(item, index) in props.data"
      :key="`${index} - ${item.title}`"
    >
      <h5 class="mb-1 font-semibold text-dart-dark-primary">{{ item.title }}</h5>
      <time v-if="item.isDatetime" :datetime="item.datetime">{{ item.value }}</time>
      <span v-else>{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>
