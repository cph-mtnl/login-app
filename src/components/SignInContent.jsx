import MyInput from "./MyInput";

export default function SignInContent() {
  return (
    <>
      <h1>Log på Appster 2000</h1>
      <MyInput id="email" type="email" label="Email" />
      <MyInput id="password" type="password" label="Password" />
      <button>Login</button>
    </>
  );
}
