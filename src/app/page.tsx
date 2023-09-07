import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AuthButtonServer } from '@/app/components/auth-button-server'
import PostCard from '@/app/components/post-card'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })

  // * Reviso si hay sesión sino redirecciono
  const { data: { session } } = await supabase.auth.getSession()
  if (session === null) redirect('/login')

  const { data: posts } = await supabase
    .from('posts')
    .select('*, user:users(name, avatar_url, user_name)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola Twitter
      <AuthButtonServer />

     {posts?.map(post => {
       const {
         id,
         user,
         content
       } = post
       const {
         name: userFullName,
         avatar_url: avatarUrl,
         user_name: userName
       } = user

       return (
      <PostCard
         key={id}
         userFullName={userFullName}
         userName={userName}
         avatarUrl={avatarUrl}
         content={content}
         />
       )
     })
     }
    </main>
  )
}
