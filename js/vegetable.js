let vegetabledata=[]

fetch("json/vegetables.json")
    .then(function(response){
        return response.json()
    })
    .then(function(jsondata){
        vegetabledata=jsondata
        let select1 = document.getElementById("vegetable1")
        let select2 = document.getElementById("vegetable2")
        let select3 = document.getElementById("vegetable3")
        select1.innerHTML = "";
        select2.innerHTML = "";
        select3.innerHTML = "";
        for(let iVegetable = 0; iVegetable < vegetabledata.length; ++iVegetable){
            const newOption = `<option value="${iVegetable}" >${vegetabledata[iVegetable].name}</option>`;
            select1.innerHTML += newOption;
            select2.innerHTML +=newOption;
            select3.innerHTML += newOption;
        }
    })


function handlesubmitform(event){
    event.preventDefault()
    //grab first name
    let firstname = document.getElementById("name").value
    //display first name
    document.getElementById("submittedName").innerHTML = firstname;
    //grab email
    let email = document.getElementById("email").value
    //display email
    document.getElementById("submittedEmail").innerHTML = email;
    //grab phone
    let phonenumber = document.getElementById("phoneNumber").value
    //display phone
    document.getElementById("submittedPhone").innerHTML = phonenumber;
    //grab fruit 1
    let vegetable1 = document.getElementById("vegetable1").value
    document.getElementById("submittedVegetable1").innerHTML = fruitdata[fruit1].name
    //grab fruit 2
    let vegetable2 = document.getElementById("vegetable2").value
    document.getElementById("submittedVegetable2").innerHTML = fruitdata[fruit2].name
    //grab fruit 3
    let vegetable3 = document.getElementById("vegetable3").value
    document.getElementById("submittedVegetable3").innerHTML = fruitdata[fruit3].name

    //grab nutrional info
        const vegetableData1 = vegetabledata[vegetable1].nutritions;
        const vegetableData2 = vegetabledata[vegetable2].nutritions;
        const vegetableData3 = vegetabledata[vegetable3].nutritions;

        //Sum of the carbs
        const carbs = vegetableData1.carbohydrates + vegetableData2.carbohydrates + vegetableData3.carbohydrates;

        //Sum of proteins
        const protein = vegetableData1.protein + vegetableData2.protein + vegetableData3.protein;

        //Sum of fats 
        const fat = vegetableData1.fat + vegetableData2.fat + vegetableData3.fat;
        
        //Sum of Calories
        const calories = vegetableData1.calories + vegetableData2.calories + vegetableData3.calories;
        
        //Sum of Sugar
        const sugar = vegetableData1.sugar + vegetableData2.sugar + vegetableData3.sugar;


    //display sum of nutritional info
    document.getElementById("sumOfCarbs").innerHTML = carbs
    document.getElementById("sumOfProtein").innerHTML = protein
    document.getElementById("sumOfFat").innerHTML = fat
    document.getElementById("sumOfCalories").innerHTML = calories
    document.getElementById("sumOfSugar").innerHTML = sugar


 
    
}

document.getElementById("vegetable").addEventListener("submit", handlesubmitform)