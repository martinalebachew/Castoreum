var castoreum_testLength = document.getElementsByClassName("qLength")[0].innerHTML;
var t1 = 3000 + Math.random() * 1000;

function castoreum_clickAnswer() {
  var castoreum_COLLECTION = document.getElementsByClassName("activeQ")[0].getElementsByClassName("ansWrap")[0].children;
  var castoreum_ANSKEY = castoreum_COLLECTION[0].value;
  var castoreum_ANS;

  for (let i = 1; i <= 4; i++) {
    if (castoreum_COLLECTION[i].getElementsByClassName("answer")[0].value == castoreum_ANSKEY) {
      castoreum_ANS = castoreum_COLLECTION[i];
      break;
    }
  }

  castoreum_ANS.click();
}

function castoreum_nextQuestion() {
  var castoreum_nextButton = document.getElementsByClassName("testNav button nextButton nextQ")[0];
  castoreum_nextButton.click();
}

function castoreum_endTest() {
  var castoreum_endButton = document.getElementsByClassName("button disabled endButton")[0];
  castoreum_endButton.click();
}

var castoreum_last = false;

function timedExec() {
  var castoreum_QNUM = document.getElementsByClassName("activeQcnt")[0].innerHTML;
  castoreum_last = (parseInt(castoreum_QNUM, 10) == parseInt(castoreum_testLength, 10));
  var t2 = 7000 + Math.random() * 1000;
  var t3 = 2000 + Math.random() * 1000;
  setTimeout(castoreum_clickAnswer, t2);
  setTimeout(castoreum_nextQuestion, t2 + t3);

  setTimeout(function(){
    if (!castoreum_last) timedExec();
    else castoreum_endTest();
  }, t2+t3)
}

timedExec();