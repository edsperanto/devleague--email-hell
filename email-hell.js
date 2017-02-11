const log = require('./email_log').emails;

var report = ({addr, num}) =>
	console.log(`${addr} received ${num} repeated emails`);
var repeats = log
	.reduce((prev, {email}) => {
		if(prev.some(({addr}) => addr === email)) {
			return prev.map((elem) => {
				if(elem.addr === email) elem.num += 1;
				return elem;
			});
		}else{
			prev.push({addr: email, num: 1});
			return prev;
		}
	}, [])
	.filter(({num}) => num > 1)
	.map(user => report(user));

