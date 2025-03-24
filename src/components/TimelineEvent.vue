<template>
  <div class="timeline-event" :class="{ 'right': isRight }">
    <div class="event-content">
      <div class="event-date">{{ formattedDate }}</div>
      <h3 class="event-title">{{ event.title }}</h3>
      <p class="event-description">{{ event.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  event: {
    type: Object,
    required: true
  },
  isRight: {
    type: Boolean,
    default: false
  }
})

const formattedDate = computed(() => {
  return dayjs(props.event.date).format('YYYY年MM月DD日')
})
</script>

<style scoped>
.timeline-event {
  position: relative;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}

.timeline-event.right {
  margin-left: 50%;
}

.event-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.event-content::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #4CAF50;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-event:not(.right) .event-content::before {
  right: -40px;
}

.timeline-event.right .event-content::before {
  left: -40px;
}

.event-date {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 8px;
}

.event-title {
  margin: 0 0 10px;
  color: #333;
}

.event-description {
  margin: 0;
  color: #666;
  line-height: 1.5;
}
</style>