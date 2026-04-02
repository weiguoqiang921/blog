import { useState, useEffect } from 'react'
import { getAllPosts, getPostById, Post } from '../utils/posts'

/**
 * 获取所有文章的 Hook
 */
export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}

/**
 * 获取单篇文章的 Hook
 */
export function usePost(id: string | undefined) {
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!id) {
      setLoading(false)
      return
    }

    getPostById(id)
      .then(p => setPost(p || null))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [id])

  return { post, loading, error }
}
