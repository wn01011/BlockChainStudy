// parser란 파싱하는 메서드에 붙는 이름
// parsing은 구문 분석, 문장을 구성 성분으로 분해하고 위계 관계를 분석하여 문장의 구조를 결정
// - 정보를 분해 분석하여 원하는 형태로 조립한다. 즉, 내가 원하는 자료형(형태)로 가공한다.
// 내 소개를 할게
// 이름은 정경훈이다.
// 다루는 언어는 Javascript, HTML, CSS, Solidity, C++, C#
// 기술스택 React, Node.js, MySQL, MongoDB, BlockChain
// 직장은
//  이름은 경일 게임 아카데미
//  주소는 서울특별시 강동구 651 천호대로 995 금복빌딩 3, 4층
//  전화번호는 02-479-4050

const getQuery = (queryString) => {
  if (!queryString) return {};
  // 입력된 queryString이 없으면 빈 객체를 반환(리턴)한다.

  //   const query = {};
  //   // 쿼리스트링을 분해해서 담을 쿼리를 객체로 생성해둔다.
  //   queryString = queryString.split("&");
  //   //각 쿼리는 &표시로 나눠진다.
  //   for (let i = 0; i < queryString.length; ++i) {
  //     const temp = queryString[i].split("=");
  //     // 나눠진 각 쿼리를 '=' 기준으로 나눠서
  //     query[temp[0].trim()] = temp[1].trim();
  //     // name = kjk => query{ name : kjk }
  //   }
  //   return query;
  return queryString
    .split("&")
    .map((item) => item.split("="))
    .reduce((prev, curr) => {
      prev[curr[0].trim()] = curr[1].trim();
      return prev;
    }, {});
};

const getMessage = (lines) => {
  const headers = {};
  while (true) {
    const temp = lines.shift();
    if (!temp) break;
    // 요청에 포함된 정보에서 body를 넣기 전에 빈줄을 넣어놨다.
    // 그 빈줄은 lines 내에서 빈 문자열(string)으로 저장된다.
    // 헤더(headers)만 파싱하기 위해 빈 스트링을 기준으로 반복을 멈추도록 한다.
    const index = temp.indexOf(":");
    let value = temp.slice(index + 1).trim();
    if (!isNaN(+value)) value = +value;
    headers[
      temp[0].toLowerCase() + temp.slice(1, index).replaceAll("-", "").trim()
    ] = value;
  }

  let body = lines.join("");

  if (body) {
    if (
      global.isJson &&
      headers["contentType"].indexOf("application/json") > -1
    ) {
      body = JSON.parse(body);
    } else if (
      headers["contentType"].indexOf("application/x-www-form-urlencoded") > -1
    ) {
      body = getQuery(body);
    }
  }

  return { headers, body };
};

const parser = (data) => {
  const lines = data.split("\r\n");
  // 요청에 포함된 데이터는 각 줄마다 뜻하는 설정이 있다. 그래서 줄로 나눈다.
  console.log("lines", lines);
  const firstLine = lines.shift().split(" ");
  // 첫번째 줄은 요청을 보낼 때 사용한 형식(method), 주소(라우터, url), 프로토콜의 버전(version)이 ' '를 사이에 두고 연결이 되어있다.
  // ' '를 기준으로 나눠 각 데이터를 객체에 넣어 반환할 수 있게한다.
  console.log("firstLine", firstLine);
  //   const method = firstLine[0];
  //   const url = firstLine[1];
  //   const version = firstLine[2];
  const [method, url, version] = lines.shift().split(" ");
  console.log("method", method);
  console.log("url", url);
  console.log("version", version);

  const path = url.split("?")[0];
  const queryString = url.split("?")[1];
  // url을 라우터(path)와 쿼리스트링(queryString)로 나눈다.
  const query = getQuery(queryString);
  // 쿼리스트링은 다시 각 쿼리로 나눠 객체에 담아 반환한다.

  const dataObj = getMessage(lines);
  console.log("dataObj", dataObj);

  return { method, url, version, path, query, ...dataObj };
};

module.exports = parser;
