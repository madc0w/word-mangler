const singleLetterReplacements = {
	b: 's',
	c: 'n',
	d: 'p',
	f: 'r',
	g: 'k',
	h: 'h',
	j: 'w',
	k: 'l',
	l: 'b',
	m: 'c',
	n: 'd',
	p: 'f',
	q: 'g',
	r: 'j',
	s: 'm',
	t: 'q',
	v: 't',
	w: 'v',
	x: 'x',
	z: 'z',
	r: 't',
};

const bigramReplacements = {
	bl: 'pr',
	br: 'pl',
	cc: 'n',
	ch: 'sh',
	ck: 'z',
	cl: 'sp',
	cr: 'fw',
	cr: 'm',
	ct: 'kt',
	dd: 'pp',
	dr: 'kl',
	ff: 'ss',
	fl: 'sl',
	fn: 'phn',
	fr: 'vr',
	gg: 'ck',
	gh: 'f',
	gl: 'sp',
	gn: 'cr',
	gr: 'kr',
	kl: 'bl',
	kr: 'sr',
	ld: 'x',
	ll: 'tt',
	nd: 'mp',
	ng: 'mr',
	nt: 'll',
	ph: 'ff',
	pl: 'wr',
	pr: 'br',
	rh: 'ch',
	sh: 'tch',
	sl: 'k',
	sp: 'tr',
	ss: 'ff',
	sr: 'vr',
	st: 'fr',
	th: 'f',
	tr: 'dr',
	tt: 'mm',
	tw: 'd',
	vr: 'gn',
	wr: 'gr',
	's ': 's ',
	ow: 'ew',
};

function go() {
	const input = document.getElementById('input-text').value;
	const sources = Object.keys(bigramReplacements).concat(Object.keys(singleLetterReplacements));
	const r = new RegExp(`(${sources.join('|')})`, 'ig');
	const output = input.replaceAll(r, match => {
		const isUcFirst = match[0] == match[0].toUpperCase();
		match = match.toLowerCase();
		const replacement = (match.length == 1 ? singleLetterReplacements : bigramReplacements)[match];
		return isUcFirst ? replacement[0].toUpperCase() + replacement.substring(1) : replacement;
	}).replaceAll('\n', '<br/>');
	document.getElementById('output-text').innerHTML = output;

	const msg = new SpeechSynthesisUtterance(output);
	speechSynthesis.speak(msg);

}
