function onChange(checkboxId, answerId) {
  var checkBox = document.getElementById(checkboxId);
  var text = document.getElementById(answerId);
  var questions = ["firstQuestion", "secondQuestion", "thirdQuestion"];
  var answers = ["firstAnswer", "secondAnswer", "thirdAnswer"];

  if (checkBox.checked == true) {
    for (let index = 0; index < questions.length; index++) {
      const element = questions[index];
      if (element != checkboxId) {
        document.getElementById(element).checked = false;
        document.getElementById(answers[index]).style = "none";
      }
    }
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
