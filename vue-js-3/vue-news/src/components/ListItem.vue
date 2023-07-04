<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" v-bind:key="item.id" class="post">
        <!-- 포인트 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="news-title">
            <!-- news, jobs만 domain이 존재 -->
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <!-- ask -->
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text"
            >{{ item.time_ago }} by
            <!-- news, ask만 user가 존재 -->
            <router-link
              v-if="item.user"
              v-bind:to="`/user/${item.user}`"
              class="link-text"
              >{{ item.user }}</router-link
            >
            <!-- jobs -->
            <a v-else :href="item.url">{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    const name = this.$route.name;
    let actionName = "";
    if (name === "news") actionName = "FETCH_NEWS";
    else if (name === "ask") actionName = "FETCH_ASK";
    else if (name === "jobs") actionName = "FETCH_JOBS";
    this.$store.dispatch(actionName);
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      let state = "";
      if (name === "news") state = this.$store.state.news;
      else if (name === "ask") state = this.$store.state.ask;
      else if (name === "jobs") state = this.$store.state.jobs;
      return state;
    },
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
