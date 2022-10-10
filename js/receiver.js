const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
const requestData = new cast.framework.messages.SeekRequestData()
const playbackConfig = new cast.framework.PlaybackConfig();
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
        track.trackContentId = this.allCCData[i].subtitleUrl;
        track.language=getLanguageFromMap(this.allCCData[i].language);
        // track.language='en';
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

playerManager.addEventListener(cast.framework.events.EventType.ERROR, event => { 
   castDebugLogger.warn('ERROR', event);
});

function getLanguageFromMap(key){
  const languageMap=require('../assets/languageMap.js');
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