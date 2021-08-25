import React from "react";
import Header from "./components/Header";
import socialData from "./socialData";
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
    // manipulate data to fit site's needs
    const socialBasicData = socialData.data.map((item) => {
      for (let i = 0; i < item.stats.length; i++) {
        if (
          item.stats[i].label === "Followers" ||
          item.stats[i].label === "Subscribers"
        ) {
          item.followersLabel = item.stats[i].label;
          item.followers = item.stats[i].amount;
          item.followersChange = item.stats[i].change;
        }
      }
      return item;
    });
    const socialStatsData2D = socialData.data.map((item) => {
      item.stats.map((statItem) => {
        // add label of social site and the logo to each stat object
        statItem.socialLabel = item.label;
        statItem.logo = item.logo;
        return statItem;
      });
      return item.stats;
    });

    // flatten stats array and add ID key and value
    const socialStatsDataFlat = []
      .concat(...socialStatsData2D)
      .map((item, i) => {
        item.id = i;
        return item;
      });
    const socialStatsData = socialStatsDataFlat.filter(
      (item) => item.label !== "Followers" && "Subscribers"
    );

    // map components from data
    this.setState({
      socialBasicData: socialBasicData,
      socialStatsData: socialStatsData,
      totalFollowers: socialData.metadata.totalFollowers,
    });
  }

  render() {
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
        <div className="overviews">
          <h2 className="overviews__label">Overview - Today</h2>
          {overviewComponents}
        </div>
      </div>
    );
  }
}

export default App;
