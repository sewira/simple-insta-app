const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const complexityOptions = {
  min: 8,
  max: 30,
}

exports.register = async (req, res, next) => {
  try {
    const Schema = joi.object({
      email: joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .lowercase()
      .required(),
      username: joi.string().required(),
      password: passwordComplexity(complexityOptions),
    }).options({ abortEarly: false });

    const { value, error } = await Schema.validate(req.body);

    if(!error) next();
    if(error) {
      res.status(422).json({
        statusText: 'Unprocessable Entity',
        message: error.message
      });
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error"
    });
  }
}

exports.login = async (req, res, next) => {
  try {
    const Schema = joi.object({
      password: passwordComplexity(complexityOptions),
      username: joi.string().required()
    }).options({ abortEarly: false });
    
    const { value, error } = await Schema.validate(req.body);

    if(!error) next();
    if(error) {
      res.status(422).json({
        statusText: 'Unprocessable Entity',
        message: error.message
      });
    }
  } catch (error) {
    res.status(500).json({
      statusText: "Internal Server Error"
    });
  }
}

