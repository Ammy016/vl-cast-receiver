const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
const requestData = new cast.framework.messages.SeekRequestData()
const playbackConfig = new cast.framework.PlaybackConfig();
const languageMap= [
  {
      "guid": "af-guid",
      "name": "Afrikaans",
      "nativeName": "Afrikaans",
      "codeName": "af"
  },
  {
      "guid": "sq-guid",
      "name": "Albanian",
      "nativeName": "Albanian",
      "codeName": "sq"
  },
  {
      "guid": "am-guid",
      "name": "Amharic",
      "nativeName": "Amharic",
      "codeName": "am"
  },
  {
      "guid": "ar-guid",
      "name": "Arabic",
      "nativeName": "Arabic",
      "codeName": "ar"
  },
  {
      "guid": "hy-guid",
      "name": "Armenian",
      "nativeName": "Armenian",
      "codeName": "hy"
  },
  {
      "guid": "az-guid",
      "name": "Azeerbaijani",
      "nativeName": "Azeerbaijani",
      "codeName": "az"
  },
  {
      "guid": "eu-guid",
      "name": "Basque",
      "nativeName": "Basque",
      "codeName": "eu"
  },
  {
      "guid": "be-guid",
      "name": "Belarusian",
      "nativeName": "Belarusian",
      "codeName": "be"
  },
  {
      "guid": "bn-guid",
      "name": "Bengali",
      "nativeName": "Bengali",
      "codeName": "bn"
  },
  {
      "guid": "bs-guid",
      "name": "Bosnian",
      "nativeName": "Bosnian",
      "codeName": "bs"
  },
  {
      "guid": "bg-guid",
      "name": "Bulgarian",
      "nativeName": "Bulgarian",
      "codeName": "bg"
  },
  {
      "guid": "ca-guid",
      "name": "Catalan",
      "nativeName": "Catalan",
      "codeName": "ca"
  },
  {
      "guid": "ceb-guid",
      "name": "Cebuano",
      "nativeName": "Cebuano",
      "codeName": "ceb"
  },
  {
      "guid": "zh-CN-guid",
      "name": "Chinese (Simplified)",
      "nativeName": "Chinese (Simplified)",
      "codeName": "zh-CN"
  },
  {
      "guid": "zh-TW-guid",
      "name": "Chinese (Traditional)",
      "nativeName": "Chinese (Traditional)",
      "codeName": "zh-TW"
  },
  {
      "guid": "co-guid",
      "name": "Corsican",
      "nativeName": "Corsican",
      "codeName": "co"
  },
  {
      "guid": "hr-guid",
      "name": "Croatian",
      "nativeName": "Croatian",
      "codeName": "hr"
  },
  {
      "guid": "cs-guid",
      "name": "Czech",
      "nativeName": "Czech",
      "codeName": "cs"
  },
  {
      "guid": "da-guid",
      "name": "Danish",
      "nativeName": "Danish",
      "codeName": "da"
  },
  {
      "guid": "nl-guid",
      "name": "Dutch",
      "nativeName": "Dutch",
      "codeName": "nl"
  },
  {
      "guid": "en-guid",
      "name": "English",
      "nativeName": "English",
      "codeName": "en"
  },
  {
      "guid": "eo-guid",
      "name": "Esperanto",
      "nativeName": "Esperanto",
      "codeName": "eo"
  },
  {
      "guid": "et-guid",
      "name": "Estonian",
      "nativeName": "Estonian",
      "codeName": "et"
  },
  {
      "guid": "fi-guid",
      "name": "Finnish",
      "nativeName": "Finnish",
      "codeName": "fi"
  },
  {
      "guid": "fr-guid",
      "name": "French",
      "nativeName": "French",
      "codeName": "fr"
  },
  {
      "guid": "fy-guid",
      "name": "Frisian",
      "nativeName": "Frisian",
      "codeName": "fy"
  },
  {
      "guid": "gl-guid",
      "name": "Galician",
      "nativeName": "Galician",
      "codeName": "gl"
  },
  {
      "guid": "ka-guid",
      "name": "Georgian",
      "nativeName": "Georgian",
      "codeName": "ka"
  },
  {
      "guid": "de-guid",
      "name": "German",
      "nativeName": "German",
      "codeName": "de"
  },
  {
      "guid": "el-guid",
      "name": "Greek",
      "nativeName": "Greek",
      "codeName": "el"
  },
  {
      "guid": "gu-guid",
      "name": "Gujarati",
      "nativeName": "Gujarati",
      "codeName": "gu"
  },
  {
      "guid": "ht-guid",
      "name": "Haitian Creole",
      "nativeName": "Haitian Creole",
      "codeName": "ht"
  },
  {
      "guid": "ha-guid",
      "name": "Hausa",
      "nativeName": "Hausa",
      "codeName": "ha"
  },
  {
      "guid": "haw-guid",
      "name": "Hawaiian",
      "nativeName": "Hawaiian",
      "codeName": "haw"
  },
  {
      "guid": "iw-guid",
      "name": "Hebrew",
      "nativeName": "Hebrew",
      "codeName": "iw"
  },
  {
      "guid": "hi-guid",
      "name": "Hindi",
      "nativeName": "Hindi",
      "codeName": "hi"
  },
  {
      "guid": "hmn-guid",
      "name": "Hmong",
      "nativeName": "Hmong",
      "codeName": "hmn"
  },
  {
      "guid": "hu-guid",
      "name": "Hungarian",
      "nativeName": "Hungarian",
      "codeName": "hu"
  },
  {
      "guid": "is-guid",
      "name": "Icelandic",
      "nativeName": "Icelandic",
      "codeName": "is"
  },
  {
      "guid": "ig-guid",
      "name": "Igbo",
      "nativeName": "Igbo",
      "codeName": "ig"
  },
  {
      "guid": "id-guid",
      "name": "Indonesian",
      "nativeName": "Indonesian",
      "codeName": "id"
  },
  {
      "guid": "ga-guid",
      "name": "Irish",
      "nativeName": "Irish",
      "codeName": "ga"
  },
  {
      "guid": "it-guid",
      "name": "Italian",
      "nativeName": "Italian",
      "codeName": "it"
  },
  {
      "guid": "ja-guid",
      "name": "Japanese",
      "nativeName": "Japanese",
      "codeName": "ja"
  },
  {
      "guid": "jw-guid",
      "name": "Javanese",
      "nativeName": "Javanese",
      "codeName": "jw"
  },
  {
      "guid": "kn-guid",
      "name": "Kannada",
      "nativeName": "Kannada",
      "codeName": "kn"
  },
  {
      "guid": "kk-guid",
      "name": "Kazakh",
      "nativeName": "Kazakh",
      "codeName": "kk"
  },
  {
      "guid": "km-guid",
      "name": "Khmer",
      "nativeName": "Khmer",
      "codeName": "km"
  },
  {
      "guid": "ko-guid",
      "name": "Korean",
      "nativeName": "Korean",
      "codeName": "ko"
  },
  {
      "guid": "ku-guid",
      "name": "Kurdish",
      "nativeName": "Kurdish",
      "codeName": "ku"
  },
  {
      "guid": "ky-guid",
      "name": "Kyrgyz",
      "nativeName": "Kyrgyz",
      "codeName": "ky"
  },
  {
      "guid": "lo-guid",
      "name": "Lao",
      "nativeName": "Lao",
      "codeName": "lo"
  },
  {
      "guid": "la-guid",
      "name": "Latin",
      "nativeName": "Latin",
      "codeName": "la"
  },
  {
      "guid": "lv-guid",
      "name": "Latvian",
      "nativeName": "Latvian",
      "codeName": "lv"
  },
  {
      "guid": "lt-guid",
      "name": "Lithuanian",
      "nativeName": "Lithuanian",
      "codeName": "lt"
  },
  {
      "guid": "lb-guid",
      "name": "Luxembourgish",
      "nativeName": "Luxembourgish",
      "codeName": "lb"
  },
  {
      "guid": "mk-guid",
      "name": "Macedonian",
      "nativeName": "Macedonian",
      "codeName": "mk"
  },
  {
      "guid": "mg-guid",
      "name": "Malagasy",
      "nativeName": "Malagasy",
      "codeName": "mg"
  },
  {
      "guid": "ms-guid",
      "name": "Malay",
      "nativeName": "Malay",
      "codeName": "ms"
  },
  {
      "guid": "ml-guid",
      "name": "Malayalam",
      "nativeName": "Malayalam",
      "codeName": "ml"
  },
  {
      "guid": "mt-guid",
      "name": "Maltese",
      "nativeName": "Maltese",
      "codeName": "mt"
  },
  {
      "guid": "mi-guid",
      "name": "Maori",
      "nativeName": "Maori",
      "codeName": "mi"
  },
  {
      "guid": "mr-guid",
      "name": "Marathi",
      "nativeName": "Marathi",
      "codeName": "mr"
  },
  {
      "guid": "mn-guid",
      "name": "Mongolian",
      "nativeName": "Mongolian",
      "codeName": "mn"
  },
  {
      "guid": "my-guid",
      "name": "Myanmar (Burmese)",
      "nativeName": "Myanmar (Burmese)",
      "codeName": "my"
  },
  {
      "guid": "ne-guid",
      "name": "Nepali",
      "nativeName": "Nepali",
      "codeName": "ne"
  },
  {
      "guid": "no-guid",
      "name": "Norwegian",
      "nativeName": "Norwegian",
      "codeName": "no"
  },
  {
      "guid": "ny-guid",
      "name": "Nyanja (Chichewa)",
      "nativeName": "Nyanja (Chichewa)",
      "codeName": "ny"
  },
  {
      "guid": "ps-guid",
      "name": "Pashto",
      "nativeName": "Pashto",
      "codeName": "ps"
  },
  {
      "guid": "fa-guid",
      "name": "Persian",
      "nativeName": "Persian",
      "codeName": "fa"
  },
  {
      "guid": "pl-guid",
      "name": "Polish",
      "nativeName": "Polish",
      "codeName": "pl"
  },
  {
      "guid": "pt-guid",
      "name": "Portuguese (Portugal, Brazil)",
      "nativeName": "Portuguese (Portugal, Brazil)",
      "codeName": "pt"
  },
  {
      "guid": "pa-guid",
      "name": "Punjabi",
      "nativeName": "Punjabi",
      "codeName": "pa"
  },
  {
      "guid": "ro-guid",
      "name": "Romanian",
      "nativeName": "Romanian",
      "codeName": "ro"
  },
  {
      "guid": "ru-guid",
      "name": "Russian",
      "nativeName": "Russian",
      "codeName": "ru"
  },
  {
      "guid": "sm-guid",
      "name": "Samoan",
      "nativeName": "Samoan",
      "codeName": "sm"
  },
  {
      "guid": "gd-guid",
      "name": "Scots Gaelic",
      "nativeName": "Scots Gaelic",
      "codeName": "gd"
  },
  {
      "guid": "sr-guid",
      "name": "Serbian",
      "nativeName": "Serbian",
      "codeName": "sr"
  },
  {
      "guid": "st-guid",
      "name": "Sesotho",
      "nativeName": "Sesotho",
      "codeName": "st"
  },
  {
      "guid": "sn-guid",
      "name": "Shona",
      "nativeName": "Shona",
      "codeName": "sn"
  },
  {
      "guid": "sd-guid",
      "name": "Sindhi",
      "nativeName": "Sindhi",
      "codeName": "sd"
  },
  {
      "guid": "si-guid",
      "name": "Sinhala (Sinhalese)",
      "nativeName": "Sinhala (Sinhalese)",
      "codeName": "si"
  },
  {
      "guid": "sk-guid",
      "name": "Slovak",
      "nativeName": "Slovak",
      "codeName": "sk"
  },
  {
      "guid": "sl-guid",
      "name": "Slovenian",
      "nativeName": "Slovenian",
      "codeName": "sl"
  },
  {
      "guid": "so-guid",
      "name": "Somali",
      "nativeName": "Somali",
      "codeName": "so"
  },
  {
      "guid": "es-guid",
      "name": "Spanish",
      "nativeName": "Spanish",
      "codeName": "es"
  },
  {
      "guid": "su-guid",
      "name": "Sundanese",
      "nativeName": "Sundanese",
      "codeName": "su"
  },
  {
      "guid": "sw-guid",
      "name": "Swahili",
      "nativeName": "Swahili",
      "codeName": "sw"
  },
  {
      "guid": "sv-guid",
      "name": "Swedish",
      "nativeName": "Swedish",
      "codeName": "sv"
  },
  {
      "guid": "tl-guid",
      "name": "Tagalog (Filipino)",
      "nativeName": "Tagalog (Filipino)",
      "codeName": "tl"
  },
  {
      "guid": "tg-guid",
      "name": "Tajik",
      "nativeName": "Tajik",
      "codeName": "tg"
  },
  {
      "guid": "ta-guid",
      "name": "Tamil",
      "nativeName": "Tamil",
      "codeName": "ta"
  },
  {
      "guid": "te-guid",
      "name": "Telugu",
      "nativeName": "Telugu",
      "codeName": "te"
  },
  {
      "guid": "th-guid",
      "name": "Thai",
      "nativeName": "Thai",
      "codeName": "th"
  },
  {
      "guid": "tr-guid",
      "name": "Turkish",
      "nativeName": "Turkish",
      "codeName": "tr"
  },
  {
      "guid": "uk-guid",
      "name": "Ukrainian",
      "nativeName": "Ukrainian",
      "codeName": "uk"
  },
  {
      "guid": "ur-guid",
      "name": "Urdu",
      "nativeName": "Urdu",
      "codeName": "ur"
  },
  {
      "guid": "uz-guid",
      "name": "Uzbek",
      "nativeName": "Uzbek",
      "codeName": "uz"
  },
  {
      "guid": "vi-guid",
      "name": "Vietnamese",
      "nativeName": "Vietnamese",
      "codeName": "vi"
  },
  {
      "guid": "cy-guid",
      "name": "Welsh",
      "nativeName": "Welsh",
      "codeName": "cy"
  },
  {
      "guid": "xh-guid",
      "name": "Xhosa",
      "nativeName": "Xhosa",
      "codeName": "xh"
  },
  {
      "guid": "yi-guid",
      "name": "Yiddish",
      "nativeName": "Yiddish",
      "codeName": "yi"
  },
  {
      "guid": "yo-guid",
      "name": "Yoruba",
      "nativeName": "Yoruba",
      "codeName": "yo"
  },
  {
      "guid": "zu-guid",
      "name": "Zulu",
      "nativeName": "Zulu",
      "codeName": "zu"
  }
]
// import {languageMap} from '../assets/languageMap.js';

// Listen and log all Core Events.
playerManager.addEventListener(cast.framework.events.category.CORE,
  event => {
    console.log("Core event: " + event.type);
});

// playerManager.setMessageInterceptor(
//   cast.framework.messages.MessageType.SEEK,
//   data => {
//     if(data.currentTime ==  undefined){
//       return
//     }
//     console.log(data)
//     // const liveSeekableRange =  new cast.framework.messages.LiveSeekableRange()
//     // console.log(liveSeekableRange,playerManager.getAbsoluteTimeForMediaTime())
//     console.log(playerManager.getLiveSeekableRange())
//     // playerManager.seek(data.currentTime)
//     // playerManager.load(new cast.framework.messages.LoadRequestData())
//   }
// )




playerManager.addEventListener(
  cast.framework.events.EventType.REQUEST_SEEK, (event) => {
    // Write your own event handling code, for example
    // using the event.mediaStatus value
    console.log(event,playerManager.getLiveSeekableRange())
    // playerManager.seek()
})
playerManager.setMessageInterceptor(
  cast.framework.messages.MessageType.LOAD,
  request => {
    if (request.media && request.media.entity) {
      request.media.contentId = request.media.entity;
    }
    let ref=this;

    return new Promise((resolve, reject) => {

      castDebugLogger.warn('REQUEST', request);

      console.log(requestData)
      let isDrmEnabled = request.media.customData && request.media.customData.isDrmEnabled;
      request.media.contentId=request.media.contentId;
      if(isDrmEnabled){
        request.media.contentType="application/dash+xml";
        playbackConfig.protectionSystem = cast.framework.ContentProtection.WIDEVINE;
        playbackConfig.licenseUrl = request.media.customData.licenseUrl;
        playbackConfig.licenseRequestHandler = requestInfo => {
            requestInfo.headers = {};
            requestInfo.headers['X-AxDRM-Message'] = request.media.customData.licenseToken
            requestInfo.headers['content-type'] = 'application/dash+xml';
        };
      }else{
        request.media.contentId=request.media.contentId;
        request.media.contentType=request.media.customData.contentType;
      }

      if(request.media.customData && request.media.customData.DVR){
        console.log(cast.framework.messages.StreamType.LIVE)
        request.media.streamType = cast.framework.messages.StreamType.LIVE;
      }else{
        request.media.streamType="BUFFERED"
        request.duration = request.media.customData.duration;
      }
      // playerManager
      // .setMediaPlaybackInfoHandler(
      //   (loadRequestData, playbackConfig) => {
      //       castDebugLogger.warn('MEDIA PLAYBACK HANDLER', playbackConfig);
      //       playbackConfig.licenseUrl = 'https://0d45cc6b-drm-widevine-licensing.axprod.net/AcquireLicense';
      //       playbackConfig.licenseRequestHandler = requestInfo => {
      //         requestInfo.headers = {};
      //         requestInfo.headers['X-AxDRM-Message'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiRDQ5QTEwRjktRkZDMy00ODhDLUI2NEEtQUIwNjAwQTE1NkJEIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImJlZ2luX2RhdGUiOiIyMDIwLTAxLTEzVDEwOjEzOjEyLjM0NloiLCJleHBpcmF0aW9uX2RhdGUiOiIyMDIwLTAxLTEzVDE0OjIwOjA3Ljg0NloiLCJrZXlzIjpbeyJpZCI6IjA2MDk2YjIyLTE1YTYtNDYzZi05NTFiLTZlNjg3Yjg3YzBjZiJ9XSwicGxheXJlYWR5Ijp7Im1pbl9hcHBfc2VjdXJpdHlfbGV2ZWwiOjIwMDB9fSwiYmVnaW5fZGF0ZSI6IjIwMjAtMDEtMTNUMTA6MTM6MTIuMzQ2WiIsImV4cGlyYXRpb25fZGF0ZSI6IjIwMjAtMDEtMTNUMTQ6MjA6MDcuODQ2WiJ9.5clQkpx0AB4D7KRoSbZn2B2lKZ779yXrTt0xhBzhQQ0";
      //         requestInfo.headers['content-type'] = 'application/dash+xml';
      //       };
      //       return playbackConfig;
      //   });

      // Add metadata
    if(request.media.customData.subTitles){
      ref.allCCData=request.media.customData.subTitles;
    }

      var metadata = new cast.framework.messages.MovieMediaMetadata();
      var image = new cast.framework.messages.Image(request.media.customData.mediaImage);
      metadata.metadataType = cast.framework.messages.MetadataType.MOVIE;
      metadata.title = request.media.customData.mediaTitle;
      metadata.images=[image]
      metadata.subtitle = ""
      request.media.metadata = metadata;
      resolve(request);
    });
  });



  
  playerManager.addEventListener(
    cast.framework.events.EventType.MEDIA_STATUS, (event) => {
        console.log(event);
  });


  playerManager.setMessageInterceptor(cast.framework.messages.MessageType.EDIT_TRACKS_INFO, request => {
    // write logic to convert language codes here
    console.log(request);
    console.log(request.activeTrackIds);
    const textTracksManager = playerManager.getTextTracksManager();
    textTracksManager.setActiveByIds(request.activeTrackIds)
    // console.log();
  });
  

playerManager.addEventListener(
  cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, () => {
    castDebugLogger.warn('PLAYER LOADED');
    console.log(requestData)
    const textTracksManager = playerManager.getTextTracksManager();
    console.log(this.allCCData);
    if(this.allCCData && this.allCCData.length > 0){
      for(var i=0 ; i<this.allCCData.length; i++){
        let track = textTracksManager.createTrack();
        track.trackContentType = 'text/vtt';
        track.trackContentId = this.allCCData[i].src;
        // track.trackId=this.allCCData[i].id
        track.language=getLanguageFromMap(this.allCCData[i].label);
        textTracksManager.addTracks([track]);
      }
      const alltracks = textTracksManager.getTracks();
      console.log(alltracks);
      textTracksManager.setActiveByIds([alltracks[0].trackId]);
    }
    else{
      let tracks=textTracksManager.getTracks();
      if(tracks.length>0){
        let track=tracks[0];
        track.isInband=true;
        textTracksManager.setActiveByIds([track.trackId]);
      }
    }

  });

  playerManager.addEventListener(
    cast.framework.events.category.REQUEST,
    event => console.log(event.type));

//   playerManager.setMessageInterceptor(cast.framework.messages.MessageType.EDIT_TRACKS_INFO, request => {
//     console.log(request,'EDIT');
//     // write logic to convert language codes here
//   });

playerManager.addEventListener(cast.framework.events.EventType.ERROR, event => { 
   castDebugLogger.warn('ERROR', event);
});




function getLanguageFromMap(key){
  console.log(languageMap);
  let val=null;
  if(languageMap && languageMap.length>0){
    for(let i=0;i<languageMap.length;i++){
      if(languageMap[i].name==key || languageMap[i].nativeName==key){
        val= languageMap[i].codeName;
        break;
      }
    }
  }
  return val;
}

/** Debug Logger **/
const castDebugLogger = cast.debug.CastDebugLogger.getInstance();
cast.framework.CastReceiverContext.getInstance().setLoggerLevel(cast.framework.LoggerLevel.DEBUG);

// Enable debug logger and show a warning on receiver
// NOTE: make sure it is disabled on production
castDebugLogger.setEnabled(true);

// // Show debug overlay
// castDebugLogger.showDebugLogs(true);

// playerManager.addEventListener(
//   cast.framework.events.category.CORE,
//   event => {
//       // castDebugLogger.info('ANALYTICS', 'CORE EVENT:', event);
// });

// Set verbosity level for custom tags
castDebugLogger.loggerLevelByTags = {
  'MyAPP.LOG': cast.framework.LoggerLevel.WARNING,
  'ANALYTICS': cast.framework.LoggerLevel.INFO,
};

/** Optimizing for smart displays **/
const playerData = new cast.framework.ui.PlayerData();
const playerDataBinder = new cast.framework.ui.PlayerDataBinder(playerData);


playerDataBinder.addEventListener(
  cast.framework.ui.PlayerDataEventType.MEDIA_CHANGED,
  (e) => {
    if (!e.value) return;

    
  });

context.start({ touchScreenOptimizedApp: true, playbackConfig: playbackConfig });