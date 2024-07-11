function Click() {
    let educationRadios = document.getElementsByName("education");
    let selectedEducation;
    for (let i = 0; i < educationRadios.length; i++) {
        if (educationRadios[i].checked) {
            selectedEducation = educationRadios[i].value;
            break;
        }
    }

    let resultDiv = document.getElementById("result");
    let eligible = "";
    switch (selectedEducation) {
        case 'HighSchool':
            eligible = "You are eligible for UG";
            break;
        case 'UG':
            eligible = "You are eligible for Job & PG";
            break;
        case 'PG':
            eligible = "You are eligible for Job & Doctorate";
            break;
        case 'Illiterate':
            eligible = "You are eligible for some hard work";
            break;
        case 'Doctorate':
            eligible = "You are eligible for teaching field";
            break;
        default:
            eligible = "Please select an education level";
    }

    let text = `Your education (${selectedEducation}) ${eligible}`;
    resultDiv.innerHTML = text;
}
