<template>
	<div class="bruce flex-ct-x" data-title="滚动渐变背景">
		<div ref="bg" class="dynamic-bg">
			<header></header>
			<main @scroll="scroll">
				<div>
					<p>网易公司（NASDAQ: NTES），1997年由创始人兼CEO丁磊先生在广州创办，2000年在美国NASDAQ股票交易所挂牌上市，是中国领先的互联网技术公司。在开发互联网应用、服务及其它技术方面，始终保持中国业界领先地位。本着对中国互联网发展强烈的使命感，缔造美好生活的愿景，网易利用最先进的互联网技术，加强人与人之间信息的交流和共享。</p>
					<p>网易公司推出了门户网站、在线游戏、电子邮箱、在线教育、电子商务、在线音乐、网易bobo等多种服务。网易在广州天河智慧城的总部项目计划2019年1月建成，网易游戏总部将入驻。2016年，游戏业务营业收入在网易总营收中占比73.3%。2011年，网易杭州研究院启用。网易传媒等业务在北京。网易在杭州上线了网易考拉海购、网易云音乐等项目。</p>
					<p>网易2019全年财报显示，网易公司2019年全年净收入为592.4亿元；基于非美国通用会计准则，归属于网易公司股东的持续经营净利润为156.6亿元。</p>
					<p>2019年，网易深入推进战略聚焦，坚守内容消费领域，积极布局游戏、教育、音乐、电商等核心赛道，取得重大突破。在保持稳健增长的同时，网易有道、创新及其他等业务板块爆发强大潜力，为未来的长期发展提供源源不断的动能。</p>
				</div>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.dynamic-bg {
	--scrolly: 250;
	overflow: hidden;
	position: relative;
	border: 1px solid #66f;
	width: 400px;
	height: 400px;
	header {
		--Θ: calc(var(--scrolly) * 2deg);
		--size: calc(1500px - var(--scrolly) * 2px);
		--x: calc(var(--size) / 2 * -1);
		--y: calc(var(--scrolly) * -1px);
		--ratio: calc(50% - var(--scrolly) / 20 * 1%);
		position: absolute;
		left: 50%;
		bottom: 100%;
		margin: 0 0 var(--y) var(--x);
		border-radius: var(--ratio);
		width: var(--size);
		height: var(--size);
		background-color: #3c9;
		filter: hue-rotate(var(--Θ));
		animation: rotate 5s linear infinite;
	}
	main {
		overflow: auto;
		position: relative;
		width: 100%;
		height: 100%;
		div {
			padding: 300px 20px 50px;
		}
		p {
			line-height: 1.2;
			text-align: justify;
			text-indent: 2em;
		}
	}
}
@keyframes rotate {
	to {
		transform: rotate(1turn);
	}
}
</style>

<script>
export default {
	mounted() {
		this.bgStyle = this.$refs.bg.style;
	},
	methods: {
		scroll(e) {
			const top = e.target.scrollTop;
			if (top <= 250) {
				this.bgStyle.setProperty("--scrolly", 250 - top);
			} else {
				this.bgStyle.setProperty("--scrolly", 0);
			}
		}
	}
};
</script>