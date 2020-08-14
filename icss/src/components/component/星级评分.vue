<template>
	<div class="bruce flex-ct-x" data-title="星级评分">
		<div class="star-rating">
			<input v-for="v in 5" :key="v" type="radio" name="rate">
		</div>
	</div>
</template>

<style lang="scss" scoped>
.star-rating {
	display: flex;
	flex-direction: row-reverse;
	input {
		width: 30px;
		height: 30px;
		appearance: none;
		cursor: pointer;
		line-height: 30px;
		text-align: center;
		font-size: 30px;
		transition: all 300ms;
		&::after {
			color: #66f;
			content: "☆";
			transition: all 300ms;
		}
		&:hover {
			transform: scale(1.2);
		}
		&:checked,
		&:hover {
			&::after,
			& ~ input::after {
				color: #f66;
				content: "★";
			}
		}
	}
}
</style>