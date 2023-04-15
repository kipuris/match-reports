<template>
  <header class="bg-primary text-white">
    <div class="relative mx-auto hidden w-full items-center justify-center pb-8 pt-10 lg:flex">
      <div class="relative w-full max-w-screen-content">
        <IconSvg class="absolute -left-36 bottom-9 h-24 w-24" name="dartconnect-logo" />
        <nav class="mb-10 text-dart-blue-secondary" aria-label="primary">
          <a class="mr-5 hover:text-dart-blue-primary" href="#">Legacy Report</a>
          <a class="mr-5 hover:text-dart-blue-primary" href="#">Leaderboard</a>
          <a class="hover:text-dart-blue-primary" href="#">More Darts</a>
        </nav>
        <h1 class="mb-5 text-5xl font-semibold leading-112">Match Report</h1>
        <div class="text-2xl font-semibold leading-133 text-dart-blue-primary">
          <div>WDF World Championship Qualifiers 2022</div>
          <div>WC Qualifier Men</div>
        </div>
      </div>
      <IconSvg name="nav-element" class="absolute bottom-0 right-12" />
      <IconSvg name="shape-1" class="absolute -top-14 right-0" />
      <IconSvg name="shape-2" class="absolute bottom-0 right-96" />
    </div>
    <div class="lg:hidden">
      <nav class="text-dart-blue-secondary">
        <div class="mx-auto flex max-w-screen-xl flex-wrap items-center p-4">
          <a href="#" class="flex h-16 w-16 items-center">
            <IconSvg name="dartconnect-logo" />
          </a>
          <div class="mx-auto">
            <h1 class="mb-5 text-xl font-semibold leading-112">Match Report</h1>
            <div class="max-w-xs text-sm font-semibold leading-133 text-dart-blue-primary">
              <div>WDF WC Qualifiers 2022</div>
              <div>WC Qualifier Men</div>
            </div>
          </div>
          <button
            @click="toggleNavbar"
            data-collapse-toggle="navbar-hamburger"
            type="button"
            class="ml-auto inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full" id="navbar-hamburger">
            <ul class="mt-4 flex flex-col">
              <li class="rounded-10 bg-dart-dark-primary">
                <a href="#" class="block py-2 pl-3 pr-4 text-dart-blue-secondary">Legacy Report</a>
              </li>
              <li class="rounded-10">
                <a href="#" class="block py-2 pl-3 pr-4 text-dart-blue-secondary">Leaderboard</a>
              </li>
              <li class="rounded-10">
                <a href="#" class="block py-2 pl-3 pr-4 text-dart-blue-secondary">More Darts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import IconSvg from '@/components/IconSvg.vue'

const toggleNavbar = () => {
  const navbar = document.getElementById('navbar-hamburger')
  const toggle = document.querySelector('[data-collapse-toggle="navbar-hamburger"]')
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden')
    toggle.setAttribute('aria-expanded', 'true')
  } else {
    navbar.classList.add('hidden')
    toggle.setAttribute('aria-expanded', 'false')
  }
}
</script>
