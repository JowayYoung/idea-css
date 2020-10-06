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
				<form>
					<div>
						<input type="text" placeholder="请输入手机" pattern="^1[3456789]\d{9}$" required>
						<label>手机</label>
					</div>
					<div>
						<input type="password" placeholder="请输入密码(6到20位字符)" pattern="^[\dA-Za-z_]{6,20}$" required>
						<label>密码</label>
					</div>
					<button type="button">登录</button>
				</form>
				<form>
					<div>
						<input type="text" placeholder="请输入手机" pattern="^1[3456789]\d{9}$" required>
						<label>手机</label>
					</div>
					<div>
						<input type="password" placeholder="请输入密码(6到20位字符)" pattern="^[\dA-Za-z_]{6,20}$" required>
						<label>密码</label>
					</div>
					<button type="button">登录</button>
				</form>
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
		height: 250px;
		transition: all 300ms cubic-bezier(.4, .4, .25, 1.35);
		form {
			flex: 1;
			padding: 20px;
		}
		div {
			display: flex;
			flex-direction: column-reverse;
			& + div {
				margin-top: 10px;
			}
		}
		input {
			padding: 10px;
			border: 1px solid #e9e9e9;
			border-radius: 2px;
			width: 100%;
			height: 40px;
			outline: none;
			transition: all 300ms;
			&:focus:valid {
				border-color: #09f;
			}
			&:focus:invalid {
				border-color: #f66;
			}
			&:not(:placeholder-shown) + label {
				height: 30px;
				opacity: 1;
				font-size: 14px;
			}
		}
		label {
			overflow: hidden;
			padding: 0 10px;
			height: 0;
			opacity: 0;
			line-height: 30px;
			font-weight: bold;
			font-size: 0;
			transition: all 300ms;
		}
		button {
			margin-top: 10px;
			border: none;
			border-radius: 2px;
			width: 100%;
			height: 40px;
			outline: none;
			background-color: #09f;
			cursor: pointer;
			color: #fff;
			transition: all 300ms;
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