import axios from 'axios'

const url = 'http://localhost:5000'

export const getAllClients = (page, count) => {
	return new Promise((resolve, reject) => {
		axios.get(`${url}/api/clients?page=${page}&count=${count}`).then(res => {
			resolve(res?.data)
		})
	})
}

export const getClientData = id => {
	return new Promise((resolve, reject) => {
		axios.get(`${url}/api/records?id=${id}`).then(res => {
			resolve(res?.data)
		})
	})
}