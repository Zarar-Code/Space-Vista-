import React from 'react'
import SideNavbar from './Navside/SideNav'

const AdminHome = () => {
  return (
    <div><SideNavbar/>
    <div id='main'>

              <div class="flex flex-col min-h-[100dvh]">
                <main class="flex-1">
                  <section class="w-full h-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div class="container flex flex-col items-center justify-center px-4 md:px-6 space-y-4 text-center xl:flex-row xl:space-y-0">
                      <div class="space-y-2">
                        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[4.5rem]/none xl:text-7xl/none">
                          Welcome to Space Vista
                        </h1>
                        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                          The perfect place to work, connect, and grow. Experience the future of work.
                        </p>
                      </div>
                    </div>
                  </section>
              
                </main>
              
              </div>
    </div>
    </div>
  )
}

export default AdminHome