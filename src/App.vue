<template>
  <div id="app">
    <div class="logo">
      <div class="log_con">
        <img src="./assets/abiclogo.png" alt="" srcset="">
        <span>A Real Estate Company with Advance Purpose</span>
      </div>
    </div>
    <h2 class="title">ABIC REALTY VISION MISSION</h2>
    <div class="vision_mission">
      <div class="listcon">
        <p class="con"><strong>Vision</strong> to provide quality servise with excellent & consistent client experience, that embraces the values of being commited to excellent, respect client, inspire others, and show the unit that we have fun, encourage and celebrate the journey together. </p>
        <p class="con"><strong>Mission</strong> statement to build long term relationships with our clients and provide exceptional services by pursuing business through innovation and advanced techniques for fastest transaction.</p>
      </div>
    </div>
    <h2 class="title">OUR SERVICE</h2>
    <div class="service">
      <div class="left">
        <img src="./assets/dksjdk.jpeg" alt="" srcset="">
      </div>
      <div class="right">
        We are a full-service real estate company offering the most comprehensive real estate services in the market. Our results-oriented approach provides our client good upshot with optimal solutions
        ABIC REALTY conducts real estate marketing as well as real estate activities or Contract basis. The company undertakes all maintenance duties for real estate facilities and organizations and conducts all the security and checking for the properties to secure the clients security and money for there investments and own safety.
      </div>
    </div>
    <h2 class="title">ABOUT US</h2>
    <div class="abous">
      <div class="name">AWARDS AND RECOGNITIONS</div>
      <div class="imgs">
        <img class="ab1_1" src="./assets//dskajisd.jpg" alt="" srcset="">
        <img class="ab1_3" src="./assets/sdgfdji455.jpg" alt="" srcset="">
        <img class="ab1_2" src="./assets/dddgfdsd111.jpg" alt="">
      </div>
      <div>
        MR. ANGELLE SARMIENTO is a dream catcher; he helps new friend catch their dreams of buying and selling wonderful home and properties. The man behind ABIC REALTY, resident of Las Pinas for more than 30 years. He is providing the most escellent service to buyers and sellers in order to ear trust, referrals, and repeat business. His client appreciates his flexibility, low pressure sales, patience, ability to listen and hear what client wants, negotiation and analytic skills, and his ability to accurately price and market properties. 
      </div>
    </div>
    <div class="abous">
      <div class="name">COMMUNITY SERVICES ENGAGE BY THE WELL-KNOWN DEVELOPERS </div>
      <div class="imgs">
        <img class="ab1_3" src="./assets/234qwe.jpg" alt="" srcset="">
        <img class="ab1_1" src="./assets/123qwe.jpg" alt="" srcset="">
        <img class="ab1_2" src="./assets/345qwe.jpg" alt="">
      </div>
    </div>
    <div class="abous">
      <div class="imgs">
        <img class="ab1_3" src="./assets/download.jpg" alt="" srcset="">
        <p>
          We are also partnering high class and trusted developers all over the country. We are certified and come along the process of each sources to be one of there partner like DMCI Homes, SMDC, Ayala Land, Megaworld and many more. 
          Nationwide projects of each developers can be handled by us. In real estate industry there’s more than one way to skin a cat, which means that being a real estate agent/broker/company isn’t the only way to build a successful business. Real Estate developers are entrepreneurs that identify prime real estate, develop the property, collect lessees or sell developments for a profit that help a real estate company engage to it. 
        </p>
      </div>
      <div class="imgs">
        <img class="ab1_1" src="./assets/images.jpg" alt="" srcset="">
        <img class="ab1_2" src="./assets/dmcihomes.jpg" alt="">
      </div>
    </div>
    
    <h2 class="title">WHY PHILIPPINES IS AN IDEAL INVESTMENT PARTNER? </h2>
    <div class="INVESTMENT">
      <div class="list">
        <img src="./assets/123.jpg" alt="">
        <div class="listcon">
          <h3>Strategic location</h3>
          <div class="con">
            <p>The Philippines is ideally situated in the fast-growing Association of Southeast Nations (ASEAN) region, which has a market base of hundreds of millions of people.</p>
            <p>Filipino and other Asian consumers are willing to spend on key commodities and services, making them good prospects for your business.</p>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="listcon">
          <h3>Highly educated workforce</h3>
          <div class="con">
            <p>Filipinos are among the most educated and highly trainable labor force in Asia, not to mention that the Philippines is a largely English-speaking country.</p>
            <p>Traditional methods of education are now complemented with advancing technologies, increasing the computer and digital literacy of the average Filipino. </p>
          </div>
        </div>
        <img src="./assets/unnamed.jpg" alt="">
      </div>
      <div class="list">
        <div>
          <h3>Low cost of living</h3>
          <div>
            <p>As an investor, you want to have access to a lifestyle that suits your preference and lets you enjoy in a new environment even miles away from your home country. Major business districts in the Philippines are not only home to many first-rate business establishments and residential communities, but also offers these amenities at lower costs compared to other cities in the world.</p>
          </div>
        </div>
      </div>
      <div class="list">
        <img src="./assets/342.png" alt="">
        <div class="listcon">
          <h3>Expanding infrastructure</h3>
          <div class="con">
            <p>As mentioned, the Philippine government is committed to building more roads and bridges—infrastructure that’s necessary for moving goods fast from the producer to the consumer.</p>
            <p>The country is also working on strengthening its information and communication technology systems. </p>
            <p>In addition, you could easily find office space in major business districts in the metro ready for your operations.</p>
          </div>
        </div>
      </div>
      
    </div>
    <h2 class="title">WHY CHOOSE US?</h2>
    <div class="choose">
      <div>
        <strong>Knowledgeable : </strong> 
        <span> We strive to understand our markets and our clients’ needs</span>
      </div>
      <div>
        <strong>Connected : </strong> 
        <span> Relationships are everything to us, we connect people to their homes and to their communities.</span>
      </div>
      <div>
        <strong>Passionate : </strong> 
        <span> We believe that working with “all heart” can change the world.</span>
      </div>
      <div>
        <strong>Upstanding : </strong> 
        <span> Our clients’ needs and best interests are at the heart of everything we do.</span>
      </div>
      <div>
        <strong>Effective : </strong> 
        <span> We set a high bar and move mountains to exceed expectations</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
   mounted(){
    change();
    function change() {
      var whdef = 100/1920; // 表示1920的设计图,使用100PX的默认值
      var wW = window.innerWidth; // 当前窗口的宽度
      var rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
    }
    window.addEventListener('resize', change, false);
    window.addEventListener('orientationchange', change, false);
   }
}
</script>
<style lang="stylus" scoped>
#app
  margin 0 auto
  font-size 0.26rem
  color #333333
  padding-bottom 1rem
.logo
  width 100%
  height 1.3rem
  line-height 1.3rem
  background-image linear-gradient(to right, #ffa54f , yellow);
  text-align center
  .log_con
    width 96%
    padding 0 2%
    margin 0 auto
    position relative
    display flex
    justify-content center
    align-items center
    font-size 0.4rem
    font-weight bold
    justify-content space-around
    img
      width 3rem
      position absolute
      left 2%
.title
  font-size 0.34rem
  line-height 0.6rem
  margin 30px auto 0.3rem
  width 96%
  background-image:-webkit-linear-gradient(right,#ffa54f,yellow,#ffa54f); 
  -webkit-background-clip:text; 
  -webkit-text-fill-color:transparent; 
.vision_mission
  width 96%
  margin 0 auto
  .listcon  
    font-size 0.26rem
    display flex
    p
      width 48%
      padding 0 1%
      strong
        font-size 0.28rem
        font-weight bold
        color #333333
.abous
  width 96%
  margin 20px auto
  .name
    color #333333
    font-weight 600
    font-size 0.3rem
  &>div
    padding 0 1%
    margin-bottom 10px
    display flex
    justify-content space-between
    align-content center
    align-items center
    img 
      height 4rem
    p
      margin-left 30px
.service
  width 96%
  margin 0 auto
  height 300px
  margin 0 auto
  display flex
  align-content center
  .right
    font-size 0.26rem
    display flex
    align-content center
    align-items center
  &>div
    width 48%
    padding 0 1%
    .lc
      display flex
      justify-content center
      p
        display flex
        align-content center
        justify-content center
        align-items center
      .SECURITY
        width 250px
      .PROPERTIES
        width 250px
      .radius
        width: 150px;
        display flex
        align-items center
        justify-content center
        text-align center
        height: 80px;
        border-radius: 50% / 50%;
        border 1px solid  #FFD900
    .REALTY
      margin 20px 0;
.INVESTMENT
  width 96%
  margin 0 auto
  .list
    display flex
    justify-content space-between
    align-content center
    margin-bottom 30px
    align-items center
    margin-left 1%
    img 
      width 30%
    .listcon
      width 65%  
      display flex
      flex-wrap wrap
      align-items center
      align-content center
.choose
  width 96%
  margin 0 auto
  div
    margin-bottom 0.3rem
    margin-left 1%
    strong 
      font-weight bold
      font-size 0.28rem
      color #333333

</style>
