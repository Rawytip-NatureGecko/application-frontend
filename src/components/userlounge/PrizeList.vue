<template>
  <div class="my-5 px-5">
    <div class="main-header-large">Prize</div>
    <div class="info-box">
      {{ $t("General.WarningLine1") }}<br /><br />
      {{ $t("General.WarningLine2") }}
    </div>
    <div class="prize-list">
      <div class="my-2 text-white">งวดที่ 1 ประจำวันที่ 9 เมษายน 2565</div>
      <!--Top Peize-->
      <div class="flex justify-between">
        <div clas="my-5 px-2">
          <div class="label">Grand Prize</div>
          <div class="prize-first">{{ prizeVisual.grand }}</div>
        </div>
        <div clas="my-5 px-2">
          <div class="label">First 3 number</div>
          <div class="flex flex-row">
            <div class="prize-first mx-2">{{ prizeVisual.firstThree[0] }}</div>
            <div class="prize-first mx-2">{{ prizeVisual.firstThree[1] }}</div>
          </div>
        </div>
        <div clas="my-5 px-2">
          <div class="label">Last 3 number</div>
          <div class="flex flex-row">
            <div class="prize-first mx-2">{{ prizeVisual.lastThree[0] }}</div>
            <div class="prize-first mx-2">{{ prizeVisual.lastThree[1] }}</div>
          </div>
        </div>
        <div clas="my-5 px-2">
          <div class="label">Last 2 number</div>
          <div class="prize-first">{{ prizeVisual.lastTwo }}</div>
        </div>
      </div>
      <!--Side Prize-->
      <div class="prize-category-box flex justify-between">
        <div class="prize-title-box w-1/2">
          <p class="prize-title-large">รางวัลข้างเคียงรางวัลที่ 1</p>
          <p class="prize-title-small">รางวัลละ 100,000 ทองแดง</p>
        </div>
        <div class="flex justify-center flex-shrink w-full">
          <div class="prize-number-box">{{ prizeVisual.grandSide[0] }}</div>
          <div class="prize-number-box">{{ prizeVisual.grandSide[1] }}</div>
        </div>
      </div>
      <!--Second Prize-->
      <div class="prize-category-box">
        <div class="prize-title-box">
          รางวัลที่ 2 มี 5 รางวัลๆละ 200,000 ทองแดง
        </div>
        <div class="flex justify-between">
          <div class="prize-other-number-box" v-for="item in prizeVisual.type2.slice(0,5)" v-bind:key="item">{{ item }}</div>
        </div>
      </div>
      <!--Third Prize-->
      <div class="prize-category-box">
        <div class="prize-title-box">
          รางวัลที่ 3 มี 10 รางวัลๆละ 80,000 ทองแดง
        </div>
        <div class="flex justify-between" v-for="number in 2" v-bind:key="number">
          <div class="prize-other-number-box" v-for="item in prizeVisual.type3.slice((number+5)-6,(number+10)-6)" v-bind:key="item">{{ item }}</div>
        </div>
      </div>
      <!--Forth Prize-->
      <div class="prize-category-box">
        <div class="prize-title-box">
          รางวัลที่ 4 มี 50 รางวัลๆละ 40,000 ทองแดง
        </div>
        <div class="flex justify-between" v-for="number in 10" v-bind:key="number">
          <div class="prize-other-number-box" v-for="item in prizeVisual.type4.slice((number+5)-6,(number+10)-6)" v-bind:key="item">{{ item }}</div>
        </div>
      </div>
      <!--Fifth Prize-->
      <div class="prize-category-box">
        <div class="prize-title-box">
          รางวัลที่ 5 มี 100 รางวัลๆละ 20,000 ทองแดง
        </div>
        <div class="flex justify-between" v-for="number in 20" v-bind:key="number">
          <div class="prize-other-number-box" v-for="item in prizeVisual.type5.slice((number+5)-6,(number+10)-6)" v-bind:key="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  @apply text-yellow-900 font-poppins text-center text-lg;
}
.prize-first {
  @apply rounded-lg items-center
  bg-stellar-warm px-5 py-1 text-2xl font-semibold my-2;
}
.prize-second-list {
  @apply font-poppins;
}
</style>

<script lang="js">
export default({
    Data(){
        return{
          prizeRaw:{},
          prizeVisual:{}
        }
    },
    methods:{
      updateNewPrizeList(){
        let visualData = {};
        visualData.grand = this.prizeRaw.grand;
        visualData.firstThree = this.prizeRaw.firstThree.split(",")
        visualData.lastThree = this.prizeRaw.lastThree.split(",")
        visualData.lastTwo = this.prizeRaw.lastTwo;
        visualData.grandSide = this.prizeRaw.grandSide.split(",")
        visualData.type2 = this.prizeRaw.type2.split(",")
        visualData.type3 = this.prizeRaw.type3.split(",")
        visualData.type4 = this.prizeRaw.type4.split(",")
        visualData.type5 = this.prizeRaw.type5.split(",")
        this.prizeVisual = visualData;
      }
    },
    created(){
      this.prizeRaw = {grand:"549723",
            firstThree:"445,779",
            lastThree:"785,215",
            lastTwo:"45",
            grandSide:"549722,549724",
            type2:"456748,648640,134864,123451,002132,123123",
            type3:"730821,655637,067179,793027,811352,203935,301575,982981,479830,838553",
            type4:"706917,395315,162460,148314,052805,499436,304176,364273,558363,757280,448026,599427,811786,566094,686483,540274,824776,430119,426997,068976,187432,526619,801066,101747,067850,700288,866583,450528,354897,351628,022726,455761,717157,597234,869446,489581,303661,074630,900623,141539,449071,852378,719585,721328,382024,627599,024782,599464,204589,522338",
            type5:"276497,822756,636174,372475,557858,065667,210184,007626,128055,566806,685458,943623,624736,437772,215625,428941,334359,718615,931400,412584,970728,316865,423901,625970,103301,943127,887738,050713,184139,412597,670600,582988,114984,991060,561657,307614,589196,601641,683765,591947,817252,217382,327327,327965,429854,875805,770198,317366,931210,089386,298234,379621,159983,173862,795654,284271,113480,433166,394467,740651,950923,118221,060058,388184,473354,151421,766128,127519,672828,856031,128831,904981,623629,238322,672217,729083,344020,910245,259121,992699,893881,402670,294933,226403,624403,203166,809482,994436,493175,111981,038747,450926,450390,029286,650784,771621,665845,310064,134417,268704,624597,480116,012532,679102,709114,348748,839273,286594,694378,578528,116934,957758,703036,647089,211115,665333,228356,585789,367170,898652,973850,382763,083782,070642,164643,225853,648405,130383,401198,812971,269939,792512,907324,048677,726078,582053,537220,729181,152021,884610,841973,478182,134476,139651,664135,484107,278921,480183,211320,408253,502613,195066,700751,725804,017155,926366,236830,133253,345697,934991,896066,649624,443209,123232,891813,624546,032570,035409,309727,108976,769974,785265,962675,465962,478610,245928,167206,622031,571329,111389,600763,299653,924788,512523,028345,248922,036982,168974,802205,626162,715684,171949,748024,238272,104139,317453,108113,863244,234514,601082"};
            this.updateNewPrizeList()
    }
})
</script>
