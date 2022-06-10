import React, { useState, useEffect } from 'react'
import { getAllClients, getClientData } from './api'
import { List } from './components/list'
import { Pagination } from './components/pagination'
import { Loader } from './components/loader'
import { Maps } from './components/map'
import './index.css'

const fields = ['name', 'phone'] 

function App() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)
  const [markers, setMarkers] = useState([])
  const [client, setClient] = useState('')
  const [page, setPage] = useState(1)
  const [allPages, setAllPages] = useState(0)
  const [currentClient, setCurrentClient] = useState('')
  const count = 25

  useEffect(() => {
    getClients()
		// eslint-disable-next-line
  }, [])

  useEffect(() => {
    getClients()
		// eslint-disable-next-line
  }, [page])

  const getClients = () => {
    if (page && count) {
      setLoading(true)
      getAllClients(page, count).then(res => {
        setClients(res.list)
        setAllPages(res.pages)
        setLoading(false)
      })
    }
  }

  const getClientApps = (item) => {
    setLoading(true)
    getClientData(item.id).then(res => {
			setMarkers(res)
			setClient(item.name)
      setLoading(false)
    })
    setCurrentClient(item.id)
  }

  return (
    <>
      {loading && <Loader />}
      <div className='justify-content'>
        <div className="list">
          <div className='title'>Список клиентов</div>
          <div className="main-list">
            <List
              fields={fields}
              list={clients}
              itemClick={getClientApps}
              current={currentClient}
            />
          </div>
          <div className="pagination-bottom">
            <Pagination
              page={page}
              setPage={setPage}
              allPages={allPages}
            />
          </div>
        </div>
        <div className="map">
          <Maps 
						markers={markers}
						client={client}
					/>
        </div>
      </div>
    </>
  );
}

export default App;
