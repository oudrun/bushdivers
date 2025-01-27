import React, { useEffect } from 'react'
import NavBar from '../Shared/Navigation/NavBar'
import { Head, usePage } from '@inertiajs/inertia-react'
import Footer from '../Shared/Navigation/Footer'
import { Inertia } from '@inertiajs/inertia'

const Home = ({ stats }) => {
  const { auth } = usePage().props

  useEffect(() => {
    if (auth.user) Inertia.get('/dashboard')
  })

  return (
    <main className="flex flex-col h-screen">
      <Head title="Bush Divers Virtual Airline" />
      <NavBar />
      <div className="w-full m-0 bg-white py-12 px-4 mt-8">
        <div className="flex md:justify-center items-center flex-col">
          <img
            className="block h-32 w-auto"
            src="https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png"
            alt="Workflow"
          />
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1>Welcome to Bush Divers VA</h1>
              <h3>Bush flying in and around Papua New Guinea and Alaska</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col md:flex-row md:justify-center">
        <div className="stats shadow">
          <div className="stat bg-neutral">
            <div className="stat-title">Total Flights</div>
            <div className="stat-value">{stats?.flights}</div>
          </div>
          <div className="stat bg-neutral">
            <div className="stat-title">Total Pilots</div>
            <div className="stat-value">{stats?.pilots}</div>
          </div>
          <div className="stat bg-neutral">
            <div className="stat-title">Regions</div>
            <div className="stat-value">2</div>
          </div>
          <div className="stat bg-neutral">
            <div className="stat-title">Hubs</div>
            <div className="stat-value">{stats?.hubs}</div>
          </div>
        </div>
      </div>
      <div className="w-full p-4" style={{ backgroundImage: 'url(img/bg-2.jpg)' }}>
        <div className="text-white my-3 w-auto rounded p-4 w-3/4" style={{ background: 'rgba(0,0,0,0.51)' }}>
          <div className="text-5xl">Our story</div>
          <div className="mt-4 text-2xl leading-relaxed">
            We are a community of pilots focused on one thing, bush flying! Disregarding the ho-hum of big jets and long airfields we opt for the dangers of low and slow flying through rugged terrain and ever-changing weather landing at the most remote and inhospitable airfields in aviation history.<br /><br />Ponder this, will you? The weather is closing in. The intended landing strip is at 5364ft above sea level and clings to the side of a jungle covered mountain. Perhaps 1000ft long, this runway is the only connection the local people have with the outside world. You think you can see the end of the grass strip protruding from a bank of cloud. Do you commit? This is the daily decision making of a Bush Diver, landing our aircraft on dangerous and remote strips, surrounded by hazardous terrain and often with rapidly changing weather conditions and visibility. Bush Divers is a bush flying focused virtual airline with a strong community of fellow bush flying enthusiasts.
            To find out more about Bush Divers, head to our main <a className="text-white underline" href="https://www.bushdivers.com/" target="_blank" rel="noreferrer">information site</a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
