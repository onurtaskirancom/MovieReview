const { sendError } = require('../utils/helper');
const cloudinary = require('../cloud');
const Movie = require('../models/movie');
const { isValidObjectId } = require('mongoose');

exports.uploadTrailer = async (req, res) => {
  const { file } = req;
  if (!file) return sendError(res, 'Video file is missing!');

  const { secure_url: url, public_id } = await cloudinary.uploader.upload(
    file.path,
    {
      resource_type: 'video',
    }
  );
  res.status(201).json({ url, public_id });
};

exports.createMovie = async (req, res) => {
  const { file, body } = req;

  const {
    title,
    storyLine,
    director,
    releseDate,
    status,
    type,
    genres,
    tags,
    cast,
    writers,
    poster,
    trailer,
    language,
  } = body;

  const newMovie = new Movie({
    title,
    storyLine,
    releseDate,
    status,
    type,
    genres,
    tags,
    cast,
    trailer,
    language,
  });

  if (director) {
    if (!isValidObjectId(director))
      return sendError(res, 'Invalid director id!');
    newMovie.director = director;
  }

  if (writers) {
    for (let writerId of writers) {
      if (!isValidObjectId(writerId))
        return sendError(res, 'Invalid writer id!');
    }

    newMovie.writers = writers;
  }
};
