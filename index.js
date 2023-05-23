let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  renderLeads()
})


function renderLeads() {
  let listItems = ""
  for (let x in myLeads){
    listItems += "<li>" + myLeads[x] + "</li>"
  }

  ulEl.innerHTML = listItems
}

