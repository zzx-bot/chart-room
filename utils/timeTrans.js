export const dateTime = (oldTime) => {
	let nowTime = new Date()
	let d = oldTime.getTime()
	let h = oldTime.getHours()
	let m = oldTime.getMinutes()
	let Y = oldTime.getFullYear()
	let M = oldTime.getMonth() + 1
	let D = oldTime.getDate()

	let nd = oldTime.getTime()
	let nh = oldTime.getHours()
	let nm = oldTime.getMinutes()
	let nY = oldTime.getFullYear()
	let nM = oldTime.getMonth() + 1
	let nD = oldTime.getDate()
	if (D === nD && M === nM && Y === nY) {
		h.toString().padStart(2, "0")
		m.toString().padStart(2, "0")
		return h + ':' + m
	}

	if (D + 1 === nD && M === nM && Y === nY) {
		h.toString().padStart(2, "0")
		m.toString().padStart(2, "0")
		return '昨天' + h + ':' + m
	}

	if (D + 1 < nD && M === nM && Y === nY) {
		h.toString().padStart(2, "0")
		m.toString().padStart(2, "0")
		return Y + '/' + M + '/' + D
	}
}

export const FormatDate = (time) => {

	var date = new Date(time);

	var year = date.getFullYear(),
		month = date.getMonth() + 1, //月份是从0开始的
		day = date.getDate()
	var newTime = year + '-' +
		(month < 10 ? '0' + month : month) + '-' +
		(day < 10 ? '0' + day : day)

	return newTime;
}
