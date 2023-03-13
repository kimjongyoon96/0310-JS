// 1.기존에 있던 root의 요소를 가져오겠다.
// 변하지 않는 값이기 때문에, const를 사용하였다.
const root=document.getElementById('root');
root.style.position="relative";

// 함수명:boxStyle이라는 함수를 만들어서, 일괄적으로 적용하겠다.
// width,height,border...값은 일률적으로 적용이 가능해진다.
// 변수를 자유롭게 활용해서, 중복되는 내용을 쉽게 할수 있다.
function boxStyle(target,w,h,b,flex,borderRadi,textalign,back,posi,flexd){
target.style.width=w
target.style.height=h
target.style.border=b
target.style.display=flex
target.style.borderRadius=borderRadi
target.style.textalign=textalign
target.style.background=back
target.style.position=posi
target.style.flexDirection=flexd



};

// 함수명 makeDiv라는 것을 만들어서, 일괄적으로 적용하겠다.
// 앞으로 div를 만들거니까, tagName이라는 변수를 선언해줬다.
// parent라는 변수는, maek를 자식으로 둘것이다.

function makeDiv(tagName,parent,){
let make=document.createElement(tagName);
parent.appendChild(make);
};

// 위에 만든 함수 boxStyle을 가져와서, 일괄적으로 적용할것이다.
boxStyle(root,"90vw","90vh","blue","5px solid black");

// 위에 만들어논 함수 makeDiv를 가져다 쓴것이다.
// makeDiv라는 함수의 첫번째 변수를 make라고 하고, createElement를 사용
// 두변째 변수는 root의 자식으로 div를 설정한다는 내용이다.
// 즉, div를 만들고, root의 자식으로 들어와라 라는 뜻이 된다.
makeDiv("div",root);
  makeDiv("div",root);
  makeDiv("div",root);

  // boxStlye의 함수를 가져다 쓴것이다.
  // div를 함수를 통해 3개 만들었고, boxStlye로 각 div들을 조정한다.
  boxStyle(root.children[0],"90vw","25vh","4px solid green","flex","100px","center","green");
  boxStyle(root.children[1],"90vw","35vh","1px solid black","flex","100px","center","","relative");
  boxStyle(root.children[2],"90vw","25vh","4px solid green","flex","100px","center","","","","row");
  
// 나는 첫번째 div에 5개의 자식을 주고싶다.
// 그런데, 일일이 주는것이 너무 번거롭다
// 따라서, for문을 사용해서 한번에 5개를 만들것이다.
  for(let i=0; i<=4; i++){
    let teaminfo=document.createElement("div");
    teaminfo.style.alignItems="center";
    teaminfo.style.width="50%";
    teaminfo.style.height="100%";
    teaminfo.style.display="flex";
    teaminfo.style.background="cadetblue";
    teaminfo.style.fontSize="100px";
    teaminfo.style.borderRadius="60%";
    teaminfo.style.textAlign="center";
    teaminfo.style.border="10px solid pink";



    root.children[0].appendChild(teaminfo);
    }

// 첫번째 칸에 내가 적고싶은 내용을 리터럴 방식으로 작성하였다.
// innerHTML을 사용하여 글자를 적을수있고, 자식의 자식을 줘서 활용했다.
root.children[0].children[0].innerHTML="3번째 팀입니다."
root.children[0].children[1].innerHTML="저희의 팀 이름은 아이즈원이에용"
root.children[0].children[2].innerHTML="이유가 궁금하신가요"
root.children[0].children[3].innerHTML="이유는 MBTI I가 5명이라 아이즈원입니다."
root.children[0].children[4].innerHTML="팀매니저는 공욱재 강사님"

// 두번째 칸에 5개의 div를 만들것이다. 일일이 만들면 불편하기 때문에
// 일률적으로 for문을 작성해서 5개의 div를 만들것이다!..
for(let i=0; i<=5; i++){
let cuteTeam=document.createElement("div");
cuteTeam.style.width="10%"
cuteTeam.style.height="20%"
cuteTeam.style.border="50px solid green"
cuteTeam.style.fontSize="100px";
cuteTeam.style.fontSize="100px";
cuteTeam.style.textAlign="center";
cuteTeam.style.background="green";
cuteTeam.style.borderRadius="50%";


root.children[1].appendChild(cuteTeam);

}
// 포지션을 주고 싶은데, 안되서 일일이 지정을 해주었다.
root.children[1].children[0].style.position="absolute";
root.children[1].children[0].style.left="45%";
root.children[1].children[0].style.bottom="45%";
root.children[1].children[0].innerHTML=" 류은이"


root.children[1].children[1].style.position="absolute";
root.children[1].children[1].style.left="10%";
root.children[1].children[1].style.bottom="20%";
root.children[1].children[1].innerHTML=" 김종윤"


root.children[1].children[2].style.position="absolute";
root.children[1].children[2].style.left="80%";
root.children[1].children[2].style.bottom="70%";
root.children[1].children[2].innerHTML=" 김지섭"


root.children[1].children[3].style.position="absolute";
root.children[1].children[3].style.left="80%";
root.children[1].children[3].style.bottom="20%";
root.children[1].children[3].innerHTML=" 김형진"



root.children[1].children[4].style.position="absolute";
root.children[1].children[4].style.left="10%";
root.children[1].children[4].style.bottom="70%";
root.children[1].children[4].innerHTML="노수민"


root.children[1].children[5].style.position="absolute";
root.children[1].children[5].style.bottom="70%";
root.children[1].children[5].innerHTML="아이즈원"
root.children[1].children[5].style.left="45%";
root.children[1].children[5].style.top="0";




// 화면을 클릭했을때, 내가 지정한 컬러값들로 바뀌도록 함수를 작성했다.
// 1. root를 가져와서, addEventListener를 사용할것이다.
// 2. 직관적으로 해석을 하면, 클릭을 하면, addEventListener의 함수
// 3. 즉, 변수자리에 있는 함수=콜백함수를 실행하라는 뜻이다.
// 4. 이렇게 되면, 콜백함수가 실행되어서 팀원들의 이름은 사라지고
// 5. 팀장을 반짝반짝 하게 만들어줄수 있다.
let a =root.children[1]
// document.getElementById("root")
    a.addEventListener("click", function() {
   root.children[1].children[1].style.display="none";
   root.children[1].children[2].style.display="none";
   root.children[1].children[3].style.display="none";
   root.children[1].children[4].style.display="none";
   root.children[1].children[0].style.display="none";


   let colorlist=["#FC5C7D","#6A82FB","#38ef7d","#fffbd5","#b20a2c","#CAC531","blue","wihte","pink","black","aquamarine","gray","#Fc5C7D","#6A82FB","38ef7d","#fffbd5","#b20a2c","yellow"];
// 1. 여기서 새로운 함수인 seTimeout을 사용했다.
// 2. setTimeout은 내가 정한만큼 주기적으로 인자 즉, 100*i번의 속도로 반짝인다.
// 3. 직관적으로 해석하면, 내가 설정한 color리스트의 length만큼 반복하고
// 4. 기준은 내가 설정한 root.children[1] 즉, 두번째 칸이며,
// 5. 100*i 즉, 0.1초에 한번씩 바뀌게 된다.
   for(let i=0;i<=colorlist.length; i++){

    setTimeout(function(){
      root.children[1].style.backgroundColor=colorlist[i];
      
    }, 100*i);

   }
        
    });

// 세번째 칸에, 3개의 div를 만들것이다. 마찬가지로 for문을 사용할것이다.
for(i=0;i<=2;i++){
let teaChing=document.createElement('div');
    teaChing.style.alignItems="center";
    teaChing.style.width="50%";
    teaChing.style.fontSize="90px";
    teaChing.style.textAlign="center";
    teaChing.style.border="30px solid green";
    teaChing.style.borderRadius="100px";
    teaChing.style.background="salmon";

    root.children[2].appendChild(teaChing);
}

// 위에 있는 함수를 이용해서, 3번째 칸의 첫번째 div에 div를 자식으로 줬다
// 이처럼, 함수는 굉장히 간편하다!!!
makeDiv("div",root.children[2].children[0]);
makeDiv("div",root.children[2].children[0]);
makeDiv("div",root.children[2].children[1]);
makeDiv("div",root.children[2].children[1]);
makeDiv("div",root.children[2].children[2]);
makeDiv("div",root.children[2].children[2]);
// console.log(root.children[2].children[0]);
// 세번째 , 우리가 배운내용 
root.children[2].children[0].children[0].style.width="95%";
root.children[2].children[0].children[0].style.height="20%";
root.children[2].children[0].children[0].style.borderRadius="30%";
root.children[2].children[0].children[0].style.border="20px solid yellow";
root.children[2].children[0].children[0].innerHTML="우리가 배운 내용";
root.children[2].children[0].children[0].background="";

// 세번째, 우리가 배운내용 해당내용
root.children[2].children[0].children[1].style.width="100%";
root.children[2].children[0].children[1].style.height="80%";
root.children[2].children[0].children[1].style.borderRadius="30%";
root.children[2].children[0].children[1].innerHTML=" 1.웹프로그래밍기본(HTML5&CSS3) 2.Git&GitHub 3.BabelJavascript 활용방법   4.개발자의 자세 " ;


// 세번째,  우리가 배울내용
root.children[2].children[1].children[0].style.width="95%";
root.children[2].children[1].children[0].style.height="20%";
root.children[2].children[1].children[0].style.borderRadius="30%";
root.children[2].children[1].children[0].style.border="20px solid yellow";
root.children[2].children[1].children[0].innerHTML="우리가 배울 내용";

// 세번째, 우리가 배울내용 해당 내용
root.children[2].children[1].children[1].style.width="100%";
root.children[2].children[1].children[1].style.height="80%";
root.children[2].children[1].children[1].style.borderRadius="30%";
root.children[2].children[1].children[1].innerHTML=" 1.프레임워크 초보탈출법   2.백엔드프레임워크런타입  3.프레임워크활용" ; 

// 세번째, 우리가 할 작업
root.children[2].children[2].children[0].style.borderRadius="30%";
root.children[2].children[2].children[0].style.border="20px solid yellow";
root.children[2].children[2].children[0].innerHTML="우리가 할 작업";

// 세번째, 우리가 할 작업 해당 내용
root.children[2].children[2].children[1].style.width="100%";
root.children[2].children[2].children[1].style.height="80%";
root.children[2].children[2].children[1].style.borderRadius="30%";
root.children[2].children[2].children[1].innerHTML="1.포켓몬스터 맛있게 먹기 2.마라탕으로 맛있게 먹기 3.야무지게 맛있게 먹기 "


















// const _EXAMDATA = {

//   teamInformation: {
//     teamNumber : 0,
//     teamName: "팀명 작성",
//     teamNameStory: "팀명은 이런이유로 만들었답니다!",
//     teamManager: "공욱재",
//     teamAllMember: [
//       {
//         memberNumber: 0,
//         name: "공욱재",
//         teamPosition: "팀장",
//         githubAddress: "https://www.github.com/"
//       },
//       {
//         memberNumber: 0,
//         name: "공욱재",
//         teamPosition: "팀장",
//         githubAddress: "https://www.github.com/"
//       },
//       {
//         memberNumber: 0,
//         name: "공욱재",
//         teamPosition: "팀장",
//         githubAddress: "https://www.github.com/"
//       },
//       {
//         memberNumber: 0,
//         name: "공욱재",
//         teamPosition: "팀장",
//         githubAddress: "https://www.github.com/"
//       },
//     ]
//   },
//   trainingInformation: {
//     subject : [  
//     "웹프로그래밍기본(HTML5&CSS3)",
//     "Git&GitHub",
//     "Babel Javascript",
//     "프레임워크 기초",
//     "Project C(선택)",
//     "백엔드프레임워크런타임",
//     "프레임워크활용",
//     "Project A(데이터 기반 주식 추천 서비스)",
//     "Project B(교통정보제공서비스)",
//     ]
//   },
//   designInformation: {
//     colorSet : ["cadetblue", "salmon", "#ccc", "#333"],
//     breakPoint : [ "768px", "1280px",  "1920px"]
//   }
// }