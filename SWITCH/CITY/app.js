function showStats(){
    var city = document.getElementById("input").value
    var resultDiv = document.getElementById("result")
    let population=0
    let litracyrate=0
    let language="";
    switch(city){
    
        case 'Bengaluru':
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.01
            language = 'Tamil'
            break
        case 'Mumbai':
            population = 12442373
            literacyRate = 89.73
            language = 'Marathi'
            break
        case 'Delhi':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break

        }
        let text =` The indian city of ${city} has a ${population}.Language Spoken is ${language} and litracyrate is ${literacyRate}%`
        resultDiv.innerHTML=text}
