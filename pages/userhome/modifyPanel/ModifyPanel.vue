<template>
	<div style="height: 100%; ">
		<TopBar style="position:relative;" :show="false">
			<template #center>
				{{ title }}
			</template>
		</TopBar>
		<div class="content">
			<input :value="'好名字~'" class="add-msg" type="text" />
			<input :value="'好名字~'" class="add-msg" type="text" />
			<div class="tips-info">{{ tipsInfo }}</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import TopBar from '@/components/common/TopBar.vue'
const props = defineProps(['title', 'tipsInfo'])
</script>

<style lang="scss">
.content {
	.add-msg {
		height: 88rpx;
		width: 100%;
		margin-top: 40rpx;
		background: #f3f4f6;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 10rpx 25rpx;
	}
	.tips-info {
		margin: 10rpx 25rpx;
		color: $uni-text-color-grey;
	}
}
</style>
