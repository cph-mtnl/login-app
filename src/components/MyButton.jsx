import Loader from "./Loader";

export default function MyButton({
  onClick,
  text,
  loading,
  className = "",
  type,
}) {
  function getClassName() {
    let base = className;

    if (loading) {
      base += " my-disabled-button";
    }

    base += type === "light" ? " my-light-button" : " my-button";

    return base;
  }

  return (
    <button onClick={onClick} disabled={loading} className={getClassName()}>
      {loading ? <Loader /> : text}
    </button>
  );
}
