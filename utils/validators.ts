import { z } from 'zod'

const searchByNameSchema = z.object({
  drinkName: z
    .string({ required_error: 'Digite ao menos um caracter' })
    .min(1, 'Digite ao menos um caractere'),
})

export { searchByNameSchema }
