module.exports = (req, res) => {
  return res.status(200).json({
    message: "API online",
    salutation: "Hello Renan-san",
  });
};
