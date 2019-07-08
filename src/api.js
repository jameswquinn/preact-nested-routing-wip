// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
  players: [
    {
      id: 1,
      heading: `Richard`,
      subHeading: `HIIT`,
      body: `Not just another personal trainer, Richard Hart brings a diverse wealth of knowledge to every class that he teaches. With over 8 years of experience and member of elite running club Track Mafia, don’t let Richard’s cool and calm personality trick you into thinking you will get away with an easy ride. Combining strength and cardio exercises to one of the best playlists featuring hip hop, d&b and jungle, you will reach new levels with every class that you attend.`,
      image: require("./img/AS-Richard-2-2000x1472.jpg?min=320,max=1400,steps=6")
    },
    {
      id: 2,
      heading: `I gotta piss`,
      body: `The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. `,
      image: ``
    },
    {
      id: 3,
      heading: `Are you ready for the truth?`,
      body: `Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.`,
      image: require("./img/1qujw7.jpg?min=320,max=1400,steps=6")
    },
    {
      id: 4,
      heading: `Is she dead, yes or no?`,
      body: `You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.`,
      image: require("./img/Samuel-L.-Jackson-with-John-Travolta-in-Pulp-Fiction..jpg?min=320,max=1400,steps=6")
    }
  ],
  all: function() {
    return this.players;
  },
  get: function(id) {
    const isPlayer = item => item.id === id;
    return this.players.find(isPlayer);
  }
};

export default PlayerAPI;
