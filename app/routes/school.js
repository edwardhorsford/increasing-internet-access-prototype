const {
  schoolWizardPaths,
  schoolWizardForks
} = require('../utils/school-wizard-paths')

/**
 * Family walkthrough routes
 */
module.exports = router => {
  router.get('/school/:view', function (req, res) {
    console.log(schoolWizardPaths(req))
    res.render(`school/${req.params.view}`, { paths: schoolWizardPaths(req) })
  })

  router.post('/school/:view', function (req, res) {
    const fork = schoolWizardForks(req)
    const paths = schoolWizardPaths(req)
    fork ? res.redirect(fork) : res.redirect(paths.next)
  })
}