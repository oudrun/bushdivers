import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import axios from 'axios'
import AppLayout from '../../Shared/AppLayout'
import Card from '../../Shared/Elements/Card'
import TextInput from '../../Shared/Elements/Forms/TextInput'

const Jumpseat = ({ user, spent, balance }) => {
  const [airport, setAirport] = useState('')
  const [icao, setIcao] = useState('')
  const [transfer, setTransfer] = useState('')
  const [error, setError] = useState(null)
  const [distance, setDistance] = useState(null)
  const [price, setPrice] = useState(-1)

  const handleChange = async (e) => {
    setError(null)
    setAirport(null)
    setIcao(e.target.value)
    if (e.target.value.length >= 3) {
      const response = await axios.get(`/api/airport/search/${e.target.value}`)
      if (response.data.airport) {
        setAirport(`${response.data.airport.identifier} - ${response.data.airport.name}`)
        setTransfer(response.data.airport.identifier)
        setError(null)
        const priceResp = await axios.get(`/api/jumpseat/cost/${user.current_airport_id}/${response.data.airport.identifier}`)
        console.log(priceResp)
        if (priceResp.status === 200) {
          setPrice(priceResp.data.cost)
          setDistance(priceResp.data.distance)
        } else {
          setError('Cannot calculate price')
        }
      } else {
        setError('No airport found')
      }
    }
  }

  const processJumpseat = () => {
    if (!transfer) {
      setError('Please specify an airport to transfer to')
      return
    }
    if (balance < price) {
      setError('You do not have sufficient funds to transfer here')
      return
    }
    Inertia.post('/jumpseat', {
      cost: price,
      icao: transfer
    })
    setAirport('')
    setIcao('')
    setTransfer('')
    setPrice(-1)
    setDistance(null)
  }

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-start">
        <div className="lg:w-1/2 mx-2 mt-4">
          <Card>
          <div className="flex justify-between">
            <div className="w-1/2">
              <div>Current Location:</div>
              <div className="text-lg">{user.location.identifier} - {user.location.name}</div>
            </div>
            <div className="md:w-1/2">
              <TextInput id="dep" label="Transfer to (ICAO)" error={error} placeHolder="Enter ICAO" type="text" onChange={handleChange} value={icao} />
              {airport && <div className="text-sm mt-1">{airport}</div>}
            </div>
          </div>
          <div className="flex mt-4">
            {distance && (
              <div className="w-1/2 mx-4 text-center">
                <div>Distance</div>
                <div>{distance.toLocaleString()} nm</div>
              </div>
            )}
            {price >= 0
              ? (
                  <div className="w-1/2 mx-4 text-center">
                    <div>Price</div>
                    <div>${price.toLocaleString()}</div>
                  </div>
                )
              : <></>
            }
          </div>
          <div className="flex justify-end mt-12">
            <button className="btn btn-primary" onClick={() => processJumpseat()}>Purchase Ticket</button>
          </div>
          </Card>
        </div>
        <div className="lg:w-1/4 mx-2 mt-4 flex items-start">
          <Card title="Current Balance">
          <div className="flex flex-col text-center">
            <div className="text-xl mt-2">${parseFloat(balance).toLocaleString()}</div>
          </div>
          </Card>
        </div>
        <div className="lg:w-1/4mx-2 mt-4 flex items-start">
          <Card title="Spent on Jumpseat">
          <div className="flex flex-col text-center">
            <div className="text-xl mt-2">${parseFloat(spent).toLocaleString()}</div>
          </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

Jumpseat.layout = page => <AppLayout title="Jumpseat" children={page} heading="Jumpseat" />

export default Jumpseat
