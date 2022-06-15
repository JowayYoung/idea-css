<template>
	<div class="bruce flex-ct-x" data-title="使用:valid和:invalid校验表单内容">
		<form class="form-validation">
			<div>
				<label>名字</label>
				<input type="text" placeholder="请输入你的名字(1到10个中文)" pattern="^[\u4e00-\u9fa5]{1,10}$" required>
			</div>
			<div>
				<label>手机</label>
				<input type="text" placeholder="请输入你的手机" pattern="^1[3456789]\d{9}$" required>
			</div>
			<div>
				<label>简介</label>
				<textarea required></textarea>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.form-validation {
	width: 500px;
	div + div {
		margin-top: 10px;
	}
	label {
		display: block;
		padding-bottom: 5px;
		font-weight: bold;
		font-size: 16px;
	}
	input,
	textarea {
		display: block;
		padding: 0 20px;
		border: 1px solid #ccc;
		width: 100%;
		height: 40px;
		outline: none;
		caret-color: #09f;
		transition: all 300ms;
		&:valid {
			border-color: #3c9;
		}
		&:invalid {
			border-color: #f66;
		}
	}
	textarea {
		height: 122px;
		resize: none;
		line-height: 30px;
		font-size: 16px;
	}
}
</style>