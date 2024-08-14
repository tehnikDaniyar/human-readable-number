module.exports = function toReadable(number) {
	const simple = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty'
	];

	const decade = [
		'#',
		'##',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety'
	];


	if (number <= 20) {
		return simple[number];
	};

	let arrNum = `${number}`.split('');
	let resArr = [];
	let m = false;

	if (`${number}`[1] === '1') {
		m = true;
	}


	if (number < 100) {
		arrNum.map((num, i) => {
			i === 0 && num !== '1' ? resArr.push(decade[Number(num)]) :
				i === 1 && num != '0' ? resArr.push(simple[Number(num)]) :
					'';
		});
		return resArr.join(' ');
	};


	if (number >= 100) {
		arrNum.map((num, i) => {
			i === 0 ? resArr.push(`${simple[Number(num)]} hundred`) :
				i === 1 ? num === '0' ? '' :
					num === '1' ? resArr.push(simple[Number(`${number}`.slice(1))]) :
						resArr.push(decade[Number(num)]) :
					i === 2 && num !== '0' && !m ? resArr.push(simple[Number(num)]) : '';
		});
		return resArr.join(' ');
	}
};
