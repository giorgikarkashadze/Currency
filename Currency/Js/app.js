const input = document.getElementById('input_currency');
const output = document.getElementById('output_currency');
const submit = document.getElementById('submit');
const selectTo = document.getElementById('selectTo');
const selectFrom = document.getElementById('selectFrom');
const option = document.getElementById('option');



function transfer() {
    const rates = {
        gel: { dollar2: 2.65, euro2: 2.86, pound2: 3.27 },
        dollar: { gel2: 0.36, euro2: 1.04, pound2: 1.19 },
        euro: { gel2: 0.33, dollar2: 0.86, pound2: 1.09 },
        pound: { gel2: 0.29, dollar2: 0.772, euro2: 0.834 }
    };

    const fromCurrency = selectFrom.value;
    const toCurrency = selectTo.value;

    if (rates[fromCurrency] && rates[fromCurrency][toCurrency]) {
        const rate = rates[fromCurrency][toCurrency];
        const result = input.value / rate;
        output.value = result.toFixed(2);
    } else {
        alert("გთხოვთ აირჩიოთ სხვადასხვა ვალუტები!")
    }
}


submit.addEventListener('click', () => {
    transfer()
}) 


// function transfer() {
//     let divider = [2.65, 2.86, 3.27, 0.36, 1.04, 1.19, 0.33, 0.88, 1.09, 0.29, 0.772, 0.834]

//     if(selectFrom.value === "gel" && selectTo.value === "dollar2") {
//         result = input.value / 2.65;
        
//     }else if(selectFrom.value === "gel" && selectTo.value === "euro2"){
//         result = input.value / 2.86;

//     }else if(selectFrom.value === "gel" && selectTo.value === "pound2"){
//         result = input.value / 3.27;

//     }else if(selectFrom.value === "dollar" && selectTo.value === "gel2"){
//         result = input.value / 0.36;
        
//     }else if(selectFrom.value === "dollar" && selectTo.value === "euro2"){
//         result = input.value / 1.04;
        
//     }else if(selectFrom.value === "dollar" && selectTo.value === "pound2"){
//         result = input.value / 1.19;
        
//     }else if(selectFrom.value === "euro" && selectTo.value === "gel2"){
//         result = input.value / 0.33;
        
//     }else if(selectFrom.value === "euro" && selectTo.value === "dollar2"){
//         result = input.value / 0.88;
        
//     }else if(selectFrom.value === "euro" && selectTo.value === "pound2"){
//         result = input.value / 1.09;
        
//     }else if(selectFrom.value === "pound" && selectTo.value === "gel2"){
//         result = input.value / 0.29;
        
//     }else if(selectFrom.value === "pound" && selectTo.value === "dollar2"){
//         result = input.value / 0.772;
        
//     }else if(selectFrom.value === "pound" && selectTo.value === "euro2"){
//         result = input.value / 0.834;
        
//     }else{
//         alert("გთხოვთ აირჩიოთ სხვადასხვა ვალუტები!")
//     }
    
//     output.value = result.toFixed(2)
// }