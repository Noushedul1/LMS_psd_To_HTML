// Start for couruse categories

// const b = document.querySelectorAll(".bg-design");
// const len = b.length;
// for(var i = 0; i < len; i++) {
// 	const result = document.querySelectorAll(".bg-design")[i];
// 	result.addEventListener('mouseenter' function(){
// 		result.style.background = 'red';
// 	});
// }
const changeBgColor = [...document.querySelectorAll('.bg-design')]
changeBgColor.forEach(item => item.addEventListener('mouseenter',() => item.style.background='red')


// End for couruse categories
