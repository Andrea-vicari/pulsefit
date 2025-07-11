const express = require('express');

const {viewAllBookings, createNewBooking, viewSingleBooking, updateStatusBooking, viewBookingTBA, vediApprovate} = require('../controllers/bookingController');


const router = express.Router();


router.get('/', viewAllBookings);
router.post('/', createNewBooking);
router.get('/vedi-singola-prenotazione/:id', viewSingleBooking)
router.patch('/conferma-prenotazione/:id', updateStatusBooking)
router.get('/prenotazioni-da-approvare', viewBookingTBA)
router.get('/prenotazioni-approvate', vediApprovate)


module.exports = router;
