//controllers
const quizModel = require('./tourModel');

exports.checkNamePrice = (req, res, next) => {
	if (!req.name || !req.price) {
		return res.status(400).json({
			status: 'Fail',
			message: 'Bad Request'
		});
	}
	next();
};
//Tours routes
exports.getAllTour = async (req, res) => {
	try {
		const tours = await Tour.find();
		console.log(req.requestTime);
		res.status(200).json({
			status: 'success',
			requestAt: req.requestTime,
			results: tours.length,
			data: { tours: tours }
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: `${err}`
		});
	}
};

exports.getTour = async (req, res) => {
	try {
		const tour = await Tour.findById(req.params.id); //params give access to the url req
		res.status(200).json({
			status: 'success',
			requestAt: req.requestTime,
			data: { tour: tour }
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: `${err}`
		});
	}
};

exports.createTour = async (req, res) => {
	try {
		const newTour = await Tour.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				tour: newTour
			}
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: `Bad Request ${err}`
		});
	}
};

exports.updateTour = async (req, res) => {
	try {
		const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});
		res.status(200).json({ status: 'success', data: { tour: tour } });
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: `${err}`
		});
	}
};

exports.deleteTour = async (req, res) => {
	try {
		await Tour.findByIdAndDelete(req.params.id);
		res.status(204).json({ status: 'success', data: null });
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: `${err}`
		});
	}
};