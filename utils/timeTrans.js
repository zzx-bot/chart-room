export const dateTime = (oldTime) => {

	let nowTime = new Date()
	let h = oldTime.getHours()
	let m = oldTime.getMinutes()
	let d = oldTime.getSeconds()
	let Y = oldTime.getFullYear()
	let M = oldTime.getMonth() + 1
	let D = oldTime.getDate()


	let nh = nowTime.getHours()
	let nm = nowTime.getMinutes()
	let nd = nowTime.getSeconds()
	let nY = nowTime.getFullYear()
	let nM = nowTime.getMonth() + 1
	let nD = nowTime.getDate()

	let hm = h.toString().padStart(2, "0") + ':' + m.toString().padStart(2, "0")
	if (D === nD && M === nM && Y === nY) {
		return hm
	}

	if (D + 1 === nD && M === nM && Y === nY) {
		return '昨天 ' + hm
	}

	if (D + 1 < nD && M === nM && Y === nY) {
		h.toString().padStart(2, "0")
		m.toString().padStart(2, "0")
		return Y + '/' + M + '/' + D
	}
}



export const MsgDateTime = (oldTime) => {

	let nowTime = new Date()
	let h = oldTime.getHours()
	let m = oldTime.getMinutes()
	let d = oldTime.getSeconds()
	let Y = oldTime.getFullYear()
	let M = oldTime.getMonth() + 1
	let D = oldTime.getDate()
	let Day = oldTime.getDay()

	let nh = nowTime.getHours()
	let nm = nowTime.getMinutes()
	let nd = nowTime.getSeconds()
	let nY = nowTime.getFullYear()
	let nM = nowTime.getMonth() + 1
	let nD = nowTime.getDate()
	let nDay = nowTime.getDay()

	let hm = h.toString().padStart(2, "0") + ':' + m.toString().padStart(2, "0")
	const week = ['上周日 ', '周一 ', '周二 ', '周三 ', '周四 ', '周五 ', '周六 ', ]

	if (Y !== nY) {
		return Y + '年' + M.toString().padStart(2, "0") + '月' + D.toString().padStart(2, "0") + '日 '
	} else {
		if (nM == M && D === nD)
			return hm
		else if (nM == M && D + 1 === nD) {
			return '昨天 ' + hm
		} else if (nM == M && D + 1 < nD && D + 7 > nD && nD - D < nDay) {
			return week[Day] + hm
		} else
			return M.toString().padStart(2, "0") + '月' + D.toString().padStart(2, "0") + '日 ' + hm
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
