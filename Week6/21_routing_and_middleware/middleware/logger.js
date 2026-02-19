const myLogger = (req, res, next) => {
    console.log(`This is middleware logger`);
    next(); 
};

module.exports = myLogger; 
