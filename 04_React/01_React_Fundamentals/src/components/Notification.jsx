function Notification({ hasMessages }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasMessages && <p>You have new messages!</p>}
    </div>
  );
}

export default Notification;
