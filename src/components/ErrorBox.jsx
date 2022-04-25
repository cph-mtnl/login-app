import "../styles/error-box.css";

export default function ErrorBox({ errorMsg }) {
  return (
    <div className="error--box">
      <p className="error--message">{errorMsg}</p>
    </div>
  );
}
