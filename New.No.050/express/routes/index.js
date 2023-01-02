const { Router } = require("express");
const userApi = require("./user");

const router = Router();
router.use("/user", userApi);

module.exports = router;

// CORS policy(Cross Origin Resource Sharing policy)
// 교차 원본 자원 공유
// 같은 주소가 아닌 다른 주소에서 api 요청 / 이미지 요청 등 자료를 구해올 수 없다. << 보안상의 문제

// GET에서는 발생하는 경우가 거의 없지만 POST등에서는 거의 대부분 발생한다.
// 해결 방법 : proxy 라는 개념을 사용한다.
// Proxy : 중간 서버이다.
// 중간에서 다른 서버에 자료를 요청해서 자기것인것 마냥 응답으로 보낸다. << 자세한 사항은 각자 알아서 공부해 볼것.
// 다른 해결 방법 : HTTP통신의 Header에서 설정을 추가하여 웹페이지의 주소에 대해서 인증을 해준다.
// 제일 쉬운 해결 방법 : Node.js에서는 cors라는 라이브러리가 있다.
