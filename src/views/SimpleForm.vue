<script setup lang="ts">
import { useForm } from '@tanstack/vue-form'
import FieldInfo from '../components/FieldInfo.vue'

const form = useForm({
  defaultValues: {
    firstName: '',
    lastName: '',
    age: '',
    country: '',
  },
  onSubmit: async ({ value }) => {
    alert(JSON.stringify(value, null, 2))
  },
})

const validators = {
  firstName: {
    onBlur: ({ value }: { value: string }) =>
      !value
        ? 'First name is required'
        : value.length < 3
          ? 'Must be at least 3 characters'
          : undefined,
    onChangeAsyncDebounceMs: 300,
    onChangeAsync: async ({ value }: { value: string }) => {
      await new Promise((r) => setTimeout(r, 300))
      return value.includes('error') ? `No 'error' allowed in first name` : undefined
    },
  },
  lastName: {
    onBlur: ({ value }: { value: string }) =>
      !value ? 'Last name is required' : undefined,
  },
  age: {
    onBlur: ({ value }: { value: string }) =>
      !value
        ? 'Age is required'
        : isNaN(Number(value))
          ? 'Age must be a number'
          : undefined,
  },
  country: {
    onBlur: ({ value }: { value: string }) =>
      !value ? 'Country is required' : undefined,
  },
}
</script>

<template>
  <form @submit.prevent.stop="form.handleSubmit" class="simple-form">
    <div class="simple-form-fields">
      <form.Field name="firstName" :validators="validators.firstName">
        <template #default="{ field, state }">
          <label :for="field.name">First Name:</label>
          <input
            :id="field.name"
            :value="field.state.value"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <FieldInfo :state="state" />
        </template>
      </form.Field>

      <form.Field name="lastName" :validators="validators.lastName">
        <template #default="{ field, state }">
          <label :for="field.name">Last Name:</label>
          <input
            :id="field.name"
            :value="field.state.value"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <FieldInfo :state="state" />
        </template>
      </form.Field>

      <form.Field name="age" :validators="validators.age">
        <template #default="{ field, state }">
          <label :for="field.name">Age:</label>
          <input
            :id="field.name"
            :value="field.state.value"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <FieldInfo :state="state" />
        </template>
      </form.Field>

      <form.Field name="country" :validators="validators.country">
        <template #default="{ field, state }">
          <label :for="field.name">Country:</label>
          <input
            :id="field.name"
            :value="field.state.value"
            @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
            @blur="field.handleBlur"
          />
          <FieldInfo :state="state" />
        </template>
      </form.Field>
    </div>

    <div class="buttons">
      <form.Subscribe>
        <template #default="{ canSubmit, isSubmitting }">
          <button type="submit" :disabled="!canSubmit || isSubmitting">
            {{ isSubmitting ? 'Submitting...' : 'Submit' }}
          </button>
        </template>
      </form.Subscribe>
    </div>
  </form>
</template>

<style scoped>
.simple-form-fields {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 25px;
}

button {
  margin-top: 10px;
  background-color: rgb(93, 93, 238);
  color: white;
}

button:disabled {
  background-color: rgb(176, 176, 237);
  color: white;
}
</style>
