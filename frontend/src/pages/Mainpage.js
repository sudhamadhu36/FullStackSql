import React from 'react'
import Navbar from './Navbar'
import Navpage from './NavPage'

const MainPage = () => {
  return (
    <React.Fragment>
    <section className='md:w-2/2 md:mx-auto'>
        {/* navbar section */}
      <div className="bg-blue-100 h-20  centered">
          <Navbar/>

      </div>

      {/* navPage section */}
      <div className="bg-blue-100 h-screen w-full">
          <Navpage/>

      </div>
    </section>
  </React.Fragment>
  )
}

export default MainPage;