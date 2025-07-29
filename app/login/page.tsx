'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginSchema, LoginSchema } from '@/schemas/authentication'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = (data: LoginSchema) => {
    console.log(data)
  }

  return (
    <div className='h-screen w-full bg-white sm:bg-gray-100 flex items-center justify-center'>
      <Card className='border-none shadow-none rounded-md p-0 bg-transparent sm:bg-white mx-4 max-w-[400] w-full'>
        <CardContent className='w-full px-4 py-10 flex justify-center flex-col items-center gap-6'>
          <Image
            src='/company-logo.svg'
            alt='company-logo'
            width={0}
            height={0}
            style={{ width: 134 }}
            priority
          />

          <form
            className='flex flex-col gap-6 w-full'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-3'>
              {/* USERNAME */}
              <div className='grid w-full max-w-sm items-center gap-1'>
                <div className='grid gap-2'>
                  <Label htmlFor='username'>Username</Label>
                  <Input
                    type='text'
                    id='username'
                    placeholder='Input username'
                    {...register('username')}
                  />
                </div>

                <p className='text-red-500 text-xs ml-2'>
                  {errors.username?.message}
                </p>
              </div>

              {/* PASSWORD */}
              <div className='grid w-full max-w-sm items-center gap-2'>
                <div className='grid gap-2'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    type='password'
                    id='password'
                    placeholder='Input password'
                    {...register('password')}
                  />
                </div>

                <p className='text-red-500 text-xs ml-2'>
                  {errors.password?.message}
                </p>
              </div>
            </div>

            <Button size='lg' type='submit'>
              Login
            </Button>
          </form>

          <div className='flex items-center gap-1'>
            <p className='text-sm'>Don’t have an account?</p>
            <Link className='text-sm text-blue-600 underline' href='/register'>
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login
