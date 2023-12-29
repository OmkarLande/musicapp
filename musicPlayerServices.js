import TrackPlayer, { Event, RepeatMode } from 'react-native-track-player';
import { playListData } from './src/constants';

//player setup
export async function setupTrack() {
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack();
        isSetup = true;
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetup = true;
    } finally {
        return isSetup;
    }
}

//add track
export async function addTrack() {
    await TrackPlayer.add(playListData);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

//playback service
export async function playbackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    });
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    });
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    });
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    });
}
