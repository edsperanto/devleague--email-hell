const log = require('./email_log').emails;

var repeats = log
	.reduce((prev, {email}) => {
		if(prev.some(({addr}) => addr === email)) {
			return prev.map((elem) => {
				if(elem.addr === email) elem.num += 1;
				return elem;
			});
		}else{
			prev.push({addr: email, num: 0});
			return prev;
		}
	}, []);

