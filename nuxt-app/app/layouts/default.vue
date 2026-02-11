<template>
  <div class="bg-sky-100 px-4 py-8">
    <p class="text-2xl text-sky-500">預設布局</p>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
