<!-- 歌单下属歌曲列表 -->
<style lang="less">
	.tc-viewlist {
		border-top: 1px solid #ddd;
		&-unit {
			display: flex;
			justify-content: start;
			align-items: center;
			&-num {
				flex-grow: 1;
				text-align: center;
				color: gray;
				font-size: 0.8em;
			}
			&-song {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-grow: 12;
				padding: 0.5em;
				border-bottom: 1px solid #ddd;
			}
		}
	}
</style>
<template>
	<div class="tc-viewlist">
		<div class="tc-viewlist-unit" v-for="i in 10">
			<div class="tc-viewlist-unit-num">{{i}}</div>
			<div class="tc-viewlist-unit-song">
				<div>
					<div style="font-size:0.8em">
					    Piece Of Mind
					</div>
					<div style="font-size:0.6em;color:gray">
						Kehlani-SweetSexySavage(Deluxe)
					</div>
				</div>
				<div style="font-size:0.6em;color:gray">
					<span class="icon-song-detail"></span>
				</div>
			</div>
		</div>
	</div>
</template>