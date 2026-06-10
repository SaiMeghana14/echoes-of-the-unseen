export const constellationData = {
  nodes: [
    { id: "Ainu Language", group: "culture" },

    { id: "Stories", group: "story" },

    { id: "Songs", group: "story" },

    { id: "Festival", group: "ritual" },

    { id: "Community", group: "belief" },

    { id: "Fishing Knowledge", group: "knowledge" },

    { id: "Ancestor Legends", group: "story" },

    { id: "Harvest Ceremony", group: "ritual" },

    { id: "Nature Spirits", group: "belief" },

    { id: "Oral History", group: "knowledge" },
  ],

  links: [
    {
      source: "Ainu Language",
      target: "Stories",
    },

    {
      source: "Ainu Language",
      target: "Songs",
    },

    {
      source: "Ainu Language",
      target: "Festival",
    },

    {
      source: "Ainu Language",
      target: "Community",
    },

    {
      source: "Ainu Language",
      target: "Fishing Knowledge",
    },

    {
      source: "Stories",
      target: "Ancestor Legends",
    },

    {
      source: "Festival",
      target: "Harvest Ceremony",
    },

    {
      source: "Community",
      target: "Nature Spirits",
    },

    {
      source: "Fishing Knowledge",
      target: "Oral History",
    },
  ],
};
