import { z } from 'zod/v4';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.email(),
  isAdmin: z.boolean().default(false),
});

export type User = z.infer<typeof UserSchema>;

const validData = {
  id: 1,
  name: 'Alice',
  email: 'alice@mail.com',
  isAdmin: true,
};

const result1 = UserSchema.safeParse(validData);
// console.log('Success:', result1.success);
// console.log('Data:', result1.data);

const invalidData = { id: 'abc', name: 'A', email: 'not-an-email' };
const result2 = UserSchema.safeParse(invalidData);
// console.log('Success: ', result2);

if (!result2.success) {
  console.log(z.prettifyError(result2.error));
}
