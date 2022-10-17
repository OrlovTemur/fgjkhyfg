axios.get("http://localhost:3001/dataOne")
    .then(res => {
        // console.log(res.data);
        reloud(res.data)
    })

const reloud = (arr) => {
    for(let item of arr) {}
}

let nefor = localStorage.getItem('user') 
let reg = document.forms.reg
let log = document.forms.log
let arrForms = [reg, log]

if(!nefor) {
    
} else {
    
}

for(let form of arrForms) {
    form.onsubmit = (e) => {
        e.preventDefault()
        
        let user = {
            id: Math.random()
        }
        
        
        let fm = new FormData(form)
        
        fm.forEach((value, key) => {
            user[key] = value
        })
        
        localStorage.setItem('user', JSON.stringify(user))
    }
    console.log(form);
}
