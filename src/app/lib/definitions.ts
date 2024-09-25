import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email('Email is required'),
  password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
});
