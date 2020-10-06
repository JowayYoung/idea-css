<template>
	<div class="bruce flex-ct-x" data-title="登录注册">
		<div class="auth">
			<input id="login-btn" type="radio" name="auth" checked hidden>
			<input id="logon-btn" type="radio" name="auth" hidden>
			<div class="auth-title">
				<label for="login-btn">登录</label>
				<label for="logon-btn">注册</label>
				<em></em>
			</div>
			<div class="auth-form">
				<form>登录</form>
				<form>注册</form>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.bruce {
	background-color: #999;
}
.auth {
	overflow: hidden;
	border-radius: 2px;
	width: 320px;
	background-color: #fff;
	.auth-title {
		display: flex;
		position: relative;
		border-bottom: 1px solid #eee;
		height: 40px;
		label {
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1;
			height: 100%;
			cursor: pointer;
			transition: all 300ms;
			&:hover {
				color: #66f;
			}
		}
		em {
			position: absolute;
			left: 0;
			bottom: 0;
			border-radius: 1px;
			width: 50%;
			height: 2px;
			background-color: #f66;
			transition: all 300ms cubic-bezier(.4, .4, .25, 1.35);
		}
	}
	.auth-form {
		display: flex;
		width: 200%;
		height: 300px;
		transition: all 300ms cubic-bezier(.4, .4, .25, 1.35);
		form {
			flex: 1;
		}
	}
}
#login-btn:checked {
	& ~ .auth-title {
		label:nth-child(1) {
			font-weight: bold;
			color: #f66;
		}
		em {
			transform: translate(0, 0);
		}
	}
	& ~ .auth-form {
		transform: translate(0, 0);
	}
}
#logon-btn:checked {
	& ~ .auth-title {
		label:nth-child(2) {
			font-weight: bold;
			color: #f66;
		}
		em {
			transform: translate(160px, 0);
		}
	}
	& ~ .auth-form {
		transform: translate(-50%, 0);
	}
}
</style>