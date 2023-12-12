import Movie from '@/components/Movie'
import React from 'react'

const page =async ({searchParams}) => {
    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=b37c04a4e6a0f68c76efea44c1f4c273&language=en-US&page=1`,
    {next:{revalidate:10000}})

    const data = await res.json()


  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
      {
        data?.results?.map((dt,i) => {
          <Movie key={i} dt={dt}/>
        })
      }
    </div>
  )
}

export default page