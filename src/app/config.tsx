import Video from '/video.svg';
import Folder from '/folder.svg';
import Photos from '/photos.svg';
import Download from '/download.svg';

export const streetLightConfig = [
  { src: Download, description: 'Download Station', to: '/download' },
  { src: Folder, description: 'File Station', to: '/file' },
  { src: Photos, description: 'Synology Photos', to: '/photo' },
  { src: Video, description: 'Video Station', to: '/video' }
];
