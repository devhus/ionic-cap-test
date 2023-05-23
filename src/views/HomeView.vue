

<template>
  <main style=" padding: 1rem; ">
    <div style=" margin-bottom: 1rem; ">
      <label>HTML Input</label>
      <div>
        <input v-model="inputValue" />
      </div>
    </div>
    
    <div style=" margin-bottom: 1rem; ">
      <label>HTML Input Updated using @input</label>
      <div>
        <input :value="inputValue" @input="inputValue = ($event.target as any).value" />
      </div>
    </div>

    <div style=" margin-bottom: 1rem; ">
      <label>HTML Input Updated using @change</label>
      <div>
        <input :value="inputValue" @change="inputValue = ($event.target as any).value" />
      </div>
    </div>

    <div style=" margin-bottom: 1rem; ">
      <label>Ionic Input</label>
      <div>
        <IonInput v-model="inputValue"></IonInput>
      </div>
    </div>

    <div style=" margin-bottom: 1rem; ">
      <label>Output</label>
      <div>
        {{ inputValue }}
      </div>
    </div>
  </main>
</template>
<script lang="ts" setup>
import { IonInput } from '@ionic/vue';
import { ref } from "vue";

const inputValue = ref('Try updating this input...');
</script>
