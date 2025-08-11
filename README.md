# tanstack-form-multistep

This project uses **TanStack Form (Vue)** as the form engine.  

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Prerequisites

- Familiar with Vue 3 Composition API
- Comfortable with basic form patterns
- Understand reactive `ref`/`computed` in Vue

---
## How It Works

- **useForm()** creates the form instance and manages all state & submission logic.
  - Should be defined in the parent form container (e.g., SimpleForm.vue).
- **form.Field** is the bridge between a single form field and the form state.
  - Uses a scoped slot that exposes { field, fieldState }.
- 🛑 **No v-model needed**
  - Instead: field.state.value for current value, field.handleChange and field.handleBlur for updates.
- Validation is done per-field using validators:
  - Supports onBlur, onChange and onChangeAsync.


---

## Some notes

- **Name is the contract →** must match the defaultValues keys exactly.
- **No v-model →** prevents unnecessary re-renders, keeps component logic clean.
- **Centralize validators ->** keeps rules reusable.
- **Headless →** plug into Tailwind, Element Plus or plain HTML easily.
