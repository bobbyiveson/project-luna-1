const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/share-documents-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var shareDocs = req.session.data['share-documents']
  
    // Check whether the variable matches a condition
    if (shareDocs == "I do not want to share my documents"){
      // Send user to next page
      res.redirect('/check-answers')
    } else {
      // Send user to ineligible page
      res.redirect('/what-will-happen-with-my-data')
    }
  
  })

module.exports = router
