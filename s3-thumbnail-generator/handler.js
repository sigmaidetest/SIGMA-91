let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);

exports.handler = (event, context, callback) => {
    rds.beginTransaction({
        instanceIdentifier: 'instance'
    }, function (error, connection) {
        if (error) { throw err; }
    });
}