<template>
	<div class="bruce flex-ct-x" data-title="商城打孔票券">
		<div class="mall-ticket">
			<h3>100元</h3>
			<p>网易考拉代金券</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mall-ticket {
	display: flex;
	position: relative;
	width: 300px;
	height: 100px;
	background: radial-gradient(circle at right top, transparent 10px, #f66 0) top left/100px 51% no-repeat,
		radial-gradient(circle at right bottom, transparent 10px, #f66 0) bottom left/100px 51% no-repeat,
		radial-gradient(circle at left top, transparent 10px, #ccc 0) top right/200px 51% no-repeat,
		radial-gradient(circle at left bottom, transparent 10px, #ccc 0) bottom right/200px 51% no-repeat;
	filter: drop-shadow(2px 2px 2px rgba(#fff, .2));
	line-height: 100px;
	text-align: center;
	color: #fff;
	&::before {
		position: absolute;
		left: 100px;
		top: 0;
		bottom: 0;
		margin: auto;
		border: 1px dashed #66f;
		height: 80px;
		content: "";
	}
	&::after {
		position: absolute;
		left: 100%;
		top: 0;
		width: 5px;
		height: 100%;
		background-image: linear-gradient(180deg, #ccc 5px, transparent 5px, transparent),
			radial-gradient(10px circle at 5px 10px, transparent 5px, #ccc 5px);
		background-size: 5px 15px;
		content: "";
	}
	h3 {
		width: 100px;
		font-size: 30px;
	}
	p {
		flex: 1;
		font-weight: bold;
		font-size: 18px;
	}
}
</style>