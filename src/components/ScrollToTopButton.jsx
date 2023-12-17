import React, { Component } from "react";

class ScrollToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false,
    };
  }

  componentDidMount() {
    // Add an event listener to track scroll position and update the state
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // Check the scroll position, and update the state accordingly
    if (window.scrollY > 0) {
      this.setState({ showButton: true });
    } else {
      this.setState({ showButton: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    const { showButton } = this.state;

    return (
      showButton && (
        <button
          onClick={this.scrollToTop}
          style={{ position: "fixed", bottom: "7vw", right: "0vw" }}
          className="scroll-btn"
        ></button>
      )
    );
  }
}

export default ScrollToTopButton;
