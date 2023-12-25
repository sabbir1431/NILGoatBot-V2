const axios = require("axios");
const ytdl = require("ytdl-core");
const fs = require("fs-extra");

const cacheFolder = "./cache/"; // Define your cache folder path here

async function getStreamAndSize(url, path = "") {
  const response = await axios({
    method: "GET",
    url,
    responseType: "stream",
    headers: {
      'Range': 'bytes=0-'
    }
  });

  if (path) {
    response.data.path = path;
  }

  const totalLength = response.headers["content-length"];
  return {
    stream: response.data,
    size: totalLength
  };
}

async function fetchRandomAnimeVideo(apiKey, playlistId) {
  try {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&part=contentDetails&maxResults=50`;
    const response = await axios.get(playlistUrl);

    const items = response.data.items;
    const videoIds = items.map((item) => item.contentDetails.videoId);

    const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];

    const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${randomVideoId}&part=snippet`;
    const videoResponse = await axios.get(videoDetailsUrl);

    const video = videoResponse.data.items[0].snippet;

    return {
      videoId: randomVideoId,
      title: video.title,
    };
  } catch (error) {
    console.error('[ERROR]', error);
    return null;
  }
}

async function downloadYouTubeVideo(url, cacheFolder) {
  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });

    if (format) {
      const fileName = `${cacheFolder}${info.videoDetails.title}.mp4`; // Save video with the title as the filename
      const videoStream = fs.createWriteStream(fileName);

      await ytdl.downloadFromInfo(info, { format: format }).pipe(videoStream);
      return fileName;
    } else {
      return null;
    }
  } catch (error) {
    console.error('[ERROR]', error);
    return null;
  }
}

module.exports = {
  config: {
    name: "aniedit",
    version: "1.0",
    author: "SKY",
    role: 0,
    cooldown: 5,
    shortDescription: "Fetch and send a random anime video",
    longDescription: "Fetch a random anime video from a predefined playlist, download it, and send it as an attachment.",
    category: "anime",
  },

  onStart: async function ({ api, event }) {
    try {
      api.sendMessage("Fetching a random anime video. Please wait...", event.threadID);

      const apiKey = "AIzaSyAO1tuGus4-S8RJID51f8WJAM7LXz1tVNc"; // Replace with your YouTube Data API Key
      const playlistId = "PLhTrUQSOqTqKBA4VWSN_VqqOb7xx4-VEY"; // Replace with the ID of your anime playlist

      const animeVideo = await fetchRandomAnimeVideo(apiKey, playlistId);

      if (animeVideo) {
        const downloadUrl = `https://www.youtube.com/watch?v=${animeVideo.videoId}`;
        const downloadedVideoPath = await downloadYouTubeVideo(downloadUrl, cacheFolder);

        if (downloadedVideoPath) {
          const videoStream = fs.createReadStream(downloadedVideoPath);

          api.sendMessage({
            body: `Here's a random anime video for you: ${animeVideo.title}`,
            attachment: videoStream,
          }, event.threadID);

          // Clean up the downloaded video file
          fs.unlinkSync(downloadedVideoPath);
        } else {
          api.sendMessage("An error occurred while downloading the video.", event.threadID);
        }
      } else {
        api.sendMessage("An error occurred while fetching a random anime video.", event.threadID);
      }
    } catch (error) {
      console.error('[ERROR]', error);
      api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
  },
};