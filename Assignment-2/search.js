// ********************************* Helper Functions ******************************************
const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""


// ********************************* Dynamic dropdown options ***********************************
const [firstObj] = posts
const options = Object.keys(firstObj)

options.forEach((option, key) => {
    let opt = document.createElement("option")
    opt.text = capitalize(option)
    opt.value = option
    let select = document.getElementById("select-box")
    select.appendChild(opt)
})


// ********************************* Filter the search results ************************************

const search = () => {
    let dropDownValue = document.getElementById('select-box').value
    let keyword = document.getElementById('search-keyword').value

    let results = posts.filter(post => {
        if (isNaN(post[dropDownValue])) {
            if (post[dropDownValue].includes(keyword)) return true
        } else {
            if (Number(post[dropDownValue]) === Number(keyword)) return true
        }
    })


    // Display Objects
    results.forEach(result => {
        console.log(result)
    })

}



