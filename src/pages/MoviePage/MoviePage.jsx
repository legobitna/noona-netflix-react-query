import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchMoviesQuery } from '../../hooks/useSearchMovies'

const MoviePage = () => {
  const [query,setQuery] = useSearchParams()
  const keyword=query.get('q')
  const {isLoading,isFetching,isError,error,data} = useSearchMoviesQuery(keyword) 
  console.log("rrrr",data)
  return (
    <div>MoviePage</div>
  )
}

export default MoviePage