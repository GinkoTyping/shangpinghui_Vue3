<template>
  <div class="floor">
    <div class="py-container">
      <div class="title clearfix">
        <h3 class="fl">{{ f1.name }}</h3>
        <div class="fr">
          <ul class="nav-tabs clearfix">
            <li class="active" v-for="(navList, index) in f1.navList" :key="index">
              <a href="#tab1" data-toggle="tab">{{ navList.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content">
        <div class="tab-pane">
          <div class="floor-1">
            <div class="blockgary">
              <ul class="jd-list">
                <li v-for="(keyWords, index) in f1.keywords" :key="index">{{ keyWords }}</li>
              </ul>
              <img :src="f1.imgUrl" />
            </div>
            <div class="floorBanner">
              <div class="swiper-container" id="floor1Swiper">
                <swiper
                  :loop="true"
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="50"
                  navigation
                  :pagination="{ clickable: true }"
                  :scrollbar="{ draggable: false, hide: true }"
                  :autoplay="{
                    delay: 1500
                  }"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                  <swiper-slide v-for="carouselList in f1.carouselList" :key="carouselList.id">
                    <img :src="carouselList.imgUrl" />
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div
                class="floor-conver-pit"
                v-for="(recommendList, index) in f1.recommendList.slice(0, 2)"
                :key="index"
              >
                <img :src="recommendList" />
              </div>
            </div>
            <div class="split center">
              <img :src="f1.bigImg" />
            </div>
            <div class="split">
              <span class="floor-x-line"></span>
              <div
                class="floor-conver-pit"
                v-for="(recommendList, index) in f1.recommendList.slice(2, 3)"
                :key="index"
              >
                <img :src="recommendList" />
              </div>
              <div class="floor-conver-pit">
                <img src="./images/floor-1-6.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'Floor',
  props: ['f1'],
  components: { Swiper, SwiperSlide },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination]
    }
  }
}
</script>

<style scoped lang="less">
.floor {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      .fl {
        float: left;
        color: #c81623;
        font-size: 20px;
        line-height: 30px;
        margin: 9px 0;
        font-weight: 700;
      }

      .fr {
        float: right;

        .nav-tabs {
          margin: 10px 0 0;
          display: inline-block;

          li {
            float: left;
            line-height: 18px;

            a {
              padding-top: 1px;
              font-weight: 400;
              background-color: #fff;

              &::after {
                content: '|';
                padding: 0 10px;
              }
            }

            &:nth-child(7) {
              a {
                &::after {
                  content: '';
                }
              }
            }

            &.active {
              a {
                color: #e1251b;
              }
            }
          }
        }
      }
    }

    .tab-content {
      border-top: 2px solid #c81623;
      border-bottom: 1px solid #e4e4e4;

      .tab-pane {
        .floor-1 {
          height: 360px;
          display: flex;

          .blockgary {
            width: 210px;
            height: 100%;
            background: #f7f7f7;

            .jd-list {
              padding: 15px 0;
              overflow: hidden;

              li {
                list-style-type: none;
                float: left;
                width: 40%;
                margin: 0 10px;
                border-bottom: 1px solid #e4e4e4;
                text-align: center;
                line-height: 26px;
              }
            }

            img {
              width: 100%;
            }
          }

          .floorBanner {
            width: 330px;
            height: 100%;
          }

          .split {
            width: 220px;
            height: 100%;
            position: relative;

            .floor-x-line {
              position: absolute;
              background: #e4e4e4;
              width: 220px;
              height: 1px;
              top: 180px;
            }

            .floor-conver-pit {
              width: 100%;
              height: 50%;

              img {
                width: 100%;
                height: 100%;
                transition: all 400ms;

                &:hover {
                  opacity: 0.8;
                }
              }
            }
          }

          .center {
            border: 1px solid #e4e4e4;
          }
        }
      }
    }
  }
}
</style>
