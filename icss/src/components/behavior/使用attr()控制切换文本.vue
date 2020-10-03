<template>
	<div class="bruce flex-ct-x" data-title="使用attr()控制切换文本">
		<input id="text-switch" class="text-switch" type="checkbox" hidden>
		<label for="text-switch" data-true="展开" data-false="收起"></label>
	</div>
</template>

<style lang="scss" scoped>
.text-switch {
	& + label {
		cursor: pointer;
		font-weight: bold;
		font-size: 50px;
		color: #f66;
		&::after {
			content: attr(data-true);
		}
	}
	&:checked + label::after {
		content: attr(data-false);
	}
}
</style>