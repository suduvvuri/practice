const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getDate();
    
    console.log(url, method, time);
    next()
    
    }

    module.exports = logger;