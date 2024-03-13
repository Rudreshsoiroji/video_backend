const asnycHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asnycHandler };

//method 1 using try catch

// const asnycHandler = (fn) => async (req, res, next) => {

//   try {

//     await fn(req,res,next)

//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })

//   }
// }

// const asnycHandler = (fn) => () => { }//higher order Function

// const asnycHandler = (fn) => { () => { } }//1
// const asnycHandler = (fn) => async ()=>{}//2
