import { useAppContext } from "context/state";

export default function AccuracyWidget() {
  const state = useAppContext();
  if (!state.accuracy) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      Accuracy is
      <div>
        {/* Render only with 2 digits */}
        {(100 * state.accuracy).toLocaleString(undefined, {
          maximumFractionDigits: 1,
        })}
        %
      </div>
    </div>
  );
}
