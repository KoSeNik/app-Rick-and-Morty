import ErrorBoundary from "../component/ErrorBoundary";

const Main = () => {
  return (
    <ErrorBoundary>
      <div className="content">
        <h2>Добро пожаловать в мир Рика и Морти</h2>
        <p>Изучите персонажей, локации и эпизоды сериала!</p>
      </div>
    </ErrorBoundary>
  );
};

export default Main;
