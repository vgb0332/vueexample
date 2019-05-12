<script>
import firebase from 'firebase';
export default {
  name: 'Header',
  data () {
    return {
      sitename: "Vue.js 애완 샵"
    }
  },
  props: ['cartItemCount'],
  beforeCreate() {
      firebase.auth().onAuthStateChanged((user)=> {
          this.$store.commit('SET_SESSION', user || false)
      });
  },
  methods: {
    showCheckout() {
      this.$router.push({name: 'Form'});
    },
    signIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log('로그인!');
      }).catch(function(error){
        console.log('에러 ' + error)
      });
    },
    signOut() {
      firebase.auth().signOut().then(function() {
        // 로그아웃 성공.
        console.log("로그아웃!")
      }).catch(function(error) {
        console.log("로그아웃 에러!")
        // 에러 발생.
      });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
}
</script>
