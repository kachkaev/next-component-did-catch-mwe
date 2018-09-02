export default class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error, info) {
    console.log("catching", error, info);
    this.setState({ error: error.message });
  }

  render() {
    console.log("here!!", this.state);
    if (this.state.error) {
      return <span>{this.state.error}</span>;
    }

    return this.props.children;
  }
}
