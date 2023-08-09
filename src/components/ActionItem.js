export const ActionItem = ({ action }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <p>{action.name}</p>
      <p>{new Date(action.timestamp * 1000).toDateString()}</p>
      <hr />
    </div>
  );
};
