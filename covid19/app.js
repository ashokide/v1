async function getActiveData(state, district) {
    let data1 = 0, data2 = 0, data3 = 0;
    let result = await fetch(
        'https://data.covid19india.org/state_district_wise.json' ,{ mode: 'cors' }
    );
    let final = await result.json();
    data1 = final[state].districtData[district].active;
    data2 = final[state].districtData[district].confirmed;
    data3 = final[state].districtData[district].deceased;

    return [data1, data2, data3];
}

function getCovidStatus(MyState, Mydistrict) {
    let active = document.getElementById('active');
    let confirm = document.getElementById('confirm');
    let deceased = document.getElementById('deceased');
    let district = document.getElementById('district');
    district.innerHTML = Mydistrict;
    let stateId = document.getElementById('stateId');
    stateId.innerHTML = MyState;

    getActiveData(MyState, Mydistrict).then(e => {
        active.innerHTML = e[0];
        confirm.innerHTML = e[1];
        deceased.innerHTML = e[2];
    });
}

let active = document.getElementById('active');
let confirm = document.getElementById('confirm');
let deceased = document.getElementById('deceased');
active.innerHTML = 0;
confirm.innerHTML = 0;
deceased.innerHTML = 0;


function submitData() {
    let MyState = document.getElementById('selectBox0').value;
    let MyDistrict = document.getElementById('selectBox').value;
    if (MyDistrict === "") {
        let active = document.getElementById('active');
        let confirm = document.getElementById('confirm');
        let deceased = document.getElementById('deceased');
        let district = document.getElementById('district');
        let stateId = document.getElementById('stateId');
        stateId.innerHTML = '';
        district.innerHTML = '';
        active.innerHTML = 0;
        confirm.innerHTML = 0;
        deceased.innerHTML = 0;
    } else {
        getCovidStatus(MyState, MyDistrict)
    }
    // document.getElementById('selectBox0').value = ''
    // districtData = []
    // document.getElementById('selectBox').options.length = 1
}

//Populating Select Box
async function func() {
    let data = await fetch(
        "https://data.covid19india.org/state_district_wise.json", { mode: 'cors' }
    );
    return await data.json();
}

let stateData = [];
func().then((e) => {
    for (var i in e) {
        stateData.push(i);
    }
    stateData.sort()
});


let dist = document.getElementById("selectBox");
let state1 = document.getElementById("selectBox0");

setTimeout(() => {
    for (var state in stateData) {
        let d = document.createElement("option");
        d.textContent = stateData[state];
        d.value = stateData[state];
        state1.appendChild(d);
    }
}, 3000);


function getDistricts() {
    document.getElementById('selectBox').options.length = 1
    let districtData = [];
    func().then((e) => {
        for (var i in e[state1.value].districtData) {
            districtData.push(i);
        }
        districtData.sort()
    });
    setTimeout(() => {
        for (var district in districtData) {
            let d = document.createElement("option");
            d.textContent = districtData[district];
            d.value = districtData[district];
            dist.appendChild(d);
        }
    }, 1000);
}
