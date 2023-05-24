let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage.length) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  renderLeads()
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  renderLeads()
})

function renderLeads() {
  let listItems = ""
  for (let x in myLeads){
    listItems += `
      <li>
        <a target="_blank" href="https://${myLeads[x]}">
          ${myLeads[x]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}

