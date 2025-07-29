'use strict'

const mongoose = require('mongoose')
const countConnect = () => { 
    const numConnetion = mongoose.connections.length
    console.log(`Current connections: ${numConnetion}`)
}

module.exports = {countConnect}
