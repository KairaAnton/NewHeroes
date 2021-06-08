const yup = require('yup');

const PAGINATION_SCHEMA = yup.object({
  page: yup.number().min(1),
  results: yup.number().min(1)
});

const reducePagination = async (req,res,next)=>{
  const {query:{page, results}} = req;

  console.log('page', page);
  console.log('results', results)

  const defaultPagination = {
    page: 1,
    results: 5,
  }

  const pagination = {
    ...defaultPagination,
    page,
    results
  }

  if(await PAGINATION_SCHEMA.isValid(pagination)) {
    req.pagination = pagination;
    //console.log('pagination', pagination)
    return next();
  }
  req.pagination = defaultPagination;
  next();
}

module.exports = reducePagination;