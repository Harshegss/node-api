module.exports = (req, res, next) => {
    console.log('middlewere excuted');
  
    next();
  };