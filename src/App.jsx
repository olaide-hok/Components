import React from 'react'
import Route from './components/Route'
import Sidebar from './components/Sidebar'
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import DropdownPage from './pages/DropdownPage'

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  )
}

export default App
