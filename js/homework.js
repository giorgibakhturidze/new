// let Student = [

//     {
//         name:"giorgi",
//         photo:"./img/chiti.png",
//         age:"1",
//         registreData:"22/09/2020",
//         courseType:"normal",
//         attandenc: 1,
//         stip:false
//     },

//     {
//         name:"giorgi2",
//         photo:"./img/chiti.png",
//         age:"2",
//         registreData:"2/02/1960",
//         courseType:"programing",
//         attandenc: 2,
//         stip:true
//     },
//     {
//         name:"giorgi3",
//         photo:"./img/chiti.png",
//         age:"22",
//         registreData:"22/09/2020",
//         courseType:"normal",
//         attandenc: 3,
//         stip:false
//     },
//     {
//         name:"giorgi4",
//         photo:"./img/chiti.png",
//         age:"4",
//         registreData:"4/02/1960",
//         courseType:"programing",
//         attandenc: 4,
//         stip:true
//     },
//     {
//         name:"giorgi5",
//         photo:"./img/chiti.png",
//         age:"5",
//         registreData:"5/02/1960",
//         courseType:"normal",
//         attandenc: 5,
//         stip:false
//     },
//     {
//         name:"giorgi6",
//         photo:"./img/chiti.png",
//         age:"22",
//         registreData:"6/02/1960",
//         courseType:"unusual",
//         attandenc: 1,
//         stip:true
//     },
//     {
//         name:"giorgi7",
//         photo:"./img/chiti.png",
//         age:"7",
//         registreData:"7/02/1960",
//         courseType:"programing",
//         attandenc: 2,
//         stip:false
//     },
//     {
//         name:"giorgi8",
//         photo:"./img/chiti.png",
//         age:"22",
//         registreData:"8/02/1960",
//         courseType:"unusual",
//         attandenc: 3,
//         stip:true
//     },
//     {
//         name:"giorgi9",
//         photo:"./img/chiti.png",
//         age:"9",
//         registreData:"22/09/2020",
//         courseType:"programing",
//         attandenc: 4,
//         stip:false
//     },
//     {
//         name:"giorgi10",
//         photo:"./img/chiti.png",
//         age:"10",
//         registreData:"10/02/1960",
//         courseType:"unusual",
//         attandenc: 5,
//         stip:true
//     }

//  ]

//  let filtersuti = Student.filter((stud)=>{
//      return stud.age == "22";
//  })


//  let filtersuti1 = Student.filter((stud)=>{
//     return stud.registreData == "22/09/2020";
// })

// let filtersuti2 = Student.filter((stud)=>{
//     return stud.courseType == "programing";
// })

// let filtersuti3 = Student.filter((stud)=>{
//     return stud.attandenc == "5";
// })

// let filtersuti4 = Student.filter((stud)=>{
//     return stud.stip == true;
// })
// let filtersuti5 = Student.filter((stud)=>{
//     return stud.name == 'giorgi';
// })

//  filtersuti.forEach(el=>{

//     let type ;

//     if (el.age == "22") {
//         type = `<span class="badge bg-success">22 წლის არის</span>
//         `
//     }else{
//         type = `<span class="badge bg-primary">სხვა წლივანება</span>`
//     }

//     el1.innerHTML += ` <div class = ""><div class="col-md-4"> <div class="card">
    
//     <div class="card-body">
//       <h5 class="card-title">${el.name}</h5>
//       </br>
//        ${type}
//     </div>
//     </div>
//   </div> </div>`
//  })
//  filtersuti1.forEach(el=>{

//     let type ;

//     if (el.registreData == "22/09/2020") {
//         type = `<span class="badge bg-secondary">registracia 22/09/2020-shi gaiara</span>
//         `
//     }else{
//         return none
//     }

//     el1.innerHTML += ` <div class="col-lg-4"> <div class="card">
    
//     <div class="card-body">
//       <h5 class="card-title">${el.name}</h5>
//       </br>
//        ${type}
//     </div>
//     </div>
//   </div>`
//  })

//  filtersuti2.forEach(el=>{

//     let type ;

//     if (el.courseType == "programing") {
//         type = `<span class="badge bg-danger">gadis progmramirebis kurss</span>
//         `
//     }else{
//         return none
//     }

//     el1.innerHTML += ` <div class="col-lg-4"> <div class="card">
    
//     <div class="card-body">
//       <h5 class="card-title">${el.name}</h5>
//       </br>
//        ${type}
//     </div>
//     </div>
//   </div>`
//  })

//  filtersuti3.forEach(el=>{

//     let type ;

//     if (el.attandenc == "5") {
//         type = `<span class="badge bg-warning">dascrebaa 100%</span>
//         `
//     }else{
//         return none
//     }

//     el1.innerHTML += ` <div class="col-lg-4"> <div class="card">
    
//     <div class="card-body">
//       <h5 class="card-title">${el.name}</h5>
//       </br>
//        ${type}
//     </div>
//     </div>
//   </div>`
//  })

//  filtersuti4.forEach(el=>{

//     let type ;

//     if (el.stip == true) {
//         type = `<span class="badge bg-info">stipendia aqvs</span>
//         `
//     }else{
//         return none
//     }

//     el1.innerHTML += ` <div class="col-lg-4"> <div class="card">
    
//     <div class="card-body">
//       <h5 class="card-title">${el.name}</h5>
//       </br>
//        ${type}
//     </div>
//     </div>
//   </div>`
//  })

//  filtersuti5.forEach(el=>{

//     let type ;

//     if (el.name == "giorgi") {
//         type = `<span class="badge bg-info">misis saxeli icxeba giorgit</span>
//         `
//     }else{
//         return none
//     }

//     el1.innerHTML += ` <div class="col-lg-4"> <div class="card">
    
//     <div class="card-body">
//       <h5 class="card-title"><p class= "bg-info">${el.name}</p></h5>
//       </br>
//        ${type}
//     </div>
//     </div>
//   </div>`
//  })

let d = new Date()

let blogebi = [
    {
        name: 'pirveli',
        agcera:'televizia',
        photo:'first photo',
        damatebis_tarigi: d.getDate(),
        kategoria: 'hokei',
        actiuria = false,
        raodenoba = 50

    },
    {
        name: 'meore',
        agcera:'televizia2',
        photo:'second photo',
        damatebis_tarigi: new Date(2021/02/02),
        kategoria: 'football2',
        actiuria = true,
        raodenoba = 100

    },
    {
        name: 'mesane',
        agcera:'televizia3',
        photo:'thired photo',
        damatebis_tarigi: new Date(2021/03/03),
        kategoria: 'football3',
        actiuria = true,
        raodenoba = 150

    },
    {
        name: 'metxe',
        agcera:'televizia4',
        photo:'forth photo',
        damatebis_tarigi: new Date(2021/04/04),
        kategoria: 'football4',
        actiuria = true,
        raodenoba = 170

    }
]


  blogebi.forEach(el=>{

    let newdt = new Date()
    let matchs = newdt.getDate() == el.damatebis_tarigi.getDate() && newdt.getFullYear() == el.damatebis_tarigi.getFullYear() && newdt.getDay() == el.damatebis_tarigi.getDay();
    let ragaca = matchs ? 'damatebulia dges' : el.damatebis_tarigi.getMonth();

    el1.innerHTML += ragaca;
 })

 blogebi.forEach(el=>{

    if(el.raodenoba > 100){
        let ragaca1 = 'popularulia'

    }

    el1.innerHTML += ragaca1;
 })
