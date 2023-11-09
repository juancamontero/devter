import PostCard from './post-card'
import { type Post } from '@/app/types/posts'

export default function PostList ({ posts }: { posts: Post[] | null }) {
  return (
        <>
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
        </>
  )
}
