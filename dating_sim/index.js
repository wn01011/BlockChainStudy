// 첫번째 질문 do while
let question1 = "-1";
do {
  question1 = prompt(
    "한량의 모험\n\n29년째 무직... 이젠 벗어나야한다. \n마음을 다잡은 '김한량' 수중엔 단돈 500원\n마트에서 뭐라도 골라잡자\n\n1:칼  2:방패"
  );
  if (question1 == "1" || question1 == "칼") {
    let sword1;

    alert("칼을 집었다.");

    toggleImg("leftImg", "Assets/Images/sword.jpg", undefined, undefined);
    do {
      sword1 = prompt(
        "철물점에서 500원짜리 칼을 샀다.\n칼을 샀으면 무라도 썰어야하는 법 당신은 어떤걸 썰어야할까?\n1:당근 2:슬라임"
      );
      if (sword1 == "1" || sword1 == "당근") {
        // 당근을 썬다.
        let sword1_1 = confirm(
          "마을 최고의 요리사가 눈을 빛내며 쳐다본다.\n\n요리사 : 자네 내 밑에서 일해보지 않겠는가?"
        );
        if (sword1_1 == true) {
          alert("요리사가 되기로한 당신..\n\n당신의 재능을 측정합니다...");
          let sword1_1_talent;
          for (let i = 0; i < 3; ++i) {
            sword1_1_talent = Math.round(Math.random() * 10);
            alert(`주사위 또르르... ${sword1_1_talent} 점...`);
          }
          alert(
            `역시 마지막이 중요합니다.\n요리에 대한 재능은 10점 만점에 ${sword1_1_talent}입니다.`
          );
          // 요리에 대한 재능
          if (sword1_1_talent <= 5) {
            alert(
              `당신의 요리를 맛본 마을 사람들이 다시는 당신이 만든 요리를 먹지 않습니다.\n당신의 재능에 한탄한 요리사도 고개를 젓습니다...\n\n수중에 남은 돈은 0원입니다.\n재기의 가능성이 없다느낀 당신은 세상을 한탄하며 마을 뒤 절벽으로 갑니다..`
            );
            alert(`사 망`);
            break;
          } else {
            alert(`당신의 요리를 맛본 마을 사람들이 맛에 중독됩니다.`);
            alert(`당신을 받아들여준 요리사보다 유명해진 당신...`);
            alert(
              `어느 한적한 오후\n
              요리스승과 함께한 식사..`
            );
            alert("질투에 눈이 먼 스승에 의해 독살 됩니다.");
            alert(`사 망`);
            break;
          }
        } else {
          alert(
            `요리사의 제안을 뿌리친 당신\n\n칼을 보며 많은 생각이 납니다. \n`
          );
          alert(`내가 대체 뭘 할 수 있을까?.. 이 예리함`);
          alert(`칼을 들고 마을을 나서봅니다.`);
          alert(`정처없이 떠돌다 우연히 만난 스승에게 검술을 배운지 어연 10년`);
          alert(
            `옛날의 예리하던 칼은 어느새 무뎌졌지만 여전히 나의 곁에 머물고 있습니다.`
          );
          alert(`칼에게 묻습니다`);
          alert(`너의 이름은?`);
          let knife_name = prompt(`칼의 이름을 지어주세요`);
          if (knife_name.length <= 4) {
            alert(`칼의 이름 길이는 ${knife_name.length}`);
            alert(
              `칼의 이름이 4자를 넘지 못했습니다.\n성의를 느끼지 못한 칼이 분노합니다.`
            );
            alert(
              `격렬한 분노에 자아를 가져버린 칼은 마검이 되었습니다.\n칼에게 몸의 제어권을 뺏기고 깊은 잠에 빠지게 됩니다.`
            );
            alert(
              `정신을 차려보니 넓은 평원 위 시체의 산위에 있는 자신을 발견합니다...`
            );
            alert(`초탈한 기분이 들며 삶의 이유에 대해 고민해봅니다.`);
            let ego_sword = confirm(
              `나는 선한 사람이었나...?\n\n맞으면 확인 틀리면 취소 버튼을 눌러주세요`
            );
            if (ego_sword == true) {
              alert(
                `선한 당신은 마음의 죄책감을 이기지 못합니다.\n\n잠깐이라도 정신이 있을때 "${knife_name}"의 검날 끝으로 몸을 던집니다.`
              );
              alert(`사 망`);
              break;
            } else {
              alert(
                `자신에 대해 고찰하던 당신은 당신이 본디 악한 사람이었단 것을 부정하지 않기로 합니다.`
              );
              alert(`그렇게 마검과 동화가 되며 사람들을 학살하고 다닙니다.`);
              alert(
                `그 결과 척살령이 떨어지고.\n정파의 최고수들이 무리를 지어 찾아옵니다.`
              );
              alert(
                `몇 날 며칠을 싸운 결과. 대부분의 고수들을 헤치웠지만 검신이라불리는 사내에게 끝내 목을 베입니다.`
              );
              alert(`사 망`);
              break;
            }
          } else {
            alert(`칼의 이름 길이는 ${knife_name.length} 4자를 넘었습니다.`);
            alert(
              `'${knife_name}'이(가) 미소를 짓는것만 같습니다.\n우리는 이름을 가질 때 비로소 가치를 가집니다.`
            );
            alert(
              `마음이 상쾌해집니다.\n${knife_name}과 함께라면 못할 일이 없을 것처럼 자신감이 넘쳐흐릅니다.`
            );
            alert(
              `10년동안 찾지 않았던 마을로 돌아갑니다.\n그동안 많은 것들이 바뀌었고 그건 자신또한 마찬가지였습니다.\n하지만 처음 자신에게 요리사를 권해주었던 그 요리사는 여전히 그자리에 있었습니다.`
            );
            alert(
              `식당으로 들어가 소면을 시키며 10년은 더 늙어보이는 주인장에게 물어봅니다.`
            );
            alert(`저 요리를 배우고 싶습니다.\n\n\n엔딩 - 요리사의 길`);
            break;
          }
        }
      } else if (sword1 == "2" || sword1 == "슬라임") {
        // 슬라임을 썬다.
        alert(`슬라임을 잡으러 마을 뒷동산에 갔다.`);
        alert(`이윽고 야생의 슬라임을 만났다!\n\n\n전투!`);
        alert(`내 체력 : 10\n슬라임 체력 : 10\n\n선공이다.`);

        let battle_win = Battle("슬라임");

        if (battle_win) {
          alert(
            `세상에서 가장 위험한 생물인 슬라임을 처치한 당신은 왕국에서 인정받는 기사가 됩니다.`
          );
          alert(
            `어떻게 슬라임을 무찔렀는지 음유시인들은 100년이 지나도 노래할 것입니다. \n\n엔딩 - 왕국 제일의 기사`
          );
          break;
        } else {
          alert(`사 망\n\n엔딩 - 슬라임보다 약하다니...`);
          break;
        }
      } else {
        sword1 = "-1";
      }
    } while (sword1 == "-1");
  } else if (question1 == "2" || question1 == "방패") {
    alert(
      `쫄보가 되기로한 당신.\n칼도 없이 방패만 사서 어쩌자는 건지는 모르겠지만 방패를 들어봅니다.`
    );
    alert(`뒷산의 골치거리인 슬라임을 잡아서 돈을 벌어보려합니다.`);
    alert(
      `뒷산에 어슬렁 거린지 얼마 지나지 않았을때\n\n\n야생의 슬리임이 나타났다!!!`
    );
    Battle("뒷산의 슬라임..?", true);
    alert(
      `돈을 위해 가차없이 기절시켜 끌고온 슬라임.\n\n어쩐지 너무 귀엽게만 느껴지는데...?`
    );
    let tornament = "-1";
    do {
      tornament = prompt(
        `슬라임의 가능성이 떠다닙니다.\n\n1.투기장의 맹수로써 가능성이 보인다.  2.내 애완동물이 되기에 부족함이 없다..!`
      );
    } while (tornament != "1" && tornament != "2");

    if (tornament == "1") {
      // 투기장의 맹수
      let slime_hp = 10;
      let slime_attack = 1;
      let opponent = "-1";
      do {
        opponent = prompt(
          `마을의 골칫거리였던 슬라임은 사실 키우고 있던 소들을 모두 잡아먹은 맹수중의 맹수였다.\n투기 슬라임으로 키우지 않는다면 이건 재능의 낭비라고 생각한 당신은 바로 투기장에 등록하러 갔다.\n그러자 투기장측에선 첫 대전 상대를 잡아주는데...\n\n대전상대 1:파이리  2:치코리타`
        );
      } while (opponent != "1" && opponent != "2");

      let battle_win = false;
      // 8강
      if (opponent == "1") {
        // 파이리
        alert(`만만해 보이는 파이리를 선택했다!!! 슬라임은 내열기능이 있다구?`);
        battle_win = Battle("파이리", false, 10, 1, 10, -1);
        if (battle_win) {
          alert(`파이리는 고개를 숙입니다`);
        }
      } else {
        // 치코리타
        alert(`슬라임은 베기에 강하지!!! 슬라임은 물렁하다구?`);
        battle_win = Battle("치코리타", false, 10, 1, 10, 0);
      }

      if (battle_win) {
        alert(`우쭐해할 시간이 없다 녀석들은 최약체다.`);
        // 4강
        alert(`4강\n대전상대 : 롱스톤
        무시무시하기로 유명한 롱스톤이 올라왔습니다.`);
        alert(
          `대전상대를 확인한 당신과 슬라임은 씩 웃습니다.\n\n슬라임은 타격에 강합니다.`
        );
        alert(`당신의 슬라임도 거듭된 경험에 성장합니다.`);
        let hp_up = 1 + Math.round(Math.random() * 4);
        slime_hp += hp_up;
        let attack_up = 1 + Math.round(Math.random() * 2);
        slime_attack += attack_up;
        alert(
          `슬라임 상태창\n체력 : 10 => ${slime_hp}\n공격력 : 1 ~ 3 => ${slime_attack} ~ ${
            2 + slime_attack
          }`
        );
      } else {
        alert(`다시는 녀석들을 무시하지 말라구 ???`);
        break;
      }
      alert(`부수러 갈 준비가 됐습니다.`);
      battle_win = Battle("롱스톤", false, slime_hp, slime_attack, 25, 1);
      console.log(battle_win);
      if (battle_win) {
        alert(
          `롱스톤을 가루로 만들어버렸습니다.\n강력한 우승후보였던 롱스톤이 무너지자 나머지 선수들이 기권합니다.`
        );
        alert(`당신과 당신의 슬라임은 전설입니다.\n\n엔딩 - 투기장의 제왕`);
        break;
      } else {
        alert(
          `운이 좋지 않았습니다.\n롱스톤의 꼬리공격이 슬라임의 핵에 닿았습니다.`
        );
        alert(`작별의 시간입니다.\n\n엔딩 - 무너진 야망`);
        break;
      }
    } else {
      // 애완동물
      alert(
        `녀석의 눈빛에 홀려버린 당신.\n방패로 내려쳤던 과거를 반성합니다.\n`
      );
      alert(`슬라임을 정성스럽게 돌보는 나날이 이어집니다.`);
      alert(
        `어느 순간부터인가 슬라임의 마음을 이해하기 시작합니다.\n몬스터 테이머로써의 재능에 눈을 뜹니다.`
      );
      alert(`하지만 항상 인생은 좋은일만 있을 수 없는 법입니다.\n`);
      let heal = "-1";
      do {
        heal = prompt(
          `어느 날 부터인가 슬라임이 시름시름 병이 들기 시작했습니다.\n치료를 위한 방법을 고민해 봅니다.\n\n1.호 하고 불어준다.      2.고기를 먹인다.      3.기도한다.`
        );
      } while (heal != "1" && heal != "2" && heal != "3");
      if (heal == "1") {
        alert(`호 하고 불었더니 슬라임의 눈이 커집니다.!`);
        alert(`눈이 커진 슬라임이 숨을 쉬지 않습니다!!!`);
        alert(`슬라임은 가버렸습니다...\n\n엔딩 - 슬라임 사망`);
      } else if (heal == "2") {
        alert(
          `마을 뒷동산의 제왕이었던 슬라임은 육식이었습니다.\n지금껏 채소만 먹인 것이 원인 이었습니다!`
        );
        alert(`슬라임의 병도 낫게해준다는 명성이 왕국 전체에 울려퍼집니다.`);
        alert(
          `최초로 몬스터 치유사의 길을 개척하는 역사적 인물이 되었습니다.\n그의 이름은 세월이 지나도 울려퍼질 것입니다.\n\n엔딩 - 최초의 몬스터 치유사`
        );
      } else {
        alert(`기도로는 아무것도 해결되지 않습니다...`);
        alert(`슬라임은 가버렸습니다...\n\n엔딩 - 슬라임 사망`);
      }
    }
    break;
  } else {
    if (question1 != "-1") question1 = "-1";
  }
} while (question1 == "-1");
let ending = confirm("끝");

// **************************************Function Battle ***************************************

function Battle(
  slime_name = "slime_name",
  stun = false,
  my_max_hp = 10,
  my_min_damage = 1,
  other_max_hp = 10,
  other_min_damage = 1
) {
  if (stun) {
    alert(`역시 슬라임 잡는덴 둔기가 최고다.\n\n기절을 바로 시켰다.`);
    return;
  }

  let battle = false;
  for (
    let my_hp = my_max_hp, slime_hp = other_max_hp;
    my_hp > 0 && slime_hp > 0;

  ) {
    let my_damage = my_min_damage + Math.round(Math.random() * 2);
    let slime_damage = other_min_damage + Math.round(Math.random() * 2);
    let my_remain = my_hp;
    let slime_remain = slime_hp;
    my_hp -= slime_damage;
    slime_hp -= my_damage;
    if (my_hp < 0) {
      my_hp = 0;
    }
    if (slime_hp < 0) {
      slime_hp = 0;
    }
    alert(
      `내 체력 : ${my_remain}\n${slime_name} 체력 : ${slime_remain} - ${my_damage} = ${slime_hp}\n\n공격!!!`
    );
    slime_remain = slime_hp;
    if (slime_hp == 0) {
      battle = true;
      break;
    }
    alert(
      `내 체력 : ${my_remain} - ${slime_damage} = ${my_hp}\n${slime_name} 체력 : ${slime_remain}\n\n공격받았다!!!`
    );
    my_remain = my_hp;
    if (my_hp == 0) {
      break;
    }
  }
  return battle;
}

// toggle Image Function
function toggleImg(img_id, left_src, img_id2, right_src) {
  if (img_id != undefined) document.getElementById("leftImg").src = left_src;
  if (img_id2 != undefined) document.getElementById("rightImg").src = right_src;
}
