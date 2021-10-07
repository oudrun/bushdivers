import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { usePage, Link } from '@inertiajs/inertia-react'
import DropdownTitle from '../Elements/DropdownTitle'

export default function NavBar () {
  const { auth } = usePage().props
  const UserName = () => {
    return (
      <>
        <span className="mx-2 mr-1">{auth.user && auth.user.pilot_id}</span>|<span className="ml-1">{auth.user && auth.user.private_name}</span>
      </>
    )
  }

  const PrivateLeftNav = () => {
    return (
      <>
        <div className="flex space-x-4">
          <Link href="/dashboard" className="nav-link">My Crew Page</Link>
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="nav-link">
                <span className="sr-only">Open Bush Divers HQ menu</span>
                <DropdownTitle title="Bush Divers HQ" />
              </Menu.Button>
            </div>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                <Menu.Item>
                  {({ active }) => <Link href="/hubs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Hubs</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/fleet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Fleet</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/roster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pilot Roster</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/ranks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Ranks and Awards</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Company Financials</a>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pilot Handbook</a>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bush Tracker</a>}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="nav-link">
                <span className="sr-only">Open Contracts</span>
                <DropdownTitle title="Contracts" />
              </Menu.Button>
            </div>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                <Menu.Item>
                  {({ active }) => <Link href="/contracts" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Find a Contract</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/bids" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Contracts {auth.user.current_bids > 0 ? <span>({auth.user.current_bids})</span> : <span>(0)</span> }</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Completed Contracts</a>}
                </Menu.Item>
                 <Menu.Item>
                  {({ active }) => <Link href="/dispatch" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Flight Dispatch</Link>}
                 </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
          <Link href="/liveflights" className="nav-link">Live Flights Map</Link>
        </div>
      </>
    )
  }

  const PrivateRightNav = () => {
    return (
      <>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="p-1 rounded-full text-gray-700 hover:bg-gray-50 focus:outline-none hidden lg:block"
          >
            <span className="sr-only">View notifications</span>
            <div className="h-6 w-6" aria-hidden="true"><i className="material-icons">notifications</i></div>
          </button>

          <Menu as="div" className="mx-3 relative">
            <div>
              <Menu.Button className="flex items-center text-sm hover:bg-gray-50 rounded-xl py-2 px-1">
                <span className="sr-only">Open user menu</span>
                <div className="flex items-center">{auth.user && <UserName />} <i className="material-icons md-18">expand_more</i></div>
              </Menu.Button>
            </div>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                <Menu.Item>
                  {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 lg:hidden">NOTAMs</a>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/logbook" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Logbook</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bank Account</a>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/jumpseat" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Jumpseat</Link>}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => <Link href="/logout" className="block px-4 py-2 pt-4 border-t text-sm text-gray-700 hover:bg-gray-50 border-t">Sign out</Link>}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </>
    )
  }

  const PublicLeftNav = () => {
    return (
      <>
        <div className="flex space-x-4">
          <a href="" className="nav-link">How we work</a>
          <Link href="/staff" className="nav-link">Bush Divers Team</Link>
          <Link href="/liveflights" className="nav-link">Live Map</Link>
          <Link href="/hubs" className="nav-link">Hubs</Link>
          <Link href="/fleet" className="nav-link">Fleet</Link>
        </div>
      </>
    )
  }

  const PublicRightNav = () => {
    return (
      <>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Link href="/register" className="btn btn-secondary mr-2">Join Us</Link>
          <Link href="/login" className="btn btn-primary">Crew Login</Link>
        </div>
      </>
    )
  }

  return (
    <Disclosure as="nav" className="bg-white border-b-2 shadow-sm z-10">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-50">
                  <span className="sr-only">Open main menu</span>
                  {open
                    ? (
                      <div className="block h-6 w-6" aria-hidden="true"><i className="material-icons">close</i></div>
                      )
                    : (
                      <div className="block h-6 w-6" aria-hidden="true"><i className="material-icons">menu</i></div>
                      )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <img
                      className="block lg:hidden h-9 w-auto"
                      src="https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png"
                      alt="Workflow"
                    />
                  </Link>
                  <Link href="/">
                    <img
                      className="hidden lg:block h-9 w-auto"
                      src="https://res.cloudinary.com/dji0yvkef/image/upload/v1628691598/BDLogo.png"
                      alt="Workflow"
                    />
                  </Link>
                  <span className="hidden lg:block ml-3">Bush Divers</span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  {!auth.user ? <PublicLeftNav /> : <PrivateLeftNav />}
                </div>
              </div>
                {!auth.user ? <PublicRightNav /> : <PrivateRightNav />}
            </div>
          </div>
          {!auth.user
            ? (
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="" className="nav-link mobile">How we work</a>
                  <a href="" className="nav-link mobile">Bush Divers Team</a>
                  <a href="" className="nav-link mobile">Live Map</a>
                  <a href="" className="nav-link mobile">Hubs</a>
                  <Link href="/fleet" className="nav-link mobile">Fleet</Link>
                </div>
              </Disclosure.Panel>
              )
            : (
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link href="/dashboard" className="nav-link mobile">My Crew Page</Link>
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="nav-link mobile">
                        <span className="sr-only">Open Bush Divers HQ menu</span>
                        Bush Divers HQ
                      </Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Hubs</a>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Route Map</a>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <Link href="/fleet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Fleet</Link>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pilot Roster</a>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Pilot Handbook</a>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Downloads</a>}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Menu as="div" className="relative">
                    <div>
                      <Menu.Button className="nav-link mobile">
                        <span className="sr-only">Open Flight Operations menu</span>
                        Flight Operations
                      </Menu.Button>
                    </div>
                    <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                      <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                        <Menu.Item>
                          {({ active }) => <Link href="/flights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Flight Search</Link>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Live Flights Map</a>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">My Bookings</a>}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Jumpseat</a>}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <a href="" className="nav-link mobile">Live Flights</a>
                </div>
              </Disclosure.Panel>
              )
          }
        </>
      )}
    </Disclosure>
  )
}
