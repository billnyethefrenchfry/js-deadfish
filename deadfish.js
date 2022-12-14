export function deadfish (code, ascii) {
	let a = 0
	let x = []
	if (typeof(code) === "string") {
		let c = code.split("")
		for (let i = 0; i < code.length; i++) {
			switch (c[i]) {
				case 'i':
					a++
					break
				case 'd':
					a--
					break
				case 's':
					a *= a
					break
				case 'o':
					x.push(a)
					break
				default:
					break
			}
			if (a == 256 || a < 0) {
				a = 0
			}
		}
	}
	if (ascii === true) {
		return String.fromCharCode.apply(null, x)
	} else {
		return x
	}
}
