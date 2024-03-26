
const palaba = ["frase1", "frase2", "frase3"]
const palabraSpan = palaba.map(p => '<span>' + p + '</span>')
document.querySelector('div').innerHTML = palabraSpan.join(' ');
document.querySelectorAll(".originales span").forEach(o => {
    o.addEventListener("click", () => {
        document.querySelector(".result").innerHTML += o.innerHTML
        document.querySelectorAll(".result span").forEach(o => {
            o.addEventListener("click", () => {
                const code = dcument.querySelector(".result")
                const codeArr = code.split(" ")
                codeArr.splice(i, 1)
                document.querySelector(".result").innerHTML = codeArr.join("")
            })
        })
    })
})