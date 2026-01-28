function analyzeCoal() {

  let M = Number(document.getElementById("moisture").value);
  let VM = Number(document.getElementById("vm").value);
  let A = Number(document.getElementById("ash").value);

  let FC = 100 - (M + VM + A);
  let GCV = 81 * FC;

  let grade = "";

  if (GCV > 6200) grade = "Grade A";
  else if (GCV >= 5600) grade = "Grade B";
  else if (GCV >= 4900) grade = "Grade C";
  else if (GCV >= 4200) grade = "Grade D";
  else if (GCV >= 3500) grade = "Grade E";
  else if (GCV >= 2400) grade = "Grade F";
  else grade = "Grade G";

  document.getElementById("result").innerHTML =
    "Fixed Carbon: " + FC + "%<br>" +
    "Calorific Value: " + GCV.toFixed(2) + " kcal/kg<br>" +
    "Coal Grade: " + grade;

  new Chart(document.getElementById("chart"), {
    type: 'bar',
    data: {
      labels: ["Moisture", "VM", "Ash", "FC"],
      datasets: [{
        label: "Coal Analysis",
        data: [M, VM, A, FC],
        backgroundColor: ["blue", "orange", "gray", "green"]
      }]
    }
  });
}
