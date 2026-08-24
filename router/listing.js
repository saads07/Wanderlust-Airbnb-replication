const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingControler = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingControler.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControler.AddNewListing)
  );

//New route
router.get("/new", isLoggedIn, wrapAsync(listingControler.CreateNewListing));

router
  .route("/:id")
  .get(wrapAsync(listingControler.ShowListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControler.UpdateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingControler.DeleteListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,

  wrapAsync(listingControler.EditListing)
);

module.exports = router;
