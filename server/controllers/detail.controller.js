const db = require('../db')

class DetailController {
	async getClients(req, res) {
		const page = req.query.page
		const count = req.query.count
		const offset = (page * count) - count
		const result = await db.query(`select * from clients limit $1 offset $2`, [count, offset])
		const all = await db.query('select count(*) from clients')
		res.json({ list: result.rows, count: all?.rows[0].count, pages: Math.ceil(all?.rows[0].count/count) })
	}

	async getRecordsByClient(req, res) {
		const id = Number(req.query.id)
		console.log(id)
		const result = await db.query('select * from apps where client_id = $1', [id])
		res.json(result.rows)
	}
}

module.exports = new DetailController()