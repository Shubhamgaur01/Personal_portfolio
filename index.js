let tabcontents=document.getElementsByClassName("tab_contents")
let sideMenu=document.getElementById("sidemenu")
let nameId=document.getElementById("name")
let emailId=document.getElementById("email")
let textId=document.getElementById("textid")



function eraseall(){
	console.log("enetred")
	nameId.value=""
	emailId.value=""
	textId.value=""
}


function openmenu(){
	sideMenu.style.right="0"
}

function closemenu(){
	sideMenu.style.right="-200px"
}


console.log(tabcontents)
function opentab(tabname){
	for(let tabcontent of tabcontents){
		tabcontent.classList.remove("active_tab")
	}
	document.getElementById(tabname).classList.add("active_tab")
}