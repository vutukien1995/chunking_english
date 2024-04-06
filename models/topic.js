import { Schema, model, models } from 'mongoose'

const TopicSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    require: [true, 'Name is required.'],
  },
  chunks: [{
    key: { type: String },
    answers: [{ type: String }],
  }],
  extensions: [
    { type : String }
  ]
})

const Topic = models.Topic || model('Topic', TopicSchema)

export default Topic