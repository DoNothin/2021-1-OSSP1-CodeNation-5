let list2 = ["슬기","바나나","배","사과","귤","리치","망고"]; //슬기가 받아올 키워드들 

//  var clickedNum = 0; //봇버튼을 클릭한 횟수를 카운팅

//   function SaveclickedNum(){
//        clickedNum = clickedNum+1; //버튼 누를 때 마다 클릭 수 세이브
//        document.getElementById('Show_clickedNum').innerHTML = clickedNum;
//    }

//   function clearClickedNum(){
//        clickedNum = 0; //서치버튼 누르면 클릭 수 리셋
//    }

//  function getKeywords(){
//      var Show_keyword1 = list2[0];
//      var Show_keyword2 = list2[1];
//      var Show_keyword3 = list2[2];
//      var Show_keyword4 = list2[3];
//      document.getElementById('Show_keyword1_btn').innerHTML = Show_keyword1; //스크립트 변수를 html 내에서 쓰기위함
//      document.getElementById('Show_keyword2_btn').innerHTML = Show_keyword2;
//      document.getElementById('Show_keyword3_btn').innerHTML = Show_keyword3;
//      document.getElementById('Show_keyword4_btn').innerHTML = Show_keyword4;
//      }


//  document.addEventListener('DOMContentLoaded',function(){ //특정상황에서 특정함수 호출
//          var btn_bot = document.querySelector('#btn_bot'); //btn_bot이라는 변수에 아이디값이 btn_bot 버튼 할당, 봇버튼 누를때 이벤트
//          var btn_search =  document.querySelector('#btn_search'); //서치버튼 누를 떄 이벤트
    
//           btn_bot.addEventListener("click", SaveclickedNum()); //버튼 클릭할 때 마다 클릭횟수 세이브
//           btn_bot.addEventListener("click", getKeywords()); //btn01이 클릭되면 함수save실행
    
//           btn_search.addEventListener("click", clearClickedNum());
    
//      })

window.onload = function(){
    
    document.getElementById('Show_keyword1_btn').innerHTML = list2[0];
    document.getElementById('Show_keyword2_btn').innerHTML = list2[1];
    document.getElementById('Show_keyword3_btn').innerHTML = list2[2];
    document.getElementById('Show_keyword4_btn').innerHTML = list2[3];

};
