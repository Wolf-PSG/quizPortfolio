const mongoose = require('mongoose');
const Question = require('./questionModel');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A quiz must have a title'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  public: {
    type: Boolean,
    default: false,
  },
},
{
  // makes sure virtual properties are shown in outputs
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// quizSchema.pre(/^find/, function (next) { // whenever a find request is made - populates the questions field in the quiz with the requested data in Question
//   this.populate({
//     path: 'Question',

//   });
//   next();
// });

quizSchema.pre('save', function (next) {
  this.populate({
    path: 'user',
  });
  next();
});

// quizSchema.pre('save', async function (next) { // whenever a save is done on the db - fills the id in the questions field with the data in the 'Questions' document
//   const questionsPromise = this.questions.map(async (id) => await Question.findById(id));

//   this.questions = await Promise.all(questionsPromise); // overwrites the this.guides

//   next();
// });

const quizLayout = mongoose.model('Quiz', quizSchema);

module.exports = quizLayout;
