import ScreenContainer from "../components/ScreenContainer";
import Title from "../components/Title";
import Card from "../components/Card";

export default function DashboardScreen() {
  return (
    <ScreenContainer>
      <Title>Dashboard 🌍</Title>

      <Card title="Temperatura" value="25°C" />
      <Card title="Umidade" value="60%" />
      <Card title="Status" value="Normal" />
    </ScreenContainer>
  );
}