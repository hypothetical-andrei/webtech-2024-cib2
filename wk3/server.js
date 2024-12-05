import express from 'express'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my.db'
})

const Cat = sequelize.define('cat', {
    name: Sequelize.STRING
})

try {
    await sequelize.sync({ alter: true })
} catch (error) {
    console.warn(error)
}

const app = express()
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.url)
    next()
})

app.use(express.static('public'))
app.use(express.json())

// const cats = [{
//     name: 'tim',
//     id: 1
// }, {
//     name: 'tom',
//     id: 2
// }]
// let currentCatId = 3

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/cats', async (req, res) => {
    try {
        const cats = await Cat.findAll()
        res.status(200).json(cats)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: 'some error' })
    }
})

app.post('/cats', async (req, res) => {
    try {
        const cat = await Cat.create(req.body)
        res.status(201).json(cat)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: 'some error' })
    }
})

app.get('/cats/:id', async (req, res) => {
    try {
        const cat = await Cat.findByPk(req.params.id)
        if (cat) {
            res.status(200).json(cat)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: 'some error' })
    }
})
// rws-wfwt-wrs

app.put('/cats/:id', async (req, res) => {
    try {
        const cat = await Cat.findByPk(req.params.id)
        if (cat) {
            cat.name = req.body.name
            await cat.save()
            res.status(202).json(cat)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: 'some error' })
    }
})

app.delete('/cats/:id', async (req, res) => {
    try {
        const cat = await Cat.findByPk(req.params.id)
        if (cat) {
            await cat.destroy()
            res.status(204).json({})
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: 'some error' })
    }
})

app.listen(8080)