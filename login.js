const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const wrapper = document.querySelector('.wrapper');
    const rememberMeCheckbox = document.getElementById('remember-me');
    const loaderPage = document.getElementById('loader-page');

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateStyles('dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateStyles('light');
      }    
    }

    function updateStyles(theme) {
      const isDark = theme === 'dark';
      wrapper.style.color = isDark ? '#f0f0f0' : '#000';
      wrapper.style.backgroundColor = isDark ? '#2c2c2c' : '#ffffff';
      document.querySelectorAll('input').forEach(input => {
        input.style.color = isDark ? '#f0f0f0' : '#000';
        input.style.backgroundColor = isDark ? '#3a3a3a' : '#ffffff';
      });
      document.querySelectorAll('a').forEach(link => {
        link.style.color = isDark ? '#66ccff' : '#0066cc';
      });
      document.querySelector('.btn').style.backgroundColor = isDark ? '#ffffff' : '#000000';
      document.querySelector('.btn').style.color = isDark ? '#000000' : '#ffffff';
      document.querySelectorAll('.social-btn').forEach(btn => {
        btn.style.backgroundColor = isDark ? '#3a3a3a' : '#f0f0f0';
      });
      document.querySelectorAll('.social-btn i').forEach(icon => {
        icon.style.color = isDark ? '#f0f0f0' : '#333';
      });
      rememberMeCheckbox.style.borderColor = isDark ? '#555555' : '#999999';
      rememberMeCheckbox.style.backgroundColor = isDark ? '#2c2c2c' : '#ffffff';
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    function setTheme() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
        updateStyles('dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
        updateStyles('light');
      }
    }

    setTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme);

    rememberMeCheckbox.addEventListener('change', function() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (this.checked) {
        this.style.backgroundColor = isDark ? '#ffffff' : '#000000';
      } else {
        this.style.backgroundColor = isDark ? '#2c2c2c' : '#ffffff';
      }
    });

    // Show loader page first, then load login form with smooth transition
    window.addEventListener('load', function() {
      setTimeout(function() {
        loaderPage.style.opacity = '0';
        setTimeout(function() {
          loaderPage.style.display = 'none';
        }, 500);
      }, 2000); // Show loader for 2 seconds
    });