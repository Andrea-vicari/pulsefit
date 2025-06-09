const express = require('express');
const multer = require("multer");
const path = require('path');
const Users = require('../models/UserModel');
const cloudinary = require('cloudinary').v2;




const router = express.Router();

async function handleUpload(file) {

    const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    });
    console.log(res)
    return res;
}

const storage = new multer.memoryStorage();

const upload = multer({
  storage,
});



router.post("/upload", upload.single("my_file"), async (req, res) => {
	try {
	  const b64 = Buffer.from(req.file.buffer).toString("base64");
	  let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

	  const cldRes = await handleUpload(dataURI);

	  res.json(cldRes);
	} catch (error) {
	  console.log(error);
	  res.send({
		message: error.message,
	  });
	}
  });

  const {signupUser, loginUser, deleteUser, seeAllUser, forgotPassword, resetPassword, getSingleUser, modificaURLimmagine} = require('../controllers/userController');

// See All
router.get('/', seeAllUser)

// See single user
router.get('/:id', getSingleUser);

// Delete a user
router.delete('/cancella-singolo-utente/:id', deleteUser)

// SignUp
router.post('/signup', signupUser);

// Login
router.post('/login', loginUser);

// Forgot password
router.post('/forgot-password', forgotPassword)

// Reset password
router.post('/reset-password/:token', resetPassword)

router.patch('/aggiungi-immagine-utente/:id', modificaURLimmagine);




module.exports = router;
