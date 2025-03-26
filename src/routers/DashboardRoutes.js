import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/ui/heroes/HeroScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container mt-2'>
            <Routes>
                <Route exact path='/marvel' element={ <MarvelScreen/> } />
                <Route exact path='/hero/:heroeId' element={ <HeroScreen/> } />
                <Route exact path='/dc' element={ <DcScreen/> } />
                <Route exact path='/search' element={ <SearchScreen/> } />

                <Route path="*" element={<Navigate to ="/marvel" />}/>
            </Routes>
        </div>
    </>
  )
}
