import mongoose from 'mongoose';
const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now,
	},
}, {
	timestamps: true, //agrega .automáticamente dos campos adicionales a tus documentos: createdAt y updatedAt
});

export default mongoose.model('Task', taskSchema);