document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
        controls: [
            'play-large', // The large play button in the center
            'play', // Play/pause playback
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
        ],
        captions: {active: false},
        speed: 	{selected: 1, options: [0.5, 1, 1.5, 2, 4]},
        title: 'Roblox Trailer - 2019',
        hideControls: true,
        displayDuration: true,
        disableContextMenu: true,
        clickToPlay: true,
        playsinline: false,
        tooltips: { controls: false, seek: true },
    });
});

