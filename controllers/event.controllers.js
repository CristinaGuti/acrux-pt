const Event = require('./../models/Event.model')


const createEvent = (req, res, next) => {

    const { title, date, location } = req.body

    Event
        .create({ title, date, location })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAllEvents = (req, res, next) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getEventsByLocation = (req, res, next) => {

    const { location } = req.body

    Event
        .find({ location: location })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getEventsByDate = (req, res, next) => {

    const { date } = req.body

    Event
        .find({ date: date })
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    createEvent,
    getAllEvents,
    getEventsByLocation,
    getEventsByDate
}