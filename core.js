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
