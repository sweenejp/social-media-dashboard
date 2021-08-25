import React from "react";
import Header from "./components/Header";
import updatedData from "./updatedData";
import SocialViewItem from "./components/SocialViewItem";
import OverviewItem from "./components/OverviewItem";
import themes from "./styles/themes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalFollowers: "",
      socialBasicData: [],
      socialStatsData: [],
      themes: themes,
      currentTheme: "Light",
    };
    this.themeSwitcher = this.themeSwitcher.bind(this);
  }

  themeSwitcher() {
    if (this.state.currentTheme === "Light") {
      let theme = this.state.themes.dark;
      for (const property in theme) {
        document.documentElement.style.setProperty(property, theme[property]);
      }
      this.setState({ currentTheme: "Dark" });
    } else {
      let theme = this.state.themes.light;
      for (const property in theme) {
        document.documentElement.style.setProperty(property, theme[property]);
      }
      this.setState({ currentTheme: "Light" });
    }
  }

  componentDidMount() {
    const { socialBasicData, socialStatsData, totalFollowers } = updatedData;

    // set state with data
    this.setState({
      socialBasicData: socialBasicData,
      socialStatsData: socialStatsData,
      totalFollowers: totalFollowers,
    });
  }

  render() {
    // map card components from data
    const socialViewComponents = this.state.socialBasicData.map((item) => (
      <SocialViewItem key={item.id} {...item} />
    ));
    const overviewComponents = this.state.socialStatsData.map((item) => (
      <OverviewItem key={item.id} {...item} />
    ));

    return (
      <div className="app">
        <Header themeSwitcher={this.themeSwitcher} {...this.state} />
        <div className="social-views">{socialViewComponents}</div>
        <h2 className="overviews__label">Overview - Today</h2>
        <div className="overviews">{overviewComponents}</div>
      </div>
    );
  }
}

export default App;
