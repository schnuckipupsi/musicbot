var Discord = require("discord.js");
var client = new Discord.Client();
var pageMenu = require("@quantiom/pagemenu");

exports.run = (client, message, args) => {
  let pMenu = new pageMenu(
    message,
    [{
        title: "Help | Commands",
        description: "Page 1",
        thumbnail: `${client.user.avatarURL}`,
        color: "66cdaa", // green
        fields: [{
            name: "!ihelp (h)",
            value: "Display all commands and descriptions",
            inline: true
          },
          {
            name: "!iloop (l)",
            value: "Toggle music loop",
            inline: true
          },
          {
            name: "!ilyrics (ly)",
            value: "Get lyrics for the currently playing song",
            inline: true
          },
          {
            name: "!inp",
            value: "Show now playing song",
            inline: true
          },
          {
            name: "!ipause",
            value: "Pause the currently playing music",
            inline: true
          }
        ]
      },
      {
        title: "Help | Commands",
        description: "Page 2",
        thumbnail: `${client.user.avatarURL}`,
        color: "66cdaa", // green
        fields: [{
            name: "!iplay (p)",
            value: "Plays audio from YouTube or Soundcloud ",
            inline: true
          },
          {
            name: "!iplaylist (pl)",
            value: "play a playlist from youtube",
            inline: true
          },
          {
            name: "!ipruning",
            value: "Toggle pruning of bot messages",
            inline: true
          },
          {
            name: "!iqueue (q)",
            value: "Show the music queue and now playing.",
            inline: true
          },
          {
            name: "!iresume (r)",
            value: "Resume currently playing music",
            inline: true
          }
        ]
      },
      {
        title: "Help | Commands",
        description: "Page 3",
        thumbnail: `${client.user.avatarURL}`,
        color: "66cdaa", // green
        fields: [{
            name: "!isearch",
            value: "Search and select videos to play ",
            inline: true
          },
          {
            name: "!ishuffle",
            value: "Shuffle queue",
            inline: true
          },
          {
            name: "!iskip (5) ",
            value: "Skip the currently playing song",
            inline: true
          },
          {
            name: "!iskipto (st)",
            value: Skip to the selected queue number ",
            inline: true
          },
          {
            name: "!istop",
            value: "Stops the music",
            inline: true
          },
        ]
      },
      {
        title: "Help | Commands",
        description: "Page 4",
        thumbnail: `${client.user.avatarURL}`,
        color: "66cdaa", // green
        fields: [{
            name: "!ivolume (v) ",
            value: "Change volume of currently playing music",
            inline: true
          },
          {
            name: "Version",
            value: "My version is v 1.2.",
            inline: true
          },
          {
            name: "Code",
            value: "Code by 7alex #0059",
            inline: true
          },
          {
            name: "Join sup server",
            value: "Dm ",
            inline: true
          }
        ]
      },

    ], {
      duration: 60000,
      expireFunction: function (msg) {
        msg.delete();
      }
    }
  );

  pMenu.run();
};
