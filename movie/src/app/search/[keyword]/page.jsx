import Movie from '@/components/Movie'
import React from 'react'

const Page =async ({params}) => {
    const keyword = params.keyword
    const res = await fetch(`https://api.themoviedb.org/3//search/movie?api_key=b37c04a4e6a0f68c76efea44c1f4c273&query=${keyword}&language-en-US&include_adult-false`)
    const data = await res.json()
    return (
    <div>{
    !data?.results ? 
    <div>Bulunamadı</div> 
    :
        
            data?.results?.map((dt,i) => {
                <Movie key={i} dt={dt}/>
            })
        
    }</div>
  )
}

export default Page