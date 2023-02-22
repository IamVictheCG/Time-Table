var Monday= ["EEE308(8AM-10AM)", "MEE303(3PM-6PM)"]
var Tuesday= ["EEE313(8AM-10AM)", "ICT443(10AM-12PM)", "MCT 315(2PM-4PM)"]
var Wednesday= ["MEE307(8AM-10AM)"]
var Thursday= ["MEE307(8AM-10AM)"]
var Friday= ["Your Schedule for today is clear"]
var Week= []
Week.push(Monday,Tuesday,Wednesday,Thursday,Friday)
// console.log(Week)
var btn= document.querySelector(".btn")
var dayInput= document.querySelector(".userInput")
// dayInput.style.background="#ff1111"
var result= document.querySelector(".result")
// console.log(dayInput)



function hoverColor() {
    btn.style.background ="#ff1111"
    btn.style.color ="#ffffff"
}
function ogColor() {
    btn.style.background =""
    btn.style.color ="#231321"
}

// function reveal(e) {
//     e.preventDefault()
//     result.style.display = "block"
//     if (dayInput.value==="Monday") {
//         for (let i = 0; i < Monday.length; i++) {
//             // result.innerHTML= "<h1><h1/>"
//             // result.innerHTML= `<h3>You have ${Monday.length} classes today<h3/>`
//             let paraText = document.createElement("P");
//             let paraNode= document.createTextNode(Monday[i])
//             paraText.appendChild(paraNode)
//             result.appendChild(paraText)
//             console.log(Monday)
//         }
//         return
//     }
// }

function reveal() {
    let note = document.querySelector(".note")
    let courses = document.querySelector(".courses")
    // e.preventDefault()
    // console.log(Week)
    for (let i = 0; i < Week.length; i++) {
        if (dayInput.value === "Monday") {
            for (let i = 0; i < Monday.length; i++) {
                let courseList = document.createElement("li")
                let courseNum = document.createTextNode(Monday[i])
                // let br = document.createElement("br")
                result.style.display = "block"
                console.log(Monday)
                note.innerHTML= `<strong>You have ${Monday.length} classes today<strong/>`
                courseList.appendChild(courseNum)
                // courseList.appendChild(br)
                courses.appendChild(courseList)
                // courses.innerHTML=`<li>${Monday[i]}<li/>`
            }
            return
        }

        else if (dayInput.value === "Tuesday") {
            for (let i = 0; i < Tuesday.length; i++) {
                let courseList = document.createElement("li")
                let courseNum = document.createTextNode(Tuesday[i])
                // let br = document.createElement("br")
                result.style.display = "block"
                console.log(Tuesday)
                note.innerHTML= `<strong>You have ${Tuesday.length} classes today<strong/>`
                courseList.appendChild(courseNum)
                // courseList.appendChild(br)
                courses.appendChild(courseList)
                // courses.innerHTML=`<li>${Monday[i]}<li/>`
            }
            return
        }
        else if (dayInput.value === "Wednesday") {
            for (let i = 0; i < Wednesday.length; i++) {
                let courseList = document.createElement("li")
                let courseNum = document.createTextNode(Wednesday[i])
                // let br = document.createElement("br")
                result.style.display = "block"
                console.log(Wednesday)
                note.innerHTML= `<strong>You have ${Wednesday.length} classes today<strong/>`
                courseList.appendChild(courseNum)
                // courseList.appendChild(br)
                courses.appendChild(courseList)
                // courses.innerHTML=`<li>${Monday[i]}<li/>`
            }
            return
        }
        else if (dayInput.value === "Thursday") {
            for (let i = 0; i < Thursday.length; i++) {
                let courseList = document.createElement("li")
                let courseNum = document.createTextNode(Thursday[i])
                // let br = document.createElement("br")
                result.style.display = "block"
                console.log(Thursday)
                note.innerHTML= `<strong>You have ${Thursday.length} classes today<strong/>`
                courseList.appendChild(courseNum)
                // courseList.appendChild(br)
                courses.appendChild(courseList)
                // courses.innerHTML=`<li>${Monday[i]}<li/>`
            }
            return
        }
        else if (dayInput.value === "Friday") {
            for (let i = 0; i < Friday.length; i++) {
                let courseList = document.createElement("p")
                courseList.classList= "freeday"
                let courseNum = document.createTextNode(Friday[i])
                // let br = document.createElement("br")
                result.style.display = "block"
                note.innerHTML= `<strong>You have 0 classes today<strong/>`
                courseList.appendChild(courseNum)
                // courseList.appendChild(br)
                result.appendChild(courseList)
                console.log(Friday)
                // courses.innerHTML=`<li>${Monday[i]}<li/>`
            }
            return
        }
    }

    for (let i = 0; i < Week.length; i++) {
        if (dayInput.value !== Week[i]) {
            courses.style.display= "none"
            note.innerHTML="<strong>ERROR<strong/>"    
            let strong = document.createElement("strong")
            let strongText = document.createTextNode("Please enter a valid working day of the week")
            strong.appendChild(strongText)
            result.appendChild(strong)
            console.log(result)
            return
        }
    }
}

btn.addEventListener("mouseover", hoverColor)
btn.addEventListener("mouseleave", ogColor)
btn.addEventListener("click", reveal)


// console.log(btn)
