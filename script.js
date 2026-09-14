
function submitQuiz(){
 let score=0;
 document.querySelectorAll('input[type=radio]:checked').forEach(x=>{
   score += Number(x.value);
 });
 let name=document.getElementById('name').value || 'Student';
 document.getElementById('result').innerHTML =
 `${name}, your score is ${score}/2.<br>Correct answers: Q1 Listening, Q2 True`;
}
