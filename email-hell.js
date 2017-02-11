const log = require('./email_log').emails;

var repeats = log
	.reduce((prev, {email}) => {
		prev[email] = (prev[email] | 0) + 1;
		return prev;
	}, {});
