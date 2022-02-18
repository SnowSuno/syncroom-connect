import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { roomId } = router.query

  return <p>Post: {roomId}</p>
}

export default Post
