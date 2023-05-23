let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage.length > 0) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ""
})


// localStorage.clear()
function renderLeads() {
  let listItems = ""
  for (let x in myLeads){
    listItems += `
      <li>
        <a target="_blank" href="https://${myLeads[x]}"> ${myLeads[x]}
      </li>`
  }

  ulEl.innerHTML = listItems
}

