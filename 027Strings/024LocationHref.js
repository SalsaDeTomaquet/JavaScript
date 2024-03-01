let url = location.href;
// location.href = ("http://127.0.0.1:5500/html/index.html").
const page = url.substring(url.lastIndexOf("/") + 1);
alert(page);
console.log(page)
