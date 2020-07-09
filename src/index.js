const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Sign Up'
    })
})

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page'
    })
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        title: 'Scheduler'
    })
})



app.get('*', (req, res) => {
    res.render('404', {
        title: '404', 
        text: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})




