<script setup>
import { ref } from 'vue'
import TimelineEvent from './components/TimelineEvent.vue'
import { timelineEvents } from './data/timeline.js'

const events = ref(timelineEvents)
</script>

<template>
  <div class="container">
    <header>
      <h1>AI 发展大事记 (2022-2023)</h1>
      <p>记录人工智能领域的重要里程碑事件</p>
    </header>
    
    <div class="timeline">
      <div class="timeline-line"></div>
      <TimelineEvent
        v-for="(event, index) in events"
        :key="event.date"
        :event="event"
        :isRight="index % 2 === 1"
      />
    </div>
  </div>
</template>

<style>
:root {
  --primary-color: #4CAF50;
  --background-color: #f5f5f5;
  --text-color: #333;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

header {
  text-align: center;
  margin-bottom: 60px;
}

header h1 {
  margin: 0;
  font-size: 2.5em;
  color: var(--primary-color);
}

header p {
  margin: 10px 0 0;
  color: #666;
  font-size: 1.2em;
}

.timeline {
  position: relative;
  padding: 40px 0;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--primary-color);
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  .timeline-event {
    width: 100% !important;
    margin-left: 0 !important;
  }

  .timeline-line {
    left: 20px;
  }

  .timeline-event .event-content::before {
    left: -40px !important;
  }
}
</style>