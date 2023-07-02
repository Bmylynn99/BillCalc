function mySubmit(){
    let form = document.querySelector('form')
    var div = document.createElement("div");
    div.classList.add("list-item");
    
    const formData = new FormData(form)
    for (const pair of formData.entries()) {
        console.log(pair)
        div.innerHTML += `<p>${pair[1]}</p>`;
    }

    div.innerHTML += `<label><input type="checkbox" name="checkbox" value="value">Paid</label>`
    
    form.reset()
    document.getElementById("main").appendChild(div);
}
function myCalculate() {
    let form = document.getElementById("form2")
    console.log(form)
    form.reset()

}