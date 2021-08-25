import socialData from "./socialData";

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
const socialStatsDataFlat = [].concat(...socialStatsData2D).map((item, i) => {
  item.id = i;
  return item;
});
const socialStatsData = socialStatsDataFlat.filter(
  (item) => item.label !== "Followers" && "Subscribers"
);

// grab total followers
const totalFollowers = socialData.metadata.totalFollowers;

const updatedData = { socialBasicData, socialStatsData, totalFollowers };

export default updatedData;
