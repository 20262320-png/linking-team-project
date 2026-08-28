// 1. 내 파이어베이스 열쇠 (여기를 본인 코드로 바꾸세요!)
const firebaseConfig = {
  apiKey: "AIzaSyCVYArgkRojZ8kIqvI86sxp3rKvh_UHCQc",
  authDomain: "class-dashboard-68f8f.firebaseapp.com",
  databaseURL: "https://class-dashboard-68f8f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "class-dashboard-68f8f",
  storageBucket: "class-dashboard-68f8f.firebasestorage.app",
  messagingSenderId: "137604807190",
  appId: "1:137604807190:web:b6617941b3b37d5c595337"
};

// 2. 파이어베이스 시작
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// 3. 파이어베이스에서 'notice' 데이터 가져와서 HTML에 넣기
db.ref("notice").on("value", (snapshot) => {
  const noticeData = snapshot.val(); 
  document.getElementById("notice-text").innerText = noticeData; 
});
