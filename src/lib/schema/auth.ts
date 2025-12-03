import { z } from "zod"

export const LoginSchema = z.object({
  password: z.string().min(1, "Access key is required")
})

export const SubscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address")
})

export const AssessmentSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  goals: z.string().min(5),
  challenges: z.string().min(5)
})
