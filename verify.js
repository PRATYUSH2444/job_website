const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const wrapper = document.querySelector('.wrapper');
    const loaderPage = document.getElementById('loader-page');
    const verificationPage = document.getElementById('verification-page');

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
      document.querySelectorAll('.btn').forEach(btn => {
        btn.style.backgroundColor = isDark ? '#ffffff' : '#000000';
        btn.style.color = isDark ? '#000000' : '#ffffff';
      });
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

    // Show loader page first, then load verification page with smooth transition
    window.addEventListener('load', function() {
      setTimeout(function() {
        loaderPage.style.opacity = '0';
        setTimeout(function() {
          loaderPage.style.display = 'none';
          verificationPage.style.display = 'block';
          setTimeout(function() {
            verificationPage.style.opacity = '1';
          }, 50);
        }, 500);
      }, 2000); // Show loader for 2 seconds
    });

    // Handle verification form submission
    document.getElementById('verificationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Redirect to home page after verification
      window.location.href = 'nav.html'; // Change 'home.html' to your actual home page URL
    });

    // Handle sign in form submission
    document.getElementById('signInForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically handle the sign in process
      // For this example, we'll just log a message
      console.log('Sign in successful!');
    });