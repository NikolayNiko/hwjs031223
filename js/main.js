const doc = document;
const myForm = doc.forms.myForm;
const radioList = doc.querySelector('.radiolist');
const radioButton = myForm.radioChange;
const brand = myForm.brands;
const model = myForm.models;
const send = myForm.send;
let select1 = [];

const autoList = [
    { name:'',
    valBrand:'',
    modelGood:['']
    
    }
    ,
    { name:'BMW',
    valBrand:'bmv',
    modelGood: ['', 'bmwML1 - 2000', 'bmvMLrte - 2000', 'bvbML34 - 2000']
    }
    ,
    { name:'Mersedes',
    valBrand: 'mersedes',
    modelGood: ['', 'Mer1 - 2000', 'M2 - 2000', 'M3 - 2000']

    }
    ,
    { name: 'Audi',
    valBrand:'audi',
    modelGood: ['', 'AU1 - 2000', 'auGH1 - 2000', 'auMLL - 2000']
    }
    
];

const laptopList = [
    { name:'',
    valBrand:'',
    modelGood:['']
    
    }
    ,
    { name:'Asus',
    valBrand:'asus',
    modelGood: ['', 'llk 2000', 'ssd - 2000', 'ddddd - 2000']
    }
    ,
    { name:'Mbook',
    valBrand: 'mbook',
    modelGood: ['', 'Mqwqwqw', 'Masd324', 'Msdfsd2342']

    }
    ,
    { name: 'Lenovo',
    valBrand: 'lenovo',
    modelGood: ['', 'Lenovo11', 'Lenovo12121', 'Lenovo7878787']
    }
    
];

// console.log(autoList[1]['modelGood']);
/// top - const
//  buttom - mainBlock

//событие по радикнопкам
for(let i = 0; i < radioButton.length; i++) {

    radioButton[i].onchange =  countThis;

}

// событие по первому

brand.onchange = countSelect1;

model.onchange = function() {
    const isCheck = this.value;
    console.log('****', this.value);

    if(isCheck) {
        send.removeAttribute('disabled');
    } else {
        send.setAttribute('disabled', 'disabled');
    }

    return;
}

// send.onclick = function() {
//     e.preventDefault();
    
// }

// block function

function countSelect1() {

    chekSelect1(this.value);

}

function countThis() {

    chekRadio(this.value);

}

function chekRadio(count) { 

    if(count == 'auto') {

        brand.innerHTML = autoList.map(function selectChangeList(item) {
            return `
                <option value=${item.valBrand}>${item.name}</option>
            `
        }).join('');
        select1 = autoList;
        
    } else if(count == 'laptop') {
    
        brand.innerHTML = laptopList.map(function selectChangeList(item) {
            return `
                <option value=${item.valBrand}>${item.name}</option>
            `
        }).join('');
        select1 = laptopList;
        
    
    }

}

function chekSelect1(count) {
    
    if(count == 'bmv') {
        
        model.innerHTML = autoList[1]['modelGood'].map(function selectChangeList(item) {
            
            return `
                <option value=${item}>${item}</option>
            `
        }).join('');

        
        
    } else if(count == 'mersedes') {
        
        model.innerHTML = autoList[2]['modelGood'].map(function selectChangeList(item) {
            
            return `
                <option value=${item}>${item}</option>
            `
        }).join('');
        
    
    } else if(count == 'audi') {
        
        model.innerHTML = autoList[3]['modelGood'].map(function selectChangeList(item) {
            
            return `
                <option value=${item}>${item}</option>
            `
        }).join('');

    } else if(count == '') {

        model.innerHTML = autoList[0]['modelGood'].map(function selectChangeList(item) {
            
            return `
                <option value=${item}>${item}</option>
            `
        }).join('');

        // block laptop

    } else if(count == 'asus') {

        model.innerHTML = laptopList[1]['modelGood'].map(function selectChangeList(item) {
            
            return `
                <option value=${item}>${item}</option>
            `
        }).join('');

    } else if(count == 'mbook') {

        model.innerHTML = laptopList[2]['modelGood'].map(function selectChangeList(item) {
            
            return `
                <option value=${item}>${item}</option>
            `
        }).join('');

    } else if(count == 'lenovo') {

            model.innerHTML = laptopList[3]['modelGood'].map(function selectChangeList(item) {
                
                return `
                    <option value=${item}>${item}</option>
                `
            }).join('');
    
    }

}