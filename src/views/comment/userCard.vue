<template>
  <div class="card" ref="card">
    <div class="arrow"></div>
    <div v-if="fetching" class="load">
      <svg-icon :name="'loading'"/>
    </div>
    <div v-else class="wrap">
      <div class="info" flex>
        <err-avatar :url="cardInfo.ghUrl" :avatar="cardInfo.avatar"/>
        <div flex>
          <a :href="cardInfo.ghUrl" target="_blank">{{ $props.login }}<span>({{ cardInfo.name||defaultCardInfo.name }})</span></a>
          <span>{{ cardInfo.bio || defaultCardInfo.bio }}</span>
        </div>
      </div>
      <div class="detail" flex>
        <div>
          <svg-icon :name="'card-website'"/>
          <b>个人网站</b>
          <span>
            <a :href="href" target="_blank">{{ cardInfo.website }}</a>
          </span>
        </div>
        <div>
          <svg-icon :name="'card-location'"/>
          <b>地址</b>
          <span>{{ cardInfo.location || defaultCardInfo.location }}</span>
        </div>
        <div>
          <svg-icon :name="'card-followers'"/>
          <b>粉丝数</b>
          <span>{{ cardInfo.followers || defaultCardInfo.followers }}</span>
        </div>
        <div>
          <svg-icon :name="'card-repositories'"/>
          <b>仓库数</b>
          <span>{{ cardInfo.repoCount || defaultCardInfo.repoCount }}</span>
        </div>
        <div>
          <svg-icon :name="'card-disk'"/>
          <b>仓库大小</b>
          <span>{{ cardInfo.repoSize || defaultCardInfo.repoSize }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserCard} from "@/views/comment/utils";
import errImg from '@/image/error.jpg'
import ErrAvatar from "@/views/comment/errAvatar";

export default {
  components: {ErrAvatar},
  props: ['login'],
  name: "userCard",
  data() {
    return {
      defaultCardInfo: {
        avatar: errImg,
        ghUrl: 'https://github.com/',
        name: 'Unknown',
        bio: '暂无',
        website: 'https://github.com/',
        location: '地球',
        followers: 0,
        repoCount: 0,
        repoSize: '0k',
      },
      cardInfo: {
        avatar: '',
        ghUrl: '',
        name: '',
        bio: '',
        website: '',
        location: '',
        followers: 0,
        repoCount: 0,
        repoSize: '',
      },
      fetching: true
    }
  },
  computed: {
    href() {
      return this.cardInfo.website.match(/^https?:\/\//) ?
          this.cardInfo.website :
          ('http://' + this.cardInfo.website)
    },
    defaultUrl (){
      return (this.defaultCardInfo.website+this.$props.login)
    }
  },
  created() {
    getUserCard(this.$props.login).then(res => {
      this.fetching = false;
      if (res[0] && res[1].status === 200) {
        const data = res[1].data.data.user;
        this.cardInfo.avatar = data.avatarUrl;
        this.cardInfo.ghUrl = data.url||this.defaultUrl;
        this.cardInfo.name = data.name;
        this.cardInfo.bio = data.bio;
        this.cardInfo.website = data.websiteUrl||this.defaultUrl;
        this.cardInfo.location = data.location;
        this.cardInfo.followers = data.followers.totalCount;
        this.cardInfo.repoCount = data.repositories.totalCount;
        const usage = data.repositories.totalDiskUsage;
        this.cardInfo.repoSize = usage > 1024 ? ((usage / 1024).toFixed(1) + 'M') : (usage + 'K');
      } else {
        this.cardInfo = this.defaultCardInfo;
      }
    })
  },
  methods: {
    errAvatar (e){
      e.src = errImg
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/public";

.card {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: .5rem;
  background: white;
  border: 1px solid #cecece;
  box-shadow: 0 0 1rem rgba(0, 0, 0, .4);
  border-radius: .2rem;
  z-index: $z-comment-card;
  animation: fade-in .2s ease-out forwards;
  opacity: 0;
  @keyframes fade-in {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  > .arrow {
    position: absolute;
    top: -.4rem;
    left: .8rem;
    border: inherit;
    box-shadow: inherit;
    background: inherit;
    width: .8rem;
    height: .8rem;
    transform: rotate(45deg);
    z-index: 1;
    &:before{
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: transparent;
    }
  }

  >.load, > .wrap {
    position: relative;
    z-index: 2;
    background: inherit;
  }
  >.load{
    padding: 1rem;
    >svg{
      width: 5rem;
      height: 5rem;
    }
  }

  > .wrap {
    padding: .8rem;
    overflow-x: auto;
    max-width: 20rem;

    > .info {
      align-items: flex-start;

      ::v-deep >.avatar {
        width: 5rem;
        height: 5rem;
      }

      > div {
        flex-direction: column;

        > a {
          font-size: .95rem;
          color: black;
          word-break: keep-all;
          font-weight: bold;
          text-decoration: none;
          > span {
            margin-left: .4rem;
            color: #505050;
          }
          &:hover, &:hover>span{
            color: #0003ff;
          }
        }

        > span {
          margin-top: .5rem;
          font-size: .88rem;
          color: #4e4e4e;
        }
      }
    }

    > .detail {
      margin-top: .5rem;
      padding-top: .5rem;
      flex-direction: column;
      border-top: 1px solid #c1c1c1;
      width: 100%;

      > div {
        display: flex;
        align-items: center;
        width: 100%;
        margin: .3rem 0;

        > svg {
          width: 1.2rem;
          height: 1.2rem;
          flex-shrink: 0;
        }
        >b{
          margin: 0 .8rem 0 .4rem;
          font-size: .9rem;
          width: 3.6rem;
          text-align: center;
          word-break: keep-all;
        }

        > span {
          font-size: .98rem;
          flex-grow: 1;
          text-align: right;

          > a[href] {
            color: black;
            text-decoration: none;

            &:hover {
              color: #0037ff;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>