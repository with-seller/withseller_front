import {loginBody, loginCard} from "./LoginPage.styles";

function LoginPage() {
    return (
        <div css={loginBody()}>
            <div css={loginCard()}>
                <h2>로그인</h2>
                <input type="text" placeholder="아이디" />
                <input type="password" placeholder="비밀번호" />
                <button>로그인</button>
                <p className="signup-link">회원이 아니라면? <a href="#">회원가입</a></p>
            </div>
        </div>
    )
}

export default LoginPage;