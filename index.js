let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabs = [
  {url: "https://www.linkedin.com/in/ayandokunelijah/"}
]


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}



function render(leads) {
  let listItems = ""
  for (let x in leads){
    listItems += `
      <li>
        <a target="_blank" href="https://${leads[x]}">
          ${leads[x]}
        </a>
      </li>
    `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)
})



