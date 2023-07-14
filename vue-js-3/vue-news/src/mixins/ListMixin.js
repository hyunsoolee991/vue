import bus from "../utils/bus.js";

// mixin
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  mounted() {
    bus.$emit("end:spinner");
  },
};
