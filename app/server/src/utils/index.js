// const convertArrayToPagedObject = (arr, itemsPerPage, currentPage) => ({
//   pageing: {
//     itemsPerPage: parseInt(itemsPerPage, 10) || 10,
//     currentPage: parseInt(currentPage, 10) || 1,
//     totalPages: Math.ceil(arr.length / itemsPerPage),
//     totalItems: arr.length,
//   },
//   results: arr.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage),
// });

const splitter = (string, divider, begin, end) => {
  const tokens = string.split(divider).slice(begin, end);
  const result = tokens.join(divider);
  return result
};


const handleHTTPError = (error, next) => next(error);

const HTTPError = (message, statusCode) => {
  const instance = new Error(message);
  instance.statusCode = statusCode;

  return instance;
}

export {
  // convertArrayToPagedObject,
  splitter,
  handleHTTPError,
  HTTPError,
}