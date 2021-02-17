const db = require('../database');

module.exports = {
  getOne(callback) {
    let queryString = 'select * from users where id = 1'
    db.query(queryString, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })
  },
  patchOne(params, callback) {
    let queryString = 'update users set reactScore = ?, aimScore = ?, numScore = ?, seqScore = ?, verbalScore = ?, chimpScore = ? where id = 1'

    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })
  },
  updateAimScore(params, callback) {
    let queryString = 'update users set aimScore = ? where id = 1';
    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })

  },
  updateReactScore(params, callback) {
    let queryString = 'update users set reactScore = ? where id = 1';
    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })

  },
  updateNumScore(params, callback) {
    let queryString = 'update users set numScore = ? where id = 1';
    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })

  },
  updateVerbScore(params, callback) {
    let queryString = 'update users set verbalScore = ? where id = 1';
    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })

  },
  updateSeqScore(params, callback) {
    let queryString = 'update users set seqScore = ? where id = 1';
    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })

  },
  updateChimpScore(params, callback) {
    let queryString = 'update users set chimpScore = ? where id = 1';
    db.query(queryString, params, (err, results) => {
      err ? callback(err, null) : callback(null, results);
    })
  }
}