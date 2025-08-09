<template>
  <div style="padding: 20px; border: 2px solid red; margin: 20px;">
    <h3>Debug Component</h3>
    
    <!-- Test simple input -->
    <div>
      <label>Simple HTML Input:</label>
      <input v-model="testValue" type="text" />
      <span>Value: "{{ testValue }}"</span>
    </div>
    
    <!-- Test atom component -->
    <div style="margin-top: 10px;">
      <label>Atom Component:</label>
      <BlInputAtom v-model="testValue" placeholder="Test atom" />
      <span>Value: "{{ testValue }}"</span>
    </div>
    
    <!-- Debug info -->
    <div style="margin-top: 10px; font-family: monospace; background: #f0f0f0; padding: 10px;">
      <pre>testValue: {{ JSON.stringify(testValue, null, 2) }}</pre>
      <pre>Reactive: {{ typeof testValue }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BlInputAtom } from './components';

const testValue = ref('Initial test value');
</script>
