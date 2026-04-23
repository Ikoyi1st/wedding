export const traditionalProgram = [
  {
    icon: "\uD83C\uDF3F",
    heading: "Opening & Worship",
    badge: "2:00 PM",
    items: [
      { title: "Opening Prayer", description: "Invocation & blessing over the gathering", time: "2:00 PM" },
      { title: "Praise & Worship", description: "Congregational worship to set the atmosphere", time: "2:10 PM" },
      { title: "Choir Ministration", description: "Special rendition by the choir", time: "2:30 PM" },
    ],
  },
  {
    icon: "\uD83D\uDC9E",
    heading: "Traditional Rites",
    badge: "2:45 PM",
    items: [
      { title: "Introduction of Families", description: "Both families formally presented to the gathering", time: "2:45 PM" },
      { title: "Presentation of the Bride", description: "Victoria Unekwuojo Obochi is presented", time: "3:10 PM" },
      { title: "Traditional Rites & Exchange of Gifts", description: "Bride price and customary items presented", time: "3:30 PM" },
      { title: "Wine Carrying Ceremony", description: "The bride searches for her groom among the guests", time: "4:00 PM" },
      { title: "Order of Photographs", description: "Couple | Both Families | Wedding Party | Group Photos", time: "4:30 PM" },
    ],
  },
  {
    icon: "\uD83C\uDF89",
    heading: "Celebration",
    badge: "5:00 PM",
    items: [
      { title: "Cutting of the Cake", description: "Celebratory cake cutting by the couple", time: "5:00 PM" },
      { title: "Speeches & Toasts", description: "Remarks from parents, best man & maid of honour", time: "5:20 PM" },
      { title: "Entertainment & Music", description: "Dance, music and joyful celebration with guests", time: "5:45 PM" },
      { title: "Closing Prayer & Benediction", description: "Prayers over the couple and safe departure of guests", time: "7:00 PM" },
    ],
  },
];

export const churchProgram = [
  {
    icon: "\u266A",
    heading: "Processional & Worship",
    badge: "10:00 AM",
    items: [
      {
        title: "Processional Hymn: In Christ Alone",
        description: "Wedding party and parents escorted to their seats",
        dropdown: {
          label: "Open hymn lyrics",
          lyrics: [
            "1 In Christ alone my hope is found;\nHe is my light, my strength, my song;\nthis Cornerstone, this solid ground,\nfirm through the fiercest drought and storm.\nWhat heights of love, what depths of peace\nwhen fears are stilled, when strivings cease;\nmy Comforter, my All in All;\nhere in the love of Christ I stand.",
            "2 In Christ alone who took on flesh;\nfullness of God in helpless babe.\nThis gift of love and righteousness\nscorned by the ones He came to save;\n'til on that cross as Jesus died\nthe wrath of God was satisfied;\nfor ev'ry sin on Him was laid;\nhere in the death of Christ I live.",
            "3 There in the ground His body lay;\nLight of the world by darkness slain.\nThen bursting forth in glorious day,\nup from the grave He rose again!\nAnd as He stands in victory,\nsin's curse has lost its grip on me;\nfor I am His and He is mine,\nbought with the precious blood of Christ!",
            "4 No guilt in life, no fear in death;\nthis is the pow'r of Christ in me.\nFrom life's first cry to final breath,\nJesus commands my destiny.\nNo pow'r of hell, no scheme of man\ncan ever pluck me from His hand;\n'til He returns or calls me home,\nhere in the pow'r of Christ I'll stand!",
          ],
          note: "Lyrics added from the text you provided.",
          sourceLabel: "Open lyrics source",
          sourceUrl: "https://www.worshiptogether.com/songs/in-christ-alone/",
        },
        time: "10:00 AM",
      },
      { title: "Praise & Worship", description: "Congregational praise to open the service", time: "10:15 AM" },
      {
        title: "Hymn in the Service: How Great Is Our God",
        description: "Congregational worship within the service.",
        dropdown: {
          label: "Open hymn lyrics",
          preview: "\"How great is our God, sing with me\"",
          note: "Full lyrics are not embedded here because this song is copyrighted. Use the source link for the complete licensed text.",
          sourceLabel: "Open lyrics source",
          sourceUrl: "https://www.worshiptogether.com/songs/how-great-is-our-god/",
        },
        time: "10:35 AM",
      },
      { title: "Opening Prayer", description: "Invocation over the ceremony", time: "10:50 AM" },
    ],
  },
  {
    icon: "\uD83D\uDCD6",
    heading: "The Word, Ministers & Vows",
    badge: "11:00 AM",
    items: [
      {
        title: "Bible Readings",
        description: "Three readings will be inserted once the scriptures are shared.",
        details: [
          "Bible Reading 1: Scripture to be added.",
          "Bible Reading 2: Scripture to be added.",
          "Bible Reading 3: Scripture to be added.",
        ],
        time: "11:00 AM",
      },
      {
        title: "Officiating Pastors & Churches/Ministries",
        description: "Section reserved for the names of pastors and their churches or ministries.",
        details: [
          "Pastor Name 1 - Church/Ministry to be added.",
          "Pastor Name 2 - Church/Ministry to be added.",
          "Pastor Name 3 - Church/Ministry to be added.",
        ],
        time: "11:05 AM",
      },
      { title: "Wedding Sermon", description: "Message of blessing and godly counsel for the couple", time: "11:10 AM" },
      { title: "Exchange of Vows & Rings", description: "Victoria and Salem make their covenant before God", time: "11:40 AM" },
      { title: "Pronouncement & First Kiss", description: "Declaration of husband and wife", time: "12:00 PM" },
    ],
  },
  {
    icon: "\uD83D\uDCF8",
    heading: "Photos & Departure",
    badge: "12:10 PM",
    items: [
      { title: "Order of Photographs", description: "Couple | Both Families | Wedding Party | Congregation", time: "12:10 PM" },
      { title: "Signing of the Marriage Register", description: "Official signing witnessed by family and officiants", time: "12:35 PM" },
      {
        title: "Recessional Hymn: Great Is Thy Faithfulness",
        description: "Departure to Dew of Hermon, Plot 1 & 2, Egypt Road, Barnawa, Kaduna - 2:00 PM",
        dropdown: {
          label: "Open hymn lyrics",
          lyrics: [
            "1. Great is thy faithfulness, O God, my Father;\nThere is no shadow of turning with thee.\nThou changest not, thy compassions, they fail not;\nAs thou hast been, thou forever wilt be.",
            "Refrain:\nGreat is thy faithfulness,\nGreat is thy faithfulness,\nMorning by morning new mercies I see.\nAll I have needed thy hand hast provided;\nGreat is thy faithfulness,\nLord unto me.",
            "2. Summer and winter and springtime and harvest,\nSun, moon, and stars in their courses above\nJoin with all nature in manifold witness\nTo thy great faithfulness, mercy, and love. [Refrain]",
            "3. Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine and ten thousand beside. [Refrain]",
          ],
          note: "Lyrics added from the text you provided.",
          sourceLabel: "Open lyrics source",
          sourceUrl: "https://hymnary.org/text/great_is_thy_faithfulness_o_god_my_fathe",
        },
        time: "12:45 PM",
      },
    ],
  },
];
