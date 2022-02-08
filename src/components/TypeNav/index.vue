<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="category">
          <div class="sort" v-show="isTabShow">
            <div class="all-sort-list2" @click="goSearch">
              <div
                class="item"
                v-for="(c1, index) in categoryList"
                :key="c1.categoryId"
                :class="{ cur: currentIndex === index }"
              >
                <h3 @mouseenter="changeIndex(index)" @mouseleave="leaveIndex">
                  <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{
                    c1.categoryName
                  }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{
                          c2.categoryName
                        }}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { mapState } from 'vuex'
import throttle from 'lodash/throttle'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'TypeNav',
  setup() {
    //鼠标悬停着色
    let currentIndex = ref(-1)
    let changeIndex = throttle(function (index) {
      currentIndex.value = index
    }, 50)
    function leaveIndex() {
      currentIndex.value = -1
    }
    //页面跳转
    const router = useRouter()
    function goSearch(e) {
      const { categoryname, category1id, category2id, category3id } = e.target.dataset
      if (categoryname) {
        switch (category1id || category2id || category3id) {
          case category1id:
            router.push({
              name: 'search',
              query: {
                categoryName: categoryname,
                category1Id: category1id
              },
              params: {
                keyWord: route.params.keyWord
              }
            })
            break
          case category2id:
            router.push({
              name: 'search',
              query: {
                categoryName: categoryname,
                category2Id: category2id
              },
              params: {
                keyWord: route.params.keyWord
              }
            })
            break
          case category3id:
            router.push({
              name: 'search',
              query: {
                categoryName: categoryname,
                category3Id: category3id
              },
              params: {
                keyWord: route.params.keyWord
              }
            })
            break
        }
      }
    }
    //弹出菜单
    let isTabShow = ref(true)
    const route = useRoute()
    onMounted(() => {
      if (route.path !== '/home') {
        isTabShow.value = false
      }
    })
    function enterShow() {
      if (route.path !== '/home') {
        isTabShow.value = true
      }
    }
    function leaveShow() {
      if (route.path !== '/home') {
        isTabShow.value = false
      }
    }
    return {
      changeIndex,
      currentIndex,
      leaveIndex,
      goSearch,
      isTabShow,
      enterShow,
      leaveShow,
      route
    }
  },
  //mapState
  computed: {
    ...mapState({ categoryList: state => state.home.categoryList })
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      //过渡度动画的样式

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    .category-enter-from,
    .category-leave-to {
      opacity: 0;
    }
    .category-enter-active,
    .category-leave-active {
      transition: all 0.3 s linear;
    }
  }
}
</style>
