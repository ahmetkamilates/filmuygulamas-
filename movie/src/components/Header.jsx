"use client"
import React, { useState } from 'react'
import {BiSearch} from "react-icons/bi"
import MenuItem from './MenuItem'
import ThemeComp from './ThemeComp'
import { useRouter } from 'next/router'

const Header = () => {
    const [keyword,setKeyword] = useState('') 
    const router = useRouter()
    const menu = [
        {
            name:"About",
            utl:"/about"
        },
        {
            name:"Sign In",
            url:"/login"
        }
    ]
    const searchFunc = (e) => {
        if(e.key == "Enter" && keyword.length >= 3){
                router.push(`/search/${keyword}`)
        }
    }
  return (
    <div className='flex items-center gap-7 h-20 p-5'>
        <div className='bg-amber-300 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
        <div className='flex flex-1 items-center gap-2 border p-3 rounde-lg'>
    const [keyword,setKeyword] = useState('') 
            <input onKeyDown={searchFunc} onChange={e => (e.target.value)} className='outline-none flex-1 bg-transparent' placeholder='Arama Yapınız' type="text" />
            <BiSearch size={25}/>
        </div>
        <ThemeComp/>
        {
            menu.map((mn,i) =>(
                <MenuItem mn={mn} key={i}/>
            ))
        }
    </div>
  )
}

export default Header