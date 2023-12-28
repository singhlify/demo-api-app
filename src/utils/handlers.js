export const responseHandler = ({
  res,
  statusCode = 200,
  message = "Success",
  data = null,
}) => {
  return res.status(statusCode).json({ message, data });
};

export const errorHandler = ({
  res,
  error = "Something went Wrong",
  statusCode = 500,
}) => {
  if (error?.name === "ValidationError") {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(statusCode).json({
    error,
  });
};
