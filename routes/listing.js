const express = require("express");
const router = express.Router();

const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const multer = require("multer");
const {storage, cloudinary} = require("../cloudConfig.js");
const upload = multer({storage});

const listingController = require("../controllers/listings.js");

// New Route

router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/")
    .get(wrapAsync(listingController.index)) // Index Route
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing)); // Create Route

    router.route("/:id")
    .get(wrapAsync(listingController.showListing)) // Show Rote
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing)) // Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.deletedListing)); // Delete Route

// Edit Route

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing));

module.exports = router;

// // Index Route

// router.get("/", wrapAsync(listingController.index));

// // New Route

// router.get("/new", isLoggedIn, listingController.renderNewForm);

// // Show Route

// router.get("/:id", wrapAsync(listingController.showListing));

// // Create Route

// router.post("/", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.createListing));

// // Edit Route

// router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editListing));

// // Update Route

// router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing));

// // Delete Route

// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.deletedListing));

module.exports = router;