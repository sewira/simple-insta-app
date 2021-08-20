const cloudinary = require('../middleware/cloudinary');
const Content = require('../database/model/contentModel');
const User = require('../database/model/userModel');

exports.upload = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await User.findById(req.params.user_id);
    if (!user) {
      res.status(404).json({
        statusText: "Not Found",
        message: "User not found"
      });
    } else {
      const insertUrl = await new Content({
        userId: req.params.user_id,
        images: result.url
      });
      insertUrl.save(insertUrl);

      res.status(200).json({
        message: "OK",
        data: insertUrl
      });
    };
  } catch (error) {
    res.status(400).json({
      message: 'Something went wrong while processing your request',
      data: error.message
    });
  };
};

exports.getAllPost = async (req, res) => {
  try {
    const contents = await Content.find({ userId: req.params.user_id}).select('images -_id')
    if (!contents) {
      res.status(404).json({
        statusText: "Not Found",
        message: "Posts not found"
      });
    } else {
      res.status(200).json({
        statusText: "OK",
        data: contents
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      data: error.message
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const content = await Content.findOneAndDelete({images: req.body.url})
    if (!contents) {
      res.status(404).json({
        statusText: "Not Found",
        message: "Posts not found"
      });
    } else {
      res.status(200).json({
        statusText: "OK",
        data: content
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      data: error.message
    });
  }
}