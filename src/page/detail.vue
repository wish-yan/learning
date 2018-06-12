<template>
	<div class='detail'>
		<Header></Header>
		<Banner :bannerImg='bannerImg'></Banner>
		<List :categoryList="categoryList"></List>
	</div>
</template>

<script>
import Header from '@/page/components/header'
import Banner from '@/page/components/banner'
import List from '@/page/components/list'
import Axios from 'axios'

export default {
  name:'detail',

	components:{
		Header,
		Banner,
		List
	},
	data () {
			return {
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				categoryList:[]
			}
	},
	mounted() {
		this.getDetaileInfo()
	},
	methods:{
		getDetaileInfo () {
			this.$ajax.get('static/mock/detail.json')
			.then(this.getHomeInfoSuss)
			.catch(error=>console.log(error))
		},
		getHomeInfoSuss :function (res){
				if(res.status = 200){
				this.sightName=res.data.data.sightName
				this.bannerImg=res.data.data.bannerImg
				this.categoryList=res.data.data.categoryList
				this.gallaryImgs=res.data.data.gallaryImgs
				}
		}
	}
}
</script>

<style>
	.detail{
		height: 1000px
	}
</style>
