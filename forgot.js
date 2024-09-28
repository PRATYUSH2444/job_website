const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const bgVideo = document.getElementById('bg-video');
    const lightThemeVideo = "images/7565449-hd_1920_1080_25fps.mp4";
    const darkThemeVideo = "images/7565824-hd_2048_1080_25fps.mp4";

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        bgVideo.src = darkThemeVideo;
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        bgVideo.src = lightThemeVideo;
      }    
      bgVideo.load();
    }
    toggleSwitch.addEventListener('change', switchTheme, false);

    function setTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
        bgVideo.src = darkThemeVideo;
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
        bgVideo.src = lightThemeVideo;
      }
      bgVideo.load();
    }

    setTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);
  