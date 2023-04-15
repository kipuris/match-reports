<template>
  <div
    class="relative flex w-full items-center justify-start gap-7 rounded-10 bg-white p-5 shadow-dart-card before:absolute before:inset-0 before:h-full before:w-[5px] before:rounded-l-full before:content-[''] lg:w-1/2"
    :class="props.data.bgColor"
  >
    <div class="text-sm leading-143 tracking-wide">
      <h5 class="mb-1 font-semibold text-dart-dark-primary">{{ props.data.title }}</h5>
      <span> {{ props.data.subtitle }} </span>
    </div>
    <IconSvg name="card-icon" class="absolute bottom-0 right-3" />
  </div>
</template>

<script setup>
import IconSvg from './IconSvg.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>
