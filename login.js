// 전체 학생 데이터
const students = [
    { id: "이동훈1", password: "1111", score: "45", grade: "1등급",
      message1: "대단하네요! 아직 통합과학 제대로 시작하지도 않았을 텐데.", 
      message2: "성적역사 - Na", 
      downloadLink: "https://horaeng.com/storage/2024%EB%85%84-6%EC%9B%94-%EA%B3%A01-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-%ED%86%B5%ED%95%A9%EA%B3%BC%ED%95%99-%ED%95%B4%EC%84%A4.pdf" },

    { id: "김가연1", password: "8888", score: "74", grade: "3등급",
      message1: "훌륭한 성과입니다! 계속 좋은 성적을 유지하세요.", 
      message2: "성적역사 - Na", 
      downloadLink: "https://horaeng.com/storage/2024%EB%85%84-6%EC%9B%94-%EA%B3%A01-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-%EC%88%98%ED%95%99-%ED%95%B4%EC%84%A4.pdf" },

    { id: "신가영1", password: "7777", score: "50", grade: "1등급",
      message1: "놀랍네요! 이렇게만 계속해서 과학탐구점수 수능까지 들고갑시다!", 
      message2: "성적역사 - 국어24년6월 고1 점수:86점/2등급", 
      downloadLink: "https://horaeng.com/storage/2024%EB%85%84-6%EC%9B%94-%EA%B3%A01-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-%ED%86%B5%ED%95%A9%EA%B3%BC%ED%95%99-%ED%95%B4%EC%84%A4.pdf" },

    { id: "홍나연1", password: "2222", score: "60", grade: "4등급",
      message1: "괜찮습니다, 풀업 동아리에서 꾸준한 연습과 피드백을 받으면서 같이 성적을 끌어올려봅시다! 꾸준히 노력하세요!", 
      message2: "성적역사 - 수학23년6월 고1 점수:86점/2등급", 
      downloadLink: "https://horaeng.com/storage/2021%ED%95%99%EB%85%84%EB%8F%84-6%EC%9B%94-%EA%B3%A01-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-%EC%98%81%EC%96%B4-%ED%95%B4%EC%84%A4.pdf" },

    { id: "홍수민1", password: "3333", score: "93", grade: "1등급",
      message1: "대단한 점수네요, 영어 모의고사 준비를 열심히 했네요!", 
      message2: "성적역사 - 국어23년6월 고1 점수:82점/2등급", 
      downloadLink: "https://horaeng.com/storage/2021%ED%95%99%EB%85%84%EB%8F%84-6%EC%9B%94-%EA%B3%A01-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-%EC%98%81%EC%96%B4-%ED%95%B4%EC%84%A4.pdf" },

    { id: "박세준2", password: "1010", score: "Na", grade: "-등급",
      message1: "지금도 좋지만, 한 단계 더 도약할 수 있어요!", 
      message2: "성적역사 - Na", 
      downloadLink: "https://horaeng.com/storage/2022%E1%84%82%E1%85%A7%E1%86%AB-%E1%84%80%E1%85%A92-11%E1%84%8B%E1%85%AF%E1%86%AF-%E1%84%86%E1%85%A9%E1%84%8B%E1%85%B4%E1%84%80%E1%85%A9%E1%84%89%E1%85%A1-%E1%84%80%E1%85%AE%E1%86%A8%E1%84%8B%E1%85%A5-%E1%84%92%E1%85%A2%E1%84%89%E1%85%A5%E1%86%AF.pdf" },

    { id: "구재모2", password: "1212", score: "Na", grade: "-등급",
      message1: "분석을 통해 실수를 줄여봅시다!", 
      message2: "성적역사 - Na", 
      downloadLink: "https://horaeng.com/storage/2020%EB%85%84-%EA%B3%A02-9%EC%9B%94-%ED%95%99%ED%8F%89%EC%9D%B8%EC%B2%9C-%EA%B5%AD%EC%96%B4-%ED%95%B4%EC%84%A4.pdf" },

    { id: "신비2", password: "4545", score: "Na", grade: "-등급",
      message1: "완벽한 성적! 대단해요!", 
      message2: "성적역사 - Na", 
      downloadLink: "?" },

    { id: "박범서2", password: "7070", score: "Na", grade: "-등급",
      message1: "아주 좋은 성적이에요!", 
      message2: "성적역사 - Na", 
      downloadLink: "?" },

    { id: "오지훈2", password: "8383", score: "Na", grade: "-등급",
      message1: "이번 시험은 아쉬운 부분이 있었어요.", 
      message2: "성적역사 - Na", 
      downloadLink: "https://horaeng.com/storage/2023%EB%85%84-%EA%B3%A02-6%EC%9B%94-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC-%EC%88%98%ED%95%99-%ED%95%B4%EC%84%A4.pdf" },

    { id: "이서진2", password: "9696", score: "Na", grade: "-등급",
      message1: "꾸준한 노력이 보이는 성적이에요!", 
      message2: "성적역사 - Na", 
      downloadLink: "?" },

    { id: "한태혁2", password: "2929", score: "56", grade: "5등급",
      message1: "개념 정리가 필요해요!", 
      message2: "성적역사 - Na", 
      downloadLink: "https://horaeng.com/storage/2020%EB%85%84-%EA%B3%A02-3%EC%9B%94-%ED%95%99%ED%8F%89%EC%84%9C%EC%9A%B8_4.24-%EC%8B%9C%ED%96%89-%EA%B5%AD%EC%96%B4-%ED%95%B4%EC%84%A4.pdf" }
];

// 로그인 처리
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const userId = document.getElementById("userId").value.trim();  // trim()으로 공백 제거
    const password = document.getElementById("password").value.trim();  // trim()으로 공백 제거

    console.log("아이디:", userId);
    console.log("비밀번호:", password);

    const student = students.find(s => s.id === userId && s.password === password);

    if (student) {
        // 로그인 성공 시 로그인 폼 숨기고 성적 정보 표시
        document.getElementById("login-container").style.display = "none";
        document.getElementById("student-info").style.display = "block";

        // 성적 정보 표시 (등급은 하늘색)
        document.getElementById("student-score").innerHTML = `
            <strong>점수:</strong> ${student.score}점 | 
            <span style="color: Red; font-weight: bold;">${student.grade}</span>
        `;

        // 학생별 성적 관련 메시지 2개 표시
        document.getElementById("student-message").innerHTML = `
            <p style="color: darkgreen; font-size: 18px; font-weight: bold;">${student.message1}</p>
            <p style="color: darkgreen; font-size: 16px;">${student.message2}</p>
        `;

        // 해설지 다운로드 링크 설정
        document.getElementById("download-link").href = student.downloadLink;
    } else {
        alert("로그인 실패: 아이디 또는 비밀번호가 잘못되었습니다.");
    }
});

// 돌아가기 버튼 클릭 시 로그인 화면으로 복귀
document.getElementById("back-button").addEventListener("click", function() {
    document.getElementById("student-info").style.display = "none"; // 성적 정보 숨기기
    document.getElementById("login-container").style.display = "block";

    // 입력 필드 초기화
    document.getElementById("userId").value = "";
    document.getElementById("password").value = "";
});
    // 성적 우수자 정보 토글 기능
document.getElementById("toggle-top-student").addEventListener("click", function() {
    var topStudent = document.getElementById("top-student");
    
    // 성적 우수자 정보 표시/숨기기
    if (topStudent.style.display === "none") {
        topStudent.style.display = "block";
        this.innerHTML = "공지사항 숨기기 🔼";
    } else {
        topStudent.style.display = "none";
        this.innerHTML = "공지사항 보기 🔽";
    }
});
