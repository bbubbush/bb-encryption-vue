<template>
  <div class="content-body">
    <div class="content-section">
      <div class="content-container">
        <div class="content-text-side">
          <!-- Title -->
          <div class="content-text-subsection">
            <div class="content-text-title">Encrypt</div>
            <div class="content-text-body">
              AES 방식은 양방향 - 단일키 암호화 방식 입니다
            </div>
            <div class="content-text-warning">
                <p>{{ this.encErrorMsg }}</p> 
            </div>
          </div>
          <!-- button -->
          <div class="content-button-subsection">
            <div class="content-button-section" @click="encodingAes">
              <div class="content-button-title">
                암호화
              </div>
            </div>
            <div class="content-button-section" @click="copyEncodingText" style="background: #32C1FF;">
              <div class="content-button-title">복사하기</div>
            </div>
          </div>
        </div>
        <div class="content-image-side">
          <div class="content-image-section">
            <div class="content-image-lable">평&nbsp;&nbsp;&nbsp;&nbsp;문</div>
            <input v-model="encPlaneText" class="content-image-text" placeholder="입력해 주세요"/>
          </div>
          <div class="content-image-section">
            <div class="content-image-lable">비밀키</div>
            <input v-model="encSecretKey" class="content-image-text" placeholder="입력해 주세요"/>
          </div>
          <div class="content-image-section">
            <div class="content-image-lable">암호문</div>
            <input v-model="encEncodingText" id="encEncodingText" class="content-image-text" placeholder="입력해 주세요" readonly/>
          </div>
        </div>
      </div>
      <hr class="line-bar"/>
      <!-- 복호화 -->
      <div class="content-container">
        <div class="content-text-side">
          <!-- Title -->
          <div class="content-text-subsection">
            <div class="content-text-title">Decrypt</div>
            <div class="content-text-body">
              복호화 방식을 선택해 주세요
            </div>
            <div class="content-text-warning">
                <p>{{ this.decErrorMsg }}</p> 
            </div>
          </div>
          <!-- button -->
          <div class="content-button-subsection">
            <div class="content-button-section" @click="decodingAes">
              <div class="content-button-title">복호화</div>
            </div>
            <div class="content-button-section" @click="copyDecodingText" style="background: #32C1FF;">
              <div class="content-button-title">복사하기</div>
            </div>
          </div>
        </div>
        <div class="content-image-side">
          <div class="content-image-section">
            <div class="content-image-lable">암호문</div>
            <input v-model="decEncodingText" class="content-image-text" placeholder="입력해 주세요"/>
          </div>
          <div class="content-image-section">
            <div class="content-image-lable">비밀키</div>
            <input v-model="decSecretKey" class="content-image-text" placeholder="입력해 주세요"/>
          </div>
          <div class="content-image-section">
            <div class="content-image-lable">평&nbsp;&nbsp;&nbsp;&nbsp;문</div>
            <input v-model="decDecodingText" id="decDecodingText" class="content-image-text" placeholder="입력해 주세요"/>
          </div>
        </div>
      </div>
      <hr class="line-bar"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        encPlaneText: '안녕하세요'
        , encSecretKey: '1234567890123456'
        , encEncodingText: ''
        , encErrorMsg: ''
        , decEncodingText: ''
        , decSecretKey: '1234567890123456'
        , decDecodingText: ''
        , decErrorMsg: ''
    };
  },

  methods: {
    encodingAes() {
      this.encEncodingText = ''
      if (this.encPlaneText.length == 0) {
        this.encErrorMsg = '평문은 필수값입니다'
        return;
      }
      if ( !(this.encSecretKey.length == 16 || this.encSecretKey.length == 24 || this.encSecretKey.length == 32) ) {
        this.encErrorMsg = '비밀키의 길이는 16, 24, 32가 되어야 합니다.'
        return;
      }

      const param = {
        planeText: this.encPlaneText
        , secretKey: this.encSecretKey
        , type: 'CBC'
      }
      this.encErrorMsg = ''
      axios.post(`https://enc.bbubbush.com/api/enc/aes`, param)
      .then((res) => {
        if (res.data.resultCode == '200') {
          this.encEncodingText = res.data.body
          console.log(this.encEncodingText)
        } else {
          this.encErrorMsg = res.data.resultMessage
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },

    copyEncodingText() {
      var copyText = document.getElementById('encEncodingText');
      copyText.select();
      document.execCommand("Copy");
      this.encErrorMsg = '클립보드에 복사가 완료되었습니다.'
    },

    decodingAes() {
      this.decDecodingText = ''
      if (this.decEncodingText.length == 0) {
        this.decErrorMsg = '암호문은 필수값입니다'
        return;
      }
      // if (this.decEncodingText.length != 24) {
      //   this.decErrorMsg = '암호문의 길이는 24글자 입니다.'
      //   return;
      // }
      if ( !(this.decSecretKey.length == 16 || this.decSecretKey.length == 24 || this.decSecretKey.length == 32) ) {
        this.decErrorMsg = '비밀키의 길이는 16, 24, 32글자가 되어야 합니다.'
        return;
      }

      const param = {
        encodingText: this.decEncodingText
        , secretKey: this.decSecretKey
        , type: 'CBC'
      }
      this.decErrorMsg = ''
      axios.post(`https://enc.bbubbush.com/api/dec/aes`, param)
      .then((res) => {
        if (res.data.resultCode == '200') {
          this.decDecodingText = res.data.body
        } else {
          this.decErrorMsg = res.data.resultMessage
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },

    copyDecodingText() {
      var copyText = document.getElementById('decDecodingText');
      copyText.select();
      document.execCommand("Copy");
      this.decErrorMsg = '클립보드에 복사가 완료되었습니다.'
    },
  }
  
}
</script>

<style>
.content-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0rem;
}
.content-section {
  display: block;
  padding: 0rem;
  position: static;
  border-radius: 0px;
  margin: 0 auto;
  width: 1000px;

}
.content-container {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  /* width: 1200px;
  height: 445px;
  left: 40px;
  top: 37px; */

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

.content-text-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: static;
  border-radius: 0px;
}

.content-text-subsection {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 480px;
  height: 275px;
  left: 10px;
  top: 10px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

.content-button-subsection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 500px;
  height: 46px;
  left: 10px;
  top: 309px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 24px 0px;
}

.content-text-title {
  position: static;
  width: 480px;
  height: 29px;
  left: 0px;
  top: 0px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #0A2A42;
}

.content-text-body {
  position: static;
  /* width: 480px;
  height: 174px;
  left: 0px;
  top: 53px; */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 58px;

  color: #000000;


  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

.content-text-warning {
  position: static;
  width: 480px;
  height: 24px;
  left: 0px;
  top: 251px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #FF1414;


  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 24px 0px;
}

.content-image-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  position: static;
  border-radius: 0px;
}

.content-button-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 28px;

  position: static;
  width: 139px;
  height: 46px;
  left: 0px;
  top: 0px;

  background: #F3B619;
  border-radius: 10px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
}

.content-button-title {
  position: static;
  width: 83px;
  height: 40px;
  left: 28px;
  top: 3px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  /* identical to box height, or 222% */
  text-align: center;

  color: #FFFFFF;


  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
}

.content-image-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  /* width: 660px;
  height: 100px;
  left: 0px;
  top: -17px; */

  border-radius: 0px;
  

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
}

.content-image-text {
  position: static;
  /* width: 560px;
  height: 50px;
  left: 105px;
  top: 25px; */
  text-align: left;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  /* or 133% */
  display: flex;
  align-items: center;

  color: #000000;

  border: 0.5px solid #e7e4e4;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;
}

.content-image-lable {
  position: static;
  /* width: 100px;
  height: 50px;
  left: -5px;
  top: 25px; */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  /* or 133% */
  display: flex;
  align-items: center;

  color: #000000;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}

.line-bar {
  margin-top: 3rem;
  border-top-width: 3px;
  border-top-color: #e6e6e6;
  opacity: 0.3;
}


</style>
