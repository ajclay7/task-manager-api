const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	// userCreateIndex is depreciated and true by default
	// useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});
