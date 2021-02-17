const models = require('../models');

module.exports = {
  getOne(req, res) {
    models.hackrBench.getOne((err, results) => {
      err ? res.staus(400).send('Cannot GET from MySQL db') : res.send(results);
    })
  },
  patchOne(req, res) {
    let params = [
      req.body.reactScore,
      req.body.aimScore,
      req.body.numScore,
      req.body.seqScore,
      req.body.verbalScore,
      req.body.chimpScore
    ];

    models.hackrBench.patchOne(params, (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })
  },
  updateAimScore(req, res) {
    models.hackrBench.updateAimScore([req.body.aimScore], (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })
  },
  updateReactScore(req, res) {
    models.hackrBench.updateReactScore([req.body.reactScore], (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })

  },
  updateNumScore(req, res) {
    models.hackrBench.updateNumScore([req.body.numScore], (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })

  },
  updateVerbScore(req, res) {
    models.hackrBench.updateVerbScore([req.body.verbScore], (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })

  },
  updateSeqScore(req, res) {
    models.hackrBench.updateSeqScore([req.body.seqScore], (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })

  },
  updateChimpScore(req, res) {
    models.hackrBench.updateAimScore([req.body.chimpScore], (err, results) => {
      err ? res.staus(400).send('Cannot UPDATE MySQL db') : res.send(results);
    })

  }
}