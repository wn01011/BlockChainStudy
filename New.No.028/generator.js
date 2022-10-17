function* what() {
  // function*은 generator 선언문이다.
  // generator는 yield 를 사용해서 함수를 중간에 멈추는 함수이다.
  try {
    // try는 코드를 실행하되, 문제가 있을 시 catch로 전달한다.
    // 문제가 발생할지도 모르는 코드를 사용 시 사용한다.
    // 서버에 요청 시에 가장 많이 사용한다.
    for (let i = 0; i < 10; ++i) {
      console.log(i);
      yield i;
      // 함수 호출 시 여기서 멈춘다. => 재 호출 시 여기서 시작한다.
    }
  } catch (err) {
    // try 코드 실행 시 문제가 발생 시 해당 문제를 err 매개변수로 받아 시행힌다.
    console.log(err);
  }
}
let gen = what();
while (!gen.done) {
  gen.next();
}

// putty : ubuntu 접속
// sudo apt-get install certbot python3-certbot-apache
// cd /etc/apache2
// ls -al
// ls
// cd sites-available/
// sudo vi 000-default.conf
// i
// ServerName chocodarling.com
// ServerAlias div.chocodarling.com < 여기 달라져야 한다(ex. sophia_sj.chocodarling.com)
// esc
// :wq!
// sudo vi 000-default.conf
// :q
// sudo service apache2 restart
// sudo certbot --apache
// ghkdwja9649@gmail.com < 이메일 주소 입력해주세요
