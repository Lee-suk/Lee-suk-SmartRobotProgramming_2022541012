<template>
  <!-- v-layout 영역 차지 부분 알고  -->
  <!-- v-layout 가운데 위치 정렬 -->
  <v-layout class="background" align-center justify-center>
    <div class="form">
      <!-- id를 위한 text field -->
      <v-text-field label="아이디" v-model="form.id"></v-text-field>
      <!-- password를 위한 text field -->
      <v-text-field
        type="password"
        label="password"
        v-model="form.password"
      ></v-text-field>
      <!-- margin : 바깥쪽 여백 / padding : 안쪽 여백 -->
      <!-- <v-btn @click="login" class="mr-2">로그인</v-btn> -->
      <mjc-btn
        label="로그인"
        :background="loginbtnBg"
        fontcolor="white"
        @click="login"
        @changeBackground="loginBtnBackground"
        >로그인</mjc-btn
      >
      <!-- <v-btn @click="moveJoin">회원가입</v-btn> -->
      <mjc-btn
        label="회원가입"
        background="#0000ff"
        fontcolor="white"
        @click="moveJoin"
        >회원가입</mjc-btn
      >
    </div>
  </v-layout>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import MjcBtn from "@/components/MjcBtn";

export default {
  components: {
    MjcBtn,
  },

  name: "Home",
  data() {
    return {
      loginbtnBg: "#ff0000",
      form: {
        id: "",
        password: "",
      },
      name: "",
    };
  },
  methods: {
    loginBtnBackground(background) {
      this.loginbtnBg = background;
    },
    login(background) {
      console.log(background);
      //TODO : 폼 체크하는거 추가해야됨
      if (this.form.id == "") {
        window.alert("아이디를 입력해주세요");
        return;
      }
      if (this.form.password < 8) {
        window.alert("패스워드는 8자 이상이어야 합니다.");
        return;
      }

      // TODO: 서버에 전송해서 로그인 시키기
      this.axios.post("/api/users/login", this.form).then((result) => {
        if (result.data.result == "ok") {
          console.log(result.data.user);
          this.$store.commit("setUser", result.data.user); // store에 데이터 저장
          // 로그인 성공한 경우
          this.$router.push("/board");
        }
        if (result.data.result == "fail") {
          //로그인 실패한 경우
          window.alert(result.data.message);
        }
      });
    },
    moveJoin() {
      this.$router.push("/join");
    },
  },
};
</script>

<style scoped>
.background {
  background: #eeeeee;
}

.background .form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
