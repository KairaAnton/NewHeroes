module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  console.log('err :>> ', err);
  res.status(500).send({
    data: null,
    errors: [{ title: 'Internal server error' }]
  });
}