'use client' // to say Nextjs to run on client side

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { Button } from '@nextui-org/button'

import { GitHubIcon } from './icon'
// * Recibo el estado de la sesión y renderizo el botón dependiendo del estado

export const AuthButton = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback' // TODO create endpoint to save info in a cookie
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header>
      {
        session === null
          ? (
            <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
              <GitHubIcon />
              Sign in with Github
            </button>
            )
          : <Button onClick={handleSignOut}>Sign Out</Button>
      }

    </header>
  )
}
