export default function LogOut({ user, setUser }) {
  return (
    <div>
      {!user || `${user}님 어서오세요.`}
      {/* || 는 '또는' 앞이 참이 아니면 뒤에 것을 띄운다. */}
      <button
        onClick={() => {
          setUser("");
        }}
      >
        Log out
      </button>
    </div>
  );
}
