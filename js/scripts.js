document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
        controls: [
            'play-large', // The large play button in the center


           
            
            
            
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'quality',
            'airplay', // Airplay (currently Safari only)
   
        ],
        captions: {active: false},
        speed: 	{selected: 1, options: [0.5, 1, 1.5, 2, 4]},
        title: 'Roblox Trailer - 2019',
        hideControls: true,
        displayDuration: true,
        disableContextMenu: true,
        clickToPlay: false,
        autoplay: true,
        playsinline: false,
        tooltips: { controls: false, seek: true },
        quality: {default: 576, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]}
    });
});

