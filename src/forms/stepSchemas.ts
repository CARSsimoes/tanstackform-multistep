import { object, string, email, minLength, pipe } from 'valibot'

export const stepOneSchema = object({
  firstName: pipe(string(), minLength(2, 'At least 2 characters')),
  email: pipe(string(), email('Invalid email')),
})

export const stepTwoSchema = object({
  age: string(),
  country: string(),
})
