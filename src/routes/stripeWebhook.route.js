const express = require("express");

const rawBodyMiddleware = require("../middleware/rawBody.middleware");
const stripeWebhookHandler = require("../handlers/stripeWebhook.handler");

const router = express.Router();

/**
 * IMPORTANT
 * rawBodyMiddleware DOIT être avant le handler
 */
router.post(
  "/stripe/webhook",
  rawBodyMiddleware,
  stripeWebhookHandler
);

module.exports = router;