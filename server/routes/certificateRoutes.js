const express = require('express')

const router = express.Router()

const Certificate = require('../models/Certificate')

router.post('/', async (req, res) => {
  try {
    const certificate =
      await Certificate.create(req.body)

    res.status(201).json(certificate)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const certificates =
      await Certificate.find().sort({
        createdAt: -1,
      })

    res.json(certificates)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

router.get('/:certificateId', async (req, res) => {
  try {
    const certificate =
      await Certificate.findOne({
        certificateId:
          req.params.certificateId,
      })

    if (!certificate) {
      return res.status(404).json({
        message: 'Certificate not found',
      })
    }

    res.json(certificate)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
})

module.exports = router