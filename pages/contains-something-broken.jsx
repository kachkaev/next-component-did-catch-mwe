import CustomErrorBoundary from "../components/CustomErrorBoundary";
import SomethingBroken from "../components/SomethingBroken";

export default () => (
  <div>
    <h1>Hello world!</h1>
    <CustomErrorBoundary>
      <SomethingBroken />
    </CustomErrorBoundary>
  </div>
);
