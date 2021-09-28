module.exports = (req, res, next) => {
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);
  console.log(pageAsNumber);

  let page = 0;
  if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
    page = pageAsNumber;
  }

  let size = 10;
  if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)){
    size = sizeAsNumber;
  }
  console.log(size);
  req.pagination = {
    page, size
  }
  next();
}