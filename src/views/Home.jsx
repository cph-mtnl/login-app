import MyButton from "../components/MyButton";
import "../styles/home.css";

export default function Home({ setUser }) {
  function handleSignOut() {
    setUser(undefined);
  }
  return (
    <div className="home">
      <nav>
        <h1>Appster 2000</h1>
        <MyButton
          text="Sign out"
          type="light"
          onClick={handleSignOut}
          loading={false}
        />
      </nav>
      <h1>Welcome to Apster 2000</h1>
    </div>
  );
}
