import express from 'express'

const app = express()
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.url)
    next()
})

app.use(express.static('public'))
app.use(express.json())

const cats = [{
    name: 'tim',
    id: 1
}, {
    name: 'tom',
    id: 2
}]
let currentCatId = 3

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/cats', (req, res) => {
    res.status(200).json(cats)
})

app.post('/cats', (req, res) => {
    let cat = req.body
    cat.id = currentCatId
    currentCatId++
    cats.push(cat)
    res.status(201).json({ message: 'cat added' })
})

app.get('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const catIndex = cats.findIndex(e => e.id === id)
    if (catIndex !== -1) {
        res.status(200).json(cats[catIndex])
    } else {
        res.status(404).json({ message: 'not found' })
    }
})
// rws-wfwt-wrs

app.put('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const catIndex = cats.findIndex(e => e.id === id)
    if (catIndex !== -1) {
        cats[catIndex].name = req.body.name
        res.status(202).json(cats[catIndex])
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

app.delete('/cats/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const catIndex = cats.findIndex(e => e.id === id)
    if (catIndex !== -1) {
        cats.splice(catIndex, 1)
        res.status(204).json({ message: 'deleted' })
    } else {
        res.status(404).json({ message: 'not found' })
    }
})

app.listen(8080)