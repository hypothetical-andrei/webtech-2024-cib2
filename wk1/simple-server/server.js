import express from 'express'

const app = express()
app.use(express.json())

const cats = [{
    name: 'tim',
    weight: 5
}, {
    name: 'tom',
    weight: 7
}, {
    name: 'tam',
    weight: 8
}]

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/cats', (req, res) => {
    res.status(200).json(cats)
})

app.post('/cats', (req, res) => {
    cats.push(req.body)
    res.status(201).json({ message: 'cat added' })
})

app.listen(8080)