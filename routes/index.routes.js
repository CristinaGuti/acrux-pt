const router = require("express").Router()

const {
  createEvent,
  getAllEvents,
  getEventsByLocation,
  getEventsByDate
} = require("../controllers/event.controllers")


router.get("/", (req, res, next) => {
  res.json("All good in here")
})

router.post("/createEvent", createEvent)

router.get("/getAllEvents", getAllEvents)

router.get("/getEventsByLocation", getEventsByLocation)

router.get("/getEventsByDate", getEventsByDate)


module.exports = router
