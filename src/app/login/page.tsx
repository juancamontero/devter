import { AuthButtonServer } from '@/app/components/auth-button-server'

export default function Login () {
  return (
        <section className='grid place-content-center min-h-screen bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-50'>
            <h1 className='font-bold mb-4'>Please login to continue...</h1>
            <AuthButtonServer />
        </section>
  )
}
