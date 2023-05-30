import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";

const BoxWithStyledComponents = BoxWithClassName;

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithClassName />
      <BoxWithClassName isBlack="isBlack" />
    </div>
  );
}
