<template>
<body>
  <h2>Hi 😀</h2>
  <div>
    <table>
      <tr v-for="item in mylist" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.time }}</td>
        <td>{{ item.emoji }}</td>
      </tr>
    </table>
  </div>
</body>
</template>

<script>
export default {
  data() {
    return {
      mylist: [],
    };
  },
  created() {
    this.buildList();
    this.updateSecond();
    this.timer = setInterval(this.updateSecond, 1000);
  },
  methods: {
    buildList() {
      this.mylist.push({
        id: 0,
        name: "San Francisco",
        time: new Date(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        emoji: "",
      });
      this.mylist.push({
        id: 1,
        name: "Seoul, South Korea",
        time: new Date(),
        timezone: "Asia/Seoul",
        emoji: "",
      });
      this.mylist.push({
        id: 2,
        name: "Beijing, China",
        time: new Date(),
        timezone: "Asia/Shanghai",
        emoji: "",
      });
    },
    updateSecond() {
      // let locale = Intl.DateTimeFormat().resolvedOptions().locale;
      let locale = "en-US";
      this.mylist.map((obj) => {
        obj.time = new Date().toLocaleString(locale, {
          timeZone: obj.timezone,
          hour12: false,
        });
        let hour = obj.time.split(",")[1].split(":")[0] - 0;
        obj.emoji = hour > 6 && hour < 19 ? "😎" : "🌙";
      });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
body {
  height: 160px;
  width: 260px;
  outline: none;
}
table tr td {
  font-size: 12px;
  height: 30px;
  vertical-align: bottom;
  border: none;
}
tr:hover {
  background-color: #f2f2f2;
}
</style>
