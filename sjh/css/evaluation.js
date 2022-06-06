const star = document.getElementsByClassName("star");

function drawStar1(target){
  star[0].firstElementChild.style.width = target.value*10+"%";
}

function drawStar2(target){
  star[1].firstElementChild.style.width = target.value*10+"%";
}

function drawStar3(target){
  star[2].firstElementChild.style.width = target.value*10+"%";
}


// 한 개 단독 평가일 때
// function drawStar(target){
//   document.getElementById("두번째spqn태그선택자").style.width = target.value*10+"%";
// };