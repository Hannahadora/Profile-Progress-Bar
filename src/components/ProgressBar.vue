<template>
  <div style="margin: 50px auto">
    <div>
      <div @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
        <p class="title" style="cursor: pointer">
          Profile Progress Bar - {{ percentage }}%
        </p>
        <transition name="fade">
          <div class="tooltip" v-if="showTooltip && percentage !== 100">
            <p>Complete each field to boost your profile!</p>
          </div>
        </transition>
      </div>
    </div>
    <div class="progress-bar-wrapper">
      <div
        class="progress-bar-counter"
        :style="{ width: `${percentage}%`, background: [percentage < 50 && 'red', percentage >= 50 && percentage < 100 && 'yellow', percentage == 100 && 'green'],  }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const showTooltip = ref(false);

const percentage = computed(() => store.getters.getPercentageValue);
</script>

<style scoped>
.title {
  color: black;
  font-size: 40px;
  font-weight: 700;
  margin: 30px auto;
}
.progress-bar-wrapper {
  width: 100%;
  height: 30px;
  background: #d4d4d4;
  border-radius: 100px;
}
.progress-bar-counter {
  height: 30px;
  border-radius: 100px;
  transition: width 0.5s ease; /* Smoothly transition width changes over 0.5 seconds */
}
.percentage {
  color: green;
  font-size: 40px;
  font-weight: 700;
  padding: 30px;
}
</style>
