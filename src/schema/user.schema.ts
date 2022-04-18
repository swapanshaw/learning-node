import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
        body: object({
                name: string({required_error: 'Name  is Required'}),
                email: string({required_error: 'email  is Required'}).email('Not a valid email'),
                password: string({required_error: 'password  is Required'}),
                confirmPassword: string({required_error: 'confirmPassword  is Required'})
            }).refine((data) => data.password === data.confirmPassword, {
                message: "Password do not match",
                path: ['passwordConfiormation']
        })
})


export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>,
  "body.confirmPassword">;