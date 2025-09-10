document.getElementById("bmiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const heightM = parseFloat(document.getElementById("height").value); // height in meters

    if (!weight || !heightM) {
        alert("⚠️ Please enter both weight and height!");
        return;
    }

    const bmi = (weight / (heightM * heightM)).toFixed(2); // No need to divide by 100 for meters

    let category = "";
    let alertClass = "alert-info";

    if (bmi < 18.5) {
        category = "Underweight";
        alertClass = "alert-warning";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        alertClass = "alert-success";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        alertClass = "alert-warning";
    } else {
        category = "Obese";
        alertClass = "alert-danger";
    }

    const resultDiv = document.getElementById("result");
    const bmiValueSpan = document.getElementById("bmiValue");

    resultDiv.className = "alert mt-4 text-center " + alertClass;
    bmiValueSpan.textContent = `Your BMI is ${bmi} (${category})`;
    resultDiv.classList.remove("d-none");
});
