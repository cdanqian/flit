<template>
  <body>
    <h2>Hi 😀</h2>
    <div>
      <hr aria-orientation="horizontal" class="v-divider" />
    </div>
    <div>
      <table>
        <tr v-for="item in mylist" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.emoji }}</td>
        </tr>
      </table>
    </div>
    <div>
      <hr aria-orientation="horizontal" class="v-divider" />
    </div>
    <div class="v-bottom">
      <div class="v-bottom-addnew">
        <div class="v-icon">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#6d758d"
          >
            <path
              d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"
            />
          </svg>
        </div>
        New Time Zone
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      mylist: this.$store.state.mylist,
    };
  },
  created() {
    this.buildList();
    this.updateSecond();
    this.timer = setInterval(this.updateSecond, 1000);
  },
  methods: {
    buildList() {},
    updateSecond() {
      let locale = "en-US"; // Intl.DateTimeFormat().resolvedOptions().locale;
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
  vertical-align: middle;
  border: none;
}
tr:hover {
  background-color: #f2f2f2;
}
.v-divider {
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid;
  border-width: 1px;
  transition: inherit;
  border-color: #f2f2f2;
  margin-top: 5%;
}
.v-bottom {
  height: 40px;
  justify-content: space-around;
  align-items: center;
}
.v-bottom-addnew {
  cursor: pointer;
  width: 50%;
  user-select: none;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  color: #6d758d;
  transition: color 0.1s;
  display: flex;
  margin-left: 20%;
  margin-top: 3%;
}
.v-icon {
  height: 28px;
  margin-right: 4px;
  margin-left: 4px;
}
.v-icon:hover {
  fill: black;
}
</style>
