



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-e53fc1ddbde2a9e5645df620f65c80ef723c741b33293b6f22a2b7f2c8145fcf.css" integrity="sha256-5T/B3b3iqeVkXfYg9lyA73I8dBszKTtvIqK38sgUX88=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-8fd3f509ca0995390abdb9f0dfe5b79d1af6ed1ac09c75ba2d68b29b82cadf8d.css" integrity="sha256-j9P1CcoJlTkKvbnw3+W3nRr27RrAnHW6LWiym4LK340=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-8951b8889d701a8bda73fa44510fb2d70dd306d2251977e1172a78d7459cd594.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    
    <title>torque/torque.js at master · CartoDB/torque</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/1799254?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="CartoDB/torque" name="twitter:title" /><meta content="torque - Temporal mapping for CartoDB" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/1799254?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="CartoDB/torque" property="og:title" /><meta content="https://github.com/CartoDB/torque" property="og:url" /><meta content="torque - Temporal mapping for CartoDB" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MzE1MTkwOTo3ODFkMTcxMWUyODhlMmQ4YjJkM2ZiNWQ4Mjk0OWE0ZDowYTkxM2U4YTlmOGQ3NmVkYjA1MmM4M2Y1ZTA4ZTU2MmExN2NlN2Y4NGYzYTYwNDdlZWRjODU2ZDk2ODJlMTk2--de54899c5b993e208e9347fe5c09a4790d8eb8dd">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="3283D720:104B:B9CBC8D:57939987" name="octolytics-dimension-request_id" /><meta content="3151909" name="octolytics-actor-id" /><meta content="geointerest" name="octolytics-actor-login" /><meta content="3060c419edb4fa2b74360de0cf87020fd7b51595d7412342ae9f51dfc8f35733" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="geointerest">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="MjkzNTI1NGU1MTY5M2ZlNGJkOGRhNDcyOGMzYTM3M2QyYjhkYjVkNDU4NmEwNWI1NzRjMGYzODE4YjcwZjNiN3x7InJlbW90ZV9hZGRyZXNzIjoiNTAuMTMxLjIxNS4zMiIsInJlcXVlc3RfaWQiOiIzMjgzRDcyMDoxMDRCOkI5Q0JDOEQ6NTc5Mzk5ODciLCJ0aW1lc3RhbXAiOjE0NjkyOTA4ODh9">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="7d5daa812cd8c2d1cf235ad0c9e9546041fb92dc">
    <meta content="795acd356d22f024cc91c6bddbf22246d62b7811" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="1618c80d2baf02b4a412a41d56280c0a">
    

      
  <meta name="description" content="torque - Temporal mapping for CartoDB">
  <meta name="go-import" content="github.com/CartoDB/torque git https://github.com/CartoDB/torque.git">

  <meta content="1799254" name="octolytics-dimension-user_id" /><meta content="CartoDB" name="octolytics-dimension-user_login" /><meta content="5974058" name="octolytics-dimension-repository_id" /><meta content="CartoDB/torque" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5974058" name="octolytics-dimension-repository_network_root_id" /><meta content="CartoDB/torque" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/CartoDB/torque/commits/master.atom" rel="alternate" title="Recent Commits to torque:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/CartoDB/torque/blob/master/dist/torque.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/CartoDB/torque/search" class="js-site-search-form" data-scoped-search-url="/CartoDB/torque/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:3151909" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="CartoDB/torque">This repository</span>
  </div>
    <a class="dropdown-item" href="/CartoDB/torque/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/geointerest"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@geointerest" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3151909?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">geointerest</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/geointerest" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6YLcTNobtk81ih1szqz/b/65ghysbPbYl1iYsfnxhIgUTNLTjJKrtSifal0N9pnnZlujZJv3keExD3YVdkuIdg==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ooOG/2g5+TICZujKja5IQNK+EXUXEatVlY73GkPRgZNNcVRE4wniaoiGMmUc9ND3vy+knxuE7uv0ODR+jU3Q2g==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="5974058" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/CartoDB/torque/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/CartoDB/torque/watchers">
            105
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/CartoDB/torque/unstar" class="starred" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="GZr8snZLxcpV7oqTZTRZpwU8tcpimTqiwKECUMR1O9xPShQ0pj4e4sxiA+1YHqf7SpYFGOyLxMKGiiwpq7EHbQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar CartoDB/torque"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/CartoDB/torque/stargazers">
          316
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/CartoDB/torque/star" class="unstarred" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="M59r8sDRGLOraeVADPAwXuzcpAHzsXJP1OVEhcTNSZ7/rbOgUizsrGKzbU8KoucoSeSWFGEoGZEKYzEN7PmKfQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star CartoDB/torque"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/CartoDB/torque/stargazers">
          316
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/CartoDB/torque/fork" class="btn-with-count" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tLsQV8ym0OXWuBKOBYXndCRdv7bfKpubcXfYAcAxKto66+VE13XBGnoe2bHWaAS2A2R1sqMZFgqlR4N+Tsn76A==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of CartoDB/torque to your account"
                aria-label="Fork your own copy of CartoDB/torque to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/CartoDB/torque/network" class="social-count">
      109
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/CartoDB" class="url fn" rel="author">CartoDB</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/CartoDB/torque" data-pjax="#js-repo-pjax-container">torque</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/CartoDB/torque" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /CartoDB/torque" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/CartoDB/torque/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /CartoDB/torque/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">30</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/CartoDB/torque/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /CartoDB/torque/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">11</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/CartoDB/torque/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /CartoDB/torque/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/CartoDB/torque/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /CartoDB/torque/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/CartoDB/torque/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /CartoDB/torque/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/CartoDB/torque/blob/8a14fe546ac411829b5f52bb575526ad5ecb79f8/dist/torque.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:d53b51dc57022d5ea027a20f04122880 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/2.1.01/dist/torque.js"
               data-name="2.1.01"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="2.1.01">
                2.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/61-fix_firefox/dist/torque.js"
               data-name="61-fix_firefox"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="61-fix_firefox">
                61-fix_firefox
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/68-fix_extra_frame/dist/torque.js"
               data-name="68-fix_extra_frame"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="68-fix_extra_frame">
                68-fix_extra_frame
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/BI/dist/torque.js"
               data-name="BI"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="BI">
                BI
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/M/dist/torque.js"
               data-name="M"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="M">
                M
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/acceptance-tests/dist/torque.js"
               data-name="acceptance-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="acceptance-tests">
                acceptance-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/ae-workers/dist/torque.js"
               data-name="ae-workers"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="ae-workers">
                ae-workers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/aequus/dist/torque.js"
               data-name="aequus"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="aequus">
                aequus
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/anim_events/dist/torque.js"
               data-name="anim_events"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="anim_events">
                anim_events
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/animation_events/dist/torque.js"
               data-name="animation_events"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="animation_events">
                animation_events
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/avoid_render/dist/torque.js"
               data-name="avoid_render"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="avoid_render">
                avoid_render
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/bi_provider_bounding_box_histogram/dist/torque.js"
               data-name="bi_provider_bounding_box_histogram"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="bi_provider_bounding_box_histogram">
                bi_provider_bounding_box_histogram
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/bi_provider_get_point_data/dist/torque.js"
               data-name="bi_provider_get_point_data"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="bi_provider_get_point_data">
                bi_provider_get_point_data
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/bi_provider_stuart_changes/dist/torque.js"
               data-name="bi_provider_stuart_changes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="bi_provider_stuart_changes">
                bi_provider_stuart_changes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/bi_provider_web_workers/dist/torque.js"
               data-name="bi_provider_web_workers"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="bi_provider_web_workers">
                bi_provider_web_workers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/bi_provider/dist/torque.js"
               data-name="bi_provider"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="bi_provider">
                bi_provider
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/big_data_provider/dist/torque.js"
               data-name="big_data_provider"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="big_data_provider">
                big_data_provider
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/clamped/dist/torque.js"
               data-name="clamped"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="clamped">
                clamped
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/clear_color/dist/torque.js"
               data-name="clear_color"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="clear_color">
                clear_color
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/docs-781/dist/torque.js"
               data-name="docs-781"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="docs-781">
                docs-781
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/docs-minor-edits/dist/torque.js"
               data-name="docs-minor-edits"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="docs-minor-edits">
                docs-minor-edits
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/example-additions/dist/torque.js"
               data-name="example-additions"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="example-additions">
                example-additions
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/export-methods/dist/torque.js"
               data-name="export-methods"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="export-methods">
                export-methods
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/firefox-flag/dist/torque.js"
               data-name="firefox-flag"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="firefox-flag">
                firefox-flag
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/fix-marker-opacity/dist/torque.js"
               data-name="fix-marker-opacity"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="fix-marker-opacity">
                fix-marker-opacity
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/fix_windshaft/dist/torque.js"
               data-name="fix_windshaft"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="fix_windshaft">
                fix_windshaft
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/gh-pages/dist/torque.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/heat-tweaks/dist/torque.js"
               data-name="heat-tweaks"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="heat-tweaks">
                heat-tweaks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/heat/dist/torque.js"
               data-name="heat"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="heat">
                heat
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/heatmaps-server/dist/torque.js"
               data-name="heatmaps-server"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="heatmaps-server">
                heatmaps-server
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/histograms-interaction/dist/torque.js"
               data-name="histograms-interaction"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="histograms-interaction">
                histograms-interaction
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/histograms/dist/torque.js"
               data-name="histograms"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="histograms">
                histograms
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/interactivity/dist/torque.js"
               data-name="interactivity"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="interactivity">
                interactivity
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/internal-provider/dist/torque.js"
               data-name="internal-provider"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="internal-provider">
                internal-provider
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/iso/dist/torque.js"
               data-name="iso"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="iso">
                iso
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/key_fix/dist/torque.js"
               data-name="key_fix"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="key_fix">
                key_fix
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/lg-errors/dist/torque.js"
               data-name="lg-errors"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="lg-errors">
                lg-errors
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/lines/dist/torque.js"
               data-name="lines"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="lines">
                lines
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/loop-by-default/dist/torque.js"
               data-name="loop-by-default"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="loop-by-default">
                loop-by-default
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/loop-option-14/dist/torque.js"
               data-name="loop-option-14"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="loop-option-14">
                loop-option-14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/luminosity/dist/torque.js"
               data-name="luminosity"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="luminosity">
                luminosity
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/maps_api_template/dist/torque.js"
               data-name="maps_api_template"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="maps_api_template">
                maps_api_template
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/CartoDB/torque/blob/master/dist/torque.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/multi_variable_json_torque_test/dist/torque.js"
               data-name="multi_variable_json_torque_test"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="multi_variable_json_torque_test">
                multi_variable_json_torque_test
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/multi_variable_with_scaling/dist/torque.js"
               data-name="multi_variable_with_scaling"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="multi_variable_with_scaling">
                multi_variable_with_scaling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/named-maps/dist/torque.js"
               data-name="named-maps"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="named-maps">
                named-maps
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/new_torque/dist/torque.js"
               data-name="new_torque"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="new_torque">
                new_torque
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/newdocs/dist/torque.js"
               data-name="newdocs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="newdocs">
                newdocs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/optimized-heat/dist/torque.js"
               data-name="optimized-heat"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="optimized-heat">
                optimized-heat
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/point_labels/dist/torque.js"
               data-name="point_labels"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="point_labels">
                point_labels
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/privacy-maps/dist/torque.js"
               data-name="privacy-maps"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="privacy-maps">
                privacy-maps
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/pytool-prov/dist/torque.js"
               data-name="pytool-prov"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="pytool-prov">
                pytool-prov
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/redshift/dist/torque.js"
               data-name="redshift"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="redshift">
                redshift
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/rm/dist/torque.js"
               data-name="rm"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="rm">
                rm
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/scale_functions_for_variables/dist/torque.js"
               data-name="scale_functions_for_variables"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="scale_functions_for_variables">
                scale_functions_for_variables
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/snaptogrid/dist/torque.js"
               data-name="snaptogrid"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="snaptogrid">
                snaptogrid
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/splunk/dist/torque.js"
               data-name="splunk"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="splunk">
                splunk
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/sprite-limit/dist/torque.js"
               data-name="sprite-limit"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="sprite-limit">
                sprite-limit
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/sql/dist/torque.js"
               data-name="sql"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="sql">
                sql
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/stream/dist/torque.js"
               data-name="stream"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="stream">
                stream
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/stuart_experimental/dist/torque.js"
               data-name="stuart_experimental"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="stuart_experimental">
                stuart_experimental
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/test_back_per_tile/dist/torque.js"
               data-name="test_back_per_tile"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="test_back_per_tile">
                test_back_per_tile
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/tile-size/dist/torque.js"
               data-name="tile-size"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="tile-size">
                tile-size
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/tilejson_extra_data/dist/torque.js"
               data-name="tilejson_extra_data"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="tilejson_extra_data">
                tilejson_extra_data
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/timeslider-remove/dist/torque.js"
               data-name="timeslider-remove"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="timeslider-remove">
                timeslider-remove
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/timestamps/dist/torque.js"
               data-name="timestamps"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="timestamps">
                timestamps
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/vector_marker/dist/torque.js"
               data-name="vector_marker"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="vector_marker">
                vector_marker
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/voronoi/dist/torque.js"
               data-name="voronoi"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="voronoi">
                voronoi
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/web-worker/dist/torque.js"
               data-name="web-worker"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="web-worker">
                web-worker
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/CartoDB/torque/blob/webgl/dist/torque.js"
               data-name="webgl"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="webgl">
                webgl
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.15.1/dist/torque.js"
              data-name="2.15.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.1">
                2.15.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.15.0/dist/torque.js"
              data-name="2.15.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.0">
                2.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.14.0/dist/torque.js"
              data-name="2.14.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.0">
                2.14.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.13.0/dist/torque.js"
              data-name="2.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.0">
                2.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.12.0/dist/torque.js"
              data-name="2.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.12.0">
                2.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.11.4/dist/torque.js"
              data-name="2.11.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.4">
                2.11.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.11.3/dist/torque.js"
              data-name="2.11.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.3">
                2.11.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.11.2/dist/torque.js"
              data-name="2.11.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.2">
                2.11.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.11.1/dist/torque.js"
              data-name="2.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.1">
                2.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.11.0/dist/torque.js"
              data-name="2.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.0">
                2.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.10.1/dist/torque.js"
              data-name="2.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.10.1">
                2.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.10.0/dist/torque.js"
              data-name="2.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.10.0">
                2.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.9.0/dist/torque.js"
              data-name="2.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.0">
                2.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.8/dist/torque.js"
              data-name="2.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8">
                2.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.4.00/dist/torque.js"
              data-name="2.4.00"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.4.00">
                2.4.00
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.3.00/dist/torque.js"
              data-name="2.3.00"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.00">
                2.3.00
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.2.00/dist/torque.js"
              data-name="2.2.00"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.00">
                2.2.00
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.1.01/dist/torque.js"
              data-name="2.1.01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.01">
                2.1.01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.1.00/dist/torque.js"
              data-name="2.1.00"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.00">
                2.1.00
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/2.0/dist/torque.js"
              data-name="2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0">
                2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/CartoDB/torque/tree/1.0/dist/torque.js"
              data-name="1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0">
                1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/CartoDB/torque/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/CartoDB/torque"><span>torque</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/CartoDB/torque/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">torque.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/CartoDB/torque/commit/a3b07fc649392daaa8bb27474ff6a5fd965fd532" data-pjax>
          a3b07fc
        </a>
        <relative-time datetime="2015-12-15T15:16:25Z">Dec 15, 2015</relative-time>
      </span>
      <div>
        <img alt="@rochoa" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/45346?v=3&amp;s=40" width="20" />
        <a href="/rochoa" class="user-mention" rel="contributor">rochoa</a>
          <a href="/CartoDB/torque/commit/a3b07fc649392daaa8bb27474ff6a5fd965fd532" class="message" data-pjax="true" title="Regenerate dist files">Regenerate dist files</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>7</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="javisantana" href="/CartoDB/torque/commits/master/dist/torque.js?author=javisantana"><img alt="@javisantana" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/30147?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rochoa" href="/CartoDB/torque/commits/master/dist/torque.js?author=rochoa"><img alt="@rochoa" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/45346?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="fdansv" href="/CartoDB/torque/commits/master/dist/torque.js?author=fdansv"><img alt="@fdansv" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3707222?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="abenrob" href="/CartoDB/torque/commits/master/dist/torque.js?author=abenrob"><img alt="@abenrob" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3422185?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="viddo" href="/CartoDB/torque/commits/master/dist/torque.js?author=viddo"><img alt="@viddo" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/978461?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="javierarce" href="/CartoDB/torque/commits/master/dist/torque.js?author=javierarce"><img alt="@javierarce" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/4933?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="xavijam" href="/CartoDB/torque/commits/master/dist/torque.js?author=xavijam"><img alt="@xavijam" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/132146?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@javisantana" height="24" src="https://avatars3.githubusercontent.com/u/30147?v=3&amp;s=48" width="24" />
            <a href="/javisantana">javisantana</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rochoa" height="24" src="https://avatars1.githubusercontent.com/u/45346?v=3&amp;s=48" width="24" />
            <a href="/rochoa">rochoa</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@fdansv" height="24" src="https://avatars2.githubusercontent.com/u/3707222?v=3&amp;s=48" width="24" />
            <a href="/fdansv">fdansv</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@abenrob" height="24" src="https://avatars0.githubusercontent.com/u/3422185?v=3&amp;s=48" width="24" />
            <a href="/abenrob">abenrob</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@viddo" height="24" src="https://avatars2.githubusercontent.com/u/978461?v=3&amp;s=48" width="24" />
            <a href="/viddo">viddo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@javierarce" height="24" src="https://avatars0.githubusercontent.com/u/4933?v=3&amp;s=48" width="24" />
            <a href="/javierarce">javierarce</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@xavijam" height="24" src="https://avatars0.githubusercontent.com/u/132146?v=3&amp;s=48" width="24" />
            <a href="/xavijam">xavijam</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/CartoDB/torque/raw/master/dist/torque.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/CartoDB/torque/blame/master/dist/torque.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/CartoDB/torque/commits/master/dist/torque.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/CartoDB/torque?branch=master&amp;filepath=dist%2Ftorque.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/CartoDB/torque/edit/master/dist/torque.js" class="inline-form js-update-url-with-hash" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="v4aiQ/iTMcwwijnKV6gyG7ziysLskGRdk31WvD+gxl37+by3vii5i0l3bocrhRbcN215B5m67r7Gm6XYH9iIfg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/CartoDB/torque/delete/master/dist/torque.js" class="inline-form" data-form-nonce="795acd356d22f024cc91c6bddbf22246d62b7811" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5QssKvshBeGBeIpdNq05t4O0mmFCl32g8adNwjuzBr8rJj2jb/zHS4iShhkTWNvv3lPuFsdEy+XzCh3qpX7lKA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      3 lines (3 sloc)
      <span class="file-info-divider"></span>
    86 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(e){if(&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module)module.exports=e();else if(&quot;function&quot;==typeof define&amp;&amp;define.amd)define([],e);else{var t;&quot;undefined&quot;!=typeof window?t=window:&quot;undefined&quot;!=typeof global?t=global:&quot;undefined&quot;!=typeof self&amp;&amp;(t=self),t.torque=e()}}(function(){var e,t,n;return function i(e,t,n){function r(o,u){if(!t[o]){if(!e[o]){var a=typeof require==&quot;function&quot;&amp;&amp;require;if(!u&amp;&amp;a)return a(o,!0);if(s)return s(o,!0);var f=new Error(&quot;Cannot find module &#39;&quot;+o+&quot;&#39;&quot;);throw f.code=&quot;MODULE_NOT_FOUND&quot;,f}var l=t[o]={exports:{}};e[o][0].call(l.exports,function(t){var n=e[o][1][t];return r(n?n:t)},l,l.exports,i,e,t,n)}return t[o].exports}var s=typeof require==&quot;function&quot;&amp;&amp;require;for(var o=0;o&lt;n.length;o++)r(n[o]);return r}({1:[function(e,t,n){var r=function(e,t){if(e&lt;0)throw new Error(&quot;start must be a positive number&quot;);if(e&gt;=t)throw new Error(&quot;start must be smaller than end&quot;);this.start=e,this.end=t};r.prototype={diff:function(){return this.end-this.start},isLast:function(e){return(e|0)===this.end}},t.exports=r},{}],2:[function(e,t,n){(function(n){function u(e,t){if(!t.steps)throw new Error(&quot;steps option missing&quot;);this.options=t,this.running=!1,this._tick=this._tick.bind(this),this._t0=+(new Date),this.callback=e,this._time=0,this.itemsReady=!1,this.options=r.extend({animationDelay:0,maxDelta:.2,loop:t.loop===undefined?!0:t.loop},this.options),this.steps(t.steps)}var r=e(&quot;./&quot;),i=e(&quot;./animator-steps-range&quot;),s=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame||function(e){return n.setTimeout(e,1e3/60)},o=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.msCancelAnimationFrame||function(e){clearTimeout(e)};u.prototype={start:function(){this.running=!0,s(this._tick),this.options.onStart&amp;&amp;this.options.onStart(),this.stepsRange().diff()===1&amp;&amp;(this.running=!1)},isRunning:function(){return this.running},stop:function(){this.pause(),this.time(this.stepsRange().start),this.options.onStop&amp;&amp;this.options.onStop()},time:function(e){if(!arguments.length)return this._time;this._time=e;var t=this.range(this.domain(this._time));this.callback(t)},toggle:function(){this.running?this.pause():this.start()},rescale:function(){return this.domainInv=r.math.linear(this.options.animationDelay,this.options.animationDelay+this.options.animationDuration),this.domain=this.domainInv.invert(),this.range=r.math.linear(0,this._defaultStepsRange.end),this.rangeInv=this.range.invert(),this.time(this._time),this.running?this.start():this.pause(),this},duration:function(e){return arguments.length?(this.options.animationDuration=e,this.time()&gt;e&amp;&amp;this.time(0),this.rescale(),this):this.options.animationDuration},steps:function(e){return this.options.steps=e,this._defaultStepsRange=new i(0,e),this.rescale()},stepsRange:function(e,t){if(arguments.length===2){if(e&lt;this._defaultStepsRange.start)throw new Error(&quot;start must be within default steps range&quot;);if(t&gt;this._defaultStepsRange.end)throw new Error(&quot;end must be within default steps range&quot;);this._customStepsRange=new i(e,t),this.options.onStepsRange&amp;&amp;this.options.onStepsRange();var n=this.step()|0;(n&lt;e||n&gt;t)&amp;&amp;this.step(e)}return this._customStepsRange||this._defaultStepsRange},removeCustomStepsRange:function(){this._customStepsRange=undefined,this.options.onStepsRange&amp;&amp;this.options.onStepsRange()},step:function(e){if(arguments.length===0)return this.range(this.domain(this._time));this._time=this.domainInv(this.rangeInv(e))},pause:function(){this.running=!1,o(this._tick),this.options.onPause&amp;&amp;this.options.onPause()},_tick:function(){var e=+(new Date),t=(e-this._t0)*.001;t=Math.min(this.options.maxDelta,t),this._t0=e,this._time+=t;var n=this.stepsRange();n.isLast(this.step())&amp;&amp;(this.options.loop?this.step(n.start):(this.time(this.options.animationDuration),this.pause())),this.running&amp;&amp;(this.time(this._time),s(this._tick))}},t.exports=u}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{&quot;./&quot;:11,&quot;./animator-steps-range&quot;:1}],3:[function(e,t,n){var r={version:&quot;1.0.0&quot;,style:{&quot;comp-op&quot;:{css:&quot;comp-op&quot;,&quot;default-value&quot;:&quot;src-over&quot;,&quot;default-meaning&quot;:&quot;add the current layer on top of other layers&quot;,doc:&quot;Composite operation. This defines how this layer should behave relative to layers atop or below it.&quot;,type:[&quot;src&quot;,&quot;src-over&quot;,&quot;dst-over&quot;,&quot;src-in&quot;,&quot;dst-in&quot;,&quot;src-out&quot;,&quot;dst-out&quot;,&quot;src-atop&quot;,&quot;dst-atop&quot;,&quot;xor&quot;,&quot;darken&quot;,&quot;lighten&quot;]}},layer:{&quot;buffer-size&quot;:{&quot;default-value&quot;:&quot;0&quot;,type:&quot;float&quot;,&quot;default-meaning&quot;:&quot;No buffer will be used&quot;,doc:&quot;Extra tolerance around the Layer extent (in pixels) used to when querying and (potentially) clipping the layer data during rendering&quot;},&quot;-torque-clear-color&quot;:{css:&quot;-torque-clear-color&quot;,type:&quot;color&quot;,&quot;default-value&quot;:&quot;rgba(255, 255, 255, 0)&quot;,&quot;default-meaning&quot;:&quot;full clear&quot;,doc:&quot;color used to clear canvas on each frame&quot;},&quot;-torque-frame-count&quot;:{css:&quot;-torque-frame-count&quot;,&quot;default-value&quot;:&quot;128&quot;,type:&quot;number&quot;,&quot;default-meaning&quot;:&quot;the data is broken into 128 time frames&quot;,doc:&quot;Number of animation steps/frames used in the animation. If the data contains a fewere number of total frames, the lesser value will be used.&quot;},&quot;-torque-resolution&quot;:{css:&quot;-torque-resolution&quot;,&quot;default-value&quot;:&quot;2&quot;,type:&quot;number&quot;,&quot;default-meaning&quot;:&quot;&quot;,doc:&quot;Spatial resolution in pixels. A resolution of 1 means no spatial aggregation of the data. Any other resolution of N results in spatial aggregation into cells of NxN pixels. The value N must be power of 2&quot;},&quot;-torque-animation-duration&quot;:{css:&quot;-torque-animation-duration&quot;,&quot;default-value&quot;:&quot;30&quot;,type:&quot;number&quot;,&quot;default-meaning&quot;:&quot;the animation lasts 30 seconds&quot;,doc:&quot;Animation duration in seconds&quot;},&quot;-torque-aggregation-function&quot;:{css:&quot;-torque-aggregation-function&quot;,&quot;default-value&quot;:&quot;count(cartodb_id)&quot;,type:&quot;string&quot;,&quot;default-meaning&quot;:&quot;the value for each cell is the count of points in that cell&quot;,doc:&quot;A function used to calculate a value from the aggregate data for each cell. See -torque-resolution&quot;},&quot;-torque-time-attribute&quot;:{css:&quot;-torque-time-attribute&quot;,&quot;default-value&quot;:&quot;time&quot;,type:&quot;string&quot;,&quot;default-meaning&quot;:&quot;the data column in your table that is of a time based type&quot;,doc:&quot;The table column that contains the time information used create the animation&quot;},&quot;-torque-data-aggregation&quot;:{css:&quot;-torque-data-aggregation&quot;,&quot;default-value&quot;:&quot;linear&quot;,type:[&quot;cumulative&quot;],&quot;default-meaning&quot;:&quot;previous values are discarded&quot;,doc:&quot;A linear animation will discard previous values while a cumulative animation will accumulate them until it restarts&quot;}},symbolizers:{&quot;*&quot;:{&quot;comp-op&quot;:{css:&quot;comp-op&quot;,&quot;default-value&quot;:&quot;src-over&quot;,&quot;default-meaning&quot;:&quot;add the current layer on top of other layers&quot;,doc:&quot;Composite operation. This defines how this layer should behave relative to layers atop or below it.&quot;,type:[&quot;src&quot;,&quot;src-over&quot;,&quot;dst-over&quot;,&quot;src-in&quot;,&quot;dst-in&quot;,&quot;src-out&quot;,&quot;dst-out&quot;,&quot;src-atop&quot;,&quot;dst-atop&quot;,&quot;xor&quot;,&quot;darken&quot;,&quot;lighten&quot;]},opacity:{css:&quot;opacity&quot;,type:&quot;float&quot;,doc:&quot;An alpha value for the style (which means an alpha applied to all features in separate buffer and then composited back to main buffer)&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;no separate buffer will be used and no alpha will be applied to the style after rendering&quot;}},trail:{steps:{css:&quot;trail-steps&quot;,type:&quot;float&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;no trail steps&quot;,doc:&quot;How many steps of trails are going to be rendered&quot;}},polygon:{fill:{css:&quot;polygon-fill&quot;,type:&quot;color&quot;,&quot;default-value&quot;:&quot;rgba(128,128,128,1)&quot;,&quot;default-meaning&quot;:&quot;gray and fully opaque (alpha = 1), same as rgb(128,128,128)&quot;,doc:&quot;Fill color to assign to a polygon&quot;},&quot;fill-opacity&quot;:{css:&quot;polygon-opacity&quot;,type:&quot;float&quot;,doc:&quot;The opacity of the polygon&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;opaque&quot;}},line:{stroke:{css:&quot;line-color&quot;,&quot;default-value&quot;:&quot;rgba(0,0,0,1)&quot;,type:&quot;color&quot;,&quot;default-meaning&quot;:&quot;black and fully opaque (alpha = 1), same as rgb(0,0,0)&quot;,doc:&quot;The color of a drawn line&quot;},&quot;stroke-width&quot;:{css:&quot;line-width&quot;,&quot;default-value&quot;:1,type:&quot;float&quot;,doc:&quot;The width of a line in pixels&quot;},&quot;stroke-opacity&quot;:{css:&quot;line-opacity&quot;,&quot;default-value&quot;:1,type:&quot;float&quot;,&quot;default-meaning&quot;:&quot;opaque&quot;,doc:&quot;The opacity of a line&quot;},&quot;stroke-linejoin&quot;:{css:&quot;line-join&quot;,&quot;default-value&quot;:&quot;miter&quot;,type:[&quot;miter&quot;,&quot;round&quot;,&quot;bevel&quot;],doc:&quot;The behavior of lines when joining&quot;},&quot;stroke-linecap&quot;:{css:&quot;line-cap&quot;,&quot;default-value&quot;:&quot;butt&quot;,type:[&quot;butt&quot;,&quot;round&quot;,&quot;square&quot;],doc:&quot;The display of line endings&quot;}},markers:{file:{css:&quot;marker-file&quot;,doc:&quot;An SVG file that this marker shows at each placement. If no file is given, the marker will show an ellipse.&quot;,&quot;default-value&quot;:&quot;&quot;,&quot;default-meaning&quot;:&quot;An ellipse or circle, if width equals height&quot;,type:&quot;uri&quot;},opacity:{css:&quot;marker-opacity&quot;,doc:&quot;The overall opacity of the marker, if set, overrides both the opacity of both the fill and stroke&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;The stroke-opacity and fill-opacity will be used&quot;,type:&quot;float&quot;},&quot;fill-opacity&quot;:{css:&quot;marker-fill-opacity&quot;,doc:&quot;The fill opacity of the marker&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;opaque&quot;,type:&quot;float&quot;},stroke:{css:&quot;marker-line-color&quot;,doc:&quot;The color of the stroke around a marker shape.&quot;,&quot;default-value&quot;:&quot;black&quot;,type:&quot;color&quot;},&quot;stroke-width&quot;:{css:&quot;marker-line-width&quot;,doc:&quot;The width of the stroke around a marker shape, in pixels. This is positioned on the boundary, so high values can cover the area itself.&quot;,type:&quot;float&quot;},&quot;stroke-opacity&quot;:{css:&quot;marker-line-opacity&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;opaque&quot;,doc:&quot;The opacity of a line&quot;,type:&quot;float&quot;},fill:{css:&quot;marker-fill&quot;,&quot;default-value&quot;:&quot;blue&quot;,doc:&quot;The color of the area of the marker.&quot;,type:&quot;color&quot;},&quot;marker-type&quot;:{css:&quot;marker-type&quot;,type:[&quot;rectangle&quot;,&quot;ellipse&quot;],&quot;default-value&quot;:&quot;ellipse&quot;,doc:&quot;The default marker-type. If a SVG file is not given as the marker-file parameter, the renderer provides either an rectangle or an ellipse (a circle if height is equal to width)&quot;},width:{css:&quot;marker-width&quot;,&quot;default-value&quot;:10,doc:&quot;The width of the marker, if using one of the default types.&quot;,type:&quot;float&quot;}},point:{file:{css:&quot;point-file&quot;,type:&quot;uri&quot;,required:!1,&quot;default-value&quot;:&quot;none&quot;,doc:&quot;Image file to represent a point&quot;},opacity:{css:&quot;point-opacity&quot;,type:&quot;float&quot;,&quot;default-value&quot;:1,&quot;default-meaning&quot;:&quot;Fully opaque&quot;,doc:&quot;A value from 0 to 1 to control the opacity of the point&quot;}}},colors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50],transparent:[0,0,0,0]}};t.exports={version:{latest:r,&quot;1.0.0&quot;:r}}},{}],4:[function(e,t,n){(function(n){function i(){}var r=n.carto||e(&quot;carto&quot;);i.prototype={},i.optionsFromLayer=function(e){var t={};if(!e)return t;var n={&quot;buffer-size&quot;:&quot;buffer-size&quot;,&quot;-torque-frame-count&quot;:&quot;steps&quot;,&quot;-torque-resolution&quot;:&quot;resolution&quot;,&quot;-torque-animation-duration&quot;:&quot;animationDuration&quot;,&quot;-torque-aggregation-function&quot;:&quot;countby&quot;,&quot;-torque-time-attribute&quot;:&quot;column&quot;,&quot;-torque-data-aggregation&quot;:&quot;data_aggregation&quot;};for(var r in n){var i=e.eval(r);if(i!==undefined){var s=n[r];t[s]=i}}return t},i.optionsFromCartoCSS=function(e){var t=(new r.RendererJS).render(e),n=t.findLayer({name:&quot;Map&quot;});return i.optionsFromLayer(n)},t.exports.TorqueLayer=i}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{carto:undefined}],5:[function(e,t,n){(function(e){function r(){var e=arguments,t=e[0];for(var n=1;n&lt;e.length;++n){var r=e[n];for(var i in r)t[i]=r[i]}return t}function i(e){return r({},e)}function s(e){return typeof e==&quot;function&quot;||!1}function o(e){return e&amp;&amp;typeof e==&quot;object&quot;&amp;&amp;Object.prototype.toString.call(e)==&quot;[object Array]&quot;}function a(){return!!document.createElement(&quot;canvas&quot;)}function f(){return typeof navigator!=&quot;undefined&quot;?navigator.userAgent:&quot;&quot;}var n={};n.on=function(e,t){var n=this._evt_callbacks=this._evt_callbacks||{},r=n[e]||(n[e]=[]);return r.push(t),this},n.trigger=function(e){var t=this._evt_callbacks&amp;&amp;this._evt_callbacks[e];for(var n=0;t&amp;&amp;n&lt;t.length;++n)t[n].apply(this,Array.prototype.slice.call(arguments,1));return this},n.fire=n.trigger,n.off=function(e,t){var n=this._evt_callbacks&amp;&amp;this._evt_callbacks[e];if(n&amp;&amp;!t)return delete this._evt_callbacks[e],this;var r=[];for(var i=0;n&amp;&amp;i&lt;n.length;++i)n[i]===t&amp;&amp;r.push(i);while((i=r.pop())!==undefined)n.splice(i,1);return this},n.callbacks=function(e){return this._evt_callbacks&amp;&amp;this._evt_callbacks[e]||[]};var u={Uint8Array:typeof e.Uint8Array!=&quot;undefined&quot;?e.Uint8Array:Array,Uint8ClampedArray:typeof e.Uint8ClampedArray!=&quot;undefined&quot;?e.Uint8ClampedArray:Array,Uint32Array:typeof e.Uint32Array!=&quot;undefined&quot;?e.Uint32Array:Array,Int16Array:typeof e.Int16Array!=&quot;undefined&quot;?e.Int16Array:Array,Int32Array:typeof e.Int32Array!=&quot;undefined&quot;?e.Int32Array:Array},l={sprites_to_images:f().indexOf(&quot;Safari&quot;)===-1&amp;&amp;f().indexOf(&quot;Firefox&quot;)===-1};t.exports={Event:n,extend:r,clone:i,isFunction:s,isArray:o,types:u,isBrowserSupported:a,flags:l}}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{}],6:[function(e,t,n){function r(e){function n(e,t){return function(){t.apply(e)}}this.isAdded_=!1,this.isAnimated_=!1,this.paneName_=r.DEFAULT_PANE_NAME_,this.updateHandler_=null,this.resizeHandler_=null,this.topLeft_=null,this.centerListener_=null,this.resizeListener_=null,this.needsResize_=!0,this.requestAnimationFrameId_=null;var t=document.createElement(&quot;canvas&quot;);t.style.position=&quot;absolute&quot;,t.style.top=0,t.style.left=0,t.style.pointerEvents=&quot;none&quot;,this.canvas=t,this.repositionFunction_=n(this,this.repositionCanvas_),this.resizeFunction_=n(this,this.resize_),this.requestUpdateFunction_=n(this,this.update_),e&amp;&amp;this.setOptions(e)}r.prototype=new google.maps.OverlayView,r.DEFAULT_PANE_NAME_=&quot;overlayLayer&quot;,r.CSS_TRANSFORM_=function(){var e=document.createElement(&quot;div&quot;),t=[&quot;transform&quot;,&quot;WebkitTransform&quot;,&quot;MozTransform&quot;,&quot;OTransform&quot;,&quot;msTransform&quot;];for(var n=0;n&lt;t.length;n++){var r=t[n];if(e.style[r]!==undefined)return r}return t[0]}(),r.prototype.requestAnimFrame_=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},r.prototype.cancelAnimFrame_=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(e){},r.prototype.setOptions=function(e){e.animate!==undefined&amp;&amp;this.setAnimate(e.animate),e.paneName!==undefined&amp;&amp;this.setPane(e.paneName),e.updateHandler!==undefined&amp;&amp;this.setUpdateHandler(e.updateHandler),e.resizeHandler!==undefined&amp;&amp;this.setResizeHandler(e.resizeHandler),e.readyHandler&amp;&amp;(this.readyHandler=e.readyHandler)},r.prototype.setAnimate=function(e){this.isAnimated_=!!e,this.isAnimated_&amp;&amp;this.scheduleUpdate()},r.prototype.isAnimated=function(){return this.isAnimated_},r.prototype.setPaneName=function(e){this.paneName_=e,this.setPane_()},r.prototype.setOpacity=function(e){this.canvas.style.opacity=e},r.prototype.getOpacity=function(){return this.canvas.style.opacity},r.prototype.getPaneName=function(){return this.paneName_},r.prototype.setPane_=function(){if(!this.isAdded_)return;var e=this.getPanes();if(!e[this.paneName_])throw new Error(&#39;&quot;&#39;+this.paneName_+&#39;&quot; is not a valid MapPane name.&#39;);e[this.paneName_].appendChild(this.canvas)},r.prototype.setResizeHandler=function(e){this.resizeHandler_=e},r.prototype.setUpdateHandler=function(e){this.updateHandler_=e},r.prototype.onAdd=function(){if(this.isAdded_)return;this.isAdded_=!0,this.setPane_(),this.resizeListener_=google.maps.event.addListener(this.getMap(),&quot;resize&quot;,this.resizeFunction_),this.centerListener_=google.maps.event.addListener(this.getMap(),&quot;center_changed&quot;,this.repositionFunction_),this.resize_(),this.repositionCanvas_(),this.readyHandler&amp;&amp;this.readyHandler()},r.prototype.onRemove=function(){if(!this.isAdded_)return;this.isAdded_=!1,this.topLeft_=null,this.canvas.parentElement.removeChild(this.canvas),this.centerListener_&amp;&amp;(google.maps.event.removeListener(this.centerListener_),this.centerListener_=null),this.resizeListener_&amp;&amp;(google.maps.event.removeListener(this.resizeListener_),this.resizeListener_=null),this.requestAnimationFrameId_&amp;&amp;(this.cancelAnimFrame_.call(window,this.requestAnimationFrameId_),this.requestAnimationFrameId_=null)},r.prototype.resize_=function(){if(!this.isAdded_)return;var e=this.getMap(),t=e.getDiv().offsetWidth,n=e.getDiv().offsetHeight,r=this.canvas.width,i=this.canvas.height;if(r!==t||i!==n)this.canvas.width=t,this.canvas.height=n,this.canvas.style.width=t+&quot;px&quot;,this.canvas.style.height=n+&quot;px&quot;,this.needsResize_=!0,this.scheduleUpdate()},r.prototype.draw=function(){this.repositionCanvas_()},r.prototype.repositionCanvas_=function(){var e=this.getMap().getBounds();this.topLeft_=new google.maps.LatLng(e.getNorthEast().lat(),e.getSouthWest().lng());var t=this.getProjection(),n=t.fromLatLngToDivPixel(this.topLeft_),i=(1&lt;&lt;this.getMap().getZoom())*256;Math.abs(n.x)&gt;i&amp;&amp;(n.x-=i),this.canvas.style[r.CSS_TRANSFORM_]=&quot;translate(&quot;+Math.round(n.x)+&quot;px,&quot;+Math.round(n.y)+&quot;px)&quot;,this.scheduleUpdate()},r.prototype.update_=function(){this.requestAnimationFrameId_=null;if(!this.isAdded_)return;this.isAnimated_&amp;&amp;this.scheduleUpdate(),this.needsResize_&amp;&amp;this.resizeHandler_&amp;&amp;(this.needsResize_=!1,this.resizeHandler_()),this.updateHandler_&amp;&amp;this.updateHandler_()},r.prototype.getTopLeft=function(){return this.topLeft_},r.prototype.scheduleUpdate=function(){this.isAdded_&amp;&amp;!this.requestAnimationFrameId_&amp;&amp;(this.requestAnimationFrameId_=this.requestAnimFrame_.call(window,this.requestUpdateFunction_))},t.exports=r},{}],7:[function(e,t,n){function r(e,t){this.tileSize=new google.maps.Size(256,256),this.maxZoom=19,this.name=&quot;Tile #s&quot;,this.alt=&quot;Canvas tile layer&quot;,this.tiles={},this.canvas_setup=e,this.render=t,t||(this.render=e)}r.prototype.create_tile_canvas=function(e,t,n){var r=n.createElement(&quot;canvas&quot;),i=n.createElement(&quot;canvas&quot;);r.style.border=i.style.border=&quot;none&quot;,r.style.margin=i.style.margin=&quot;0&quot;,r.style.padding=i.style.padding=&quot;0&quot;;var s=r.getContext(&quot;2d&quot;);s.width=r.width=this.tileSize.width,s.height=r.height=this.tileSize.height;var o=i.getContext(&quot;2d&quot;);i.width=o.width=this.tileSize.width,i.height=o.height=this.tileSize.height;var u=e.x+&quot;_&quot;+e.y+&quot;_&quot;+t;return r.setAttribute(&quot;id&quot;,u),i.setAttribute(&quot;id&quot;,u),u in this.tiles&amp;&amp;delete this.tiles[u],this.tiles[u]={canvas:r,ctx:s,hit_canvas:i,hit_ctx:o,coord:e,zoom:t,primitives:null},this.canvas_setup&amp;&amp;this.canvas_setup(this.tiles[u],e,t),r},r.prototype.each=function(e){for(var t in this.tiles){var n=this.tiles[t];e(n)}},r.prototype.recreate=function(){for(var e in this.tiles){var t=this.tiles[e];this.canvas_setup(t,t.coord,t.zoom)}},r.prototype.redraw_tile=function(e){this.render(e,e.coord,e.zoom)},r.prototype.redraw=function(){for(var e in this.tiles){var t=this.tiles[e];this.render(t,t.coord,t.zoom)}},r.prototype.getTile=function(e,t,n){return this.create_tile_canvas(e,t,n)},r.prototype.releaseTile=function(e){var t=e.getAttribute(&quot;id&quot;);delete this.tiles[t]},t.exports=r},{}],8:[function(e,t,n){function r(){}r.prototype={_initTileLoader:function(e,t){this._map=e,this._projection=t,this._tiles={},this._tilesLoading={},this._tilesToLoad=0,this._updateTiles=this._updateTiles.bind(this),this._listeners=[],this._listeners.push(google.maps.event.addListener(this._map,&quot;dragend&quot;,this._updateTiles),google.maps.event.addListener(this._map,&quot;zoom_changed&quot;,this._updateTiles)),this.tileSize=256,this._updateTiles()},_removeTileLoader:function(){this._listeners.forEach(function(e){google.maps.event.removeListener(e)}),this._removeTiles()},_removeTiles:function(){for(var e in this._tiles)this._removeTile(e)},_reloadTiles:function(){this._removeTiles(),this._updateTiles()},_updateTiles:function(){if(!this._map)return;var e=this._map.getBounds(),t=this._map.getZoom(),n=this.tileSize,r=1&lt;&lt;t,i=new google.maps.LatLng(e.getNorthEast().lat(),e.getSouthWest().lng()),s=new google.maps.LatLng(e.getSouthWest().lat(),e.getNorthEast().lng());this._projection=this._map.getProjection();var o=this._projection.fromLatLngToPoint(i),u=this._projection.fromLatLngToPoint(s),a=new google.maps.Point(Math.floor(o.x*r/n),Math.floor(o.y*r/n)),f=new google.maps.Point(Math.floor(u.x*r/n),Math.floor(u.y*r/n));this._addTilesFromCenterOut(a,f),this._removeOtherTiles(a,f)},_removeOtherTiles:function(e,t){var n,r,i,s,o=this._map.getZoom();for(s in this._tiles)this._tiles.hasOwnProperty(s)&amp;&amp;(n=s.split(&quot;:&quot;),r=parseInt(n[0],10),i=parseInt(n[1],10),z=parseInt(n[2],10),(z!==o||r&lt;e.x||r&gt;t.x||i&lt;e.y||i&gt;t.y)&amp;&amp;this._removeTile(s))},_removeTile:function(e){this.onTileRemoved&amp;&amp;this.onTileRemoved(this._tiles[e]),delete this._tiles[e],delete this._tilesLoading[e]},_tileKey:function(e){return e.x+&quot;:&quot;+e.y+&quot;:&quot;+e.zoom},_tileShouldBeLoaded:function(e){var t=this._tileKey(e);return!(t in this._tiles)&amp;&amp;!(t in this._tilesLoading)},_tileLoaded:function(e,t){this._tilesToLoad--;var n=e.x+&quot;:&quot;+e.y+&quot;:&quot;+e.zoom;this._tiles[n]=t,delete this._tilesLoading[n],this._tilesToLoad===0&amp;&amp;this.onTilesLoaded&amp;&amp;this.onTilesLoaded()},getTilePos:function(e){var t=1&lt;&lt;this._map.getZoom();e={x:(e.x%t+t)%t,y:e.y},e=new google.maps.Point(e.x*this.tileSize,e.y*this.tileSize);var n=this._map.getBounds(),r=new google.maps.LatLng(n.getNorthEast().lat(),n.getSouthWest().lng()),i=this._map.getProjection().fromLatLngToPoint(r);return zoom=1&lt;&lt;this._map.getZoom(),i.x=i.x*zoom,i.y=i.y*zoom,new google.maps.Point(e.x-i.x,e.y-i.y)},_addTilesFromCenterOut:function(e,t){function f(e){var t=e.x-r.x,n=e.y-r.y;return t*t+n*n}var n=[],r=new google.maps.Point((e.x+t.x)*.5,(e.y+t.y)*.5),i=this._map.getZoom(),s,o,u;for(s=e.y;s&lt;=t.y;s++)for(o=e.x;o&lt;=t.x;o++)u=new google.maps.Point(o,s),u.zoom=i,this._tileShouldBeLoaded(u)&amp;&amp;n.push(u);var a=n.length;if(a===0)return;n.sort(function(e,t){return f(e)-f(t)}),this._tilesToLoad+=a;for(o=0;o&lt;a;o++){var l=n[o],c=this._tileKey(l);this._tilesLoading[c]=l,this.onTileAdded&amp;&amp;this.onTileAdded(l)}this.onTilesLoading&amp;&amp;this.onTilesLoading()}},t.exports=r},{}],9:[function(e,t,n){var r={};typeof google!=&quot;undefined&quot;&amp;&amp;typeof google.maps!=&quot;undefined&quot;&amp;&amp;(r=e(&quot;./torque&quot;),r.GMapsTileLoader=e(&quot;./gmaps_tileloader_mixin&quot;)),t.exports=r},{&quot;./gmaps_tileloader_mixin&quot;:8,&quot;./torque&quot;:10}],10:[function(e,t,n){(function(n){function a(e){var t=this;if(!i.isBrowserSupported())throw new Error(&quot;browser is not supported by torque&quot;);this.keys=[0],Object.defineProperty(this,&quot;key&quot;,{get:function(){return this.getKey()}}),this.shader=null,this.ready=!1,this.options=i.extend({},e),this.options=i.extend({provider:&quot;windshaft&quot;,renderer:&quot;point&quot;,resolution:2,steps:100,visible:!0},this.options),e.cartocss&amp;&amp;i.extend(this.options,i.common.TorqueLayer.optionsFromCartoCSS(e.cartocss)),e.tileJSON&amp;&amp;(this.options.provider=&quot;tileJSON&quot;),this.hidden=!this.options.visible,this.animator=new i.Animator(function(e){var n=e|0;t.getKey()!==n&amp;&amp;t.setKey(n)},i.extend(i.clone(this.options),{onPause:function(){t.fire(&quot;pause&quot;)},onStop:function(){t.fire(&quot;stop&quot;)},onStart:function(){t.fire(&quot;play&quot;)},onStepsRange:function(){t.fire(&quot;change:stepsRange&quot;,t.animator.stepsRange())}})),this.play=this.animator.start.bind(this.animator),this.stop=this.animator.stop.bind(this.animator),this.pause=this.animator.pause.bind(this.animator),this.toggle=this.animator.toggle.bind(this.animator),this.setDuration=this.animator.duration.bind(this.animator),this.isRunning=this.animator.isRunning.bind(this.animator),s.call(this,{map:this.options.map,animate:!1,updateHandler:this.render,readyHandler:this.initialize})}function f(e){this.options=i.extend({},e),o.call(this,this._loadTile.bind(this),this.drawTile.bind(this)),this.initialize(e)}var r=n.carto||e(&quot;carto&quot;),i=e(&quot;../&quot;),s=e(&quot;./CanvasLayer&quot;),o=e(&quot;./canvas_tile_layer&quot;),u=e(&quot;./gmaps_tileloader_mixin&quot;);a.prototype=i.extend({},s.prototype,u.prototype,i.Event,{providers:{sql_api:i.providers.json,url_template:i.providers.JsonArray,windshaft:i.providers.windshaft,tileJSON:i.providers.tileJSON},renderers:{point:i.renderer.Point,pixel:i.renderer.Rectangle},initialize:function(){var e=this;this.onTileAdded=this.onTileAdded.bind(this),this.options.ready=function(){e.fire(&quot;change:bounds&quot;,{bounds:e.provider.getBounds()}),e.animator.steps(e.provider.getSteps()),e.animator.rescale(),e.fire(&quot;change:steps&quot;,{steps:e.provider.getSteps()}),e.setKey(e.getKey())},this.provider=new this.providers[this.options.provider](this.options),this.renderer=new this.renderers[this.options.renderer](this.getCanvas(),this.options),this.renderer.options.errorCallback=this.options.errorCallback,this._cacheListener=google.maps.event.addListener(this.options.map,&quot;zoom_changed&quot;,function(){e.renderer&amp;&amp;e.renderer.clearSpriteCache()}),this._initTileLoader(this.options.map,this.getProjection()),this.shader&amp;&amp;this.renderer.setShader(this.shader)},hide:function(){return this.hidden?this:(this.pause(),this.clear(),this.hidden=!0,this)},show:function(){return this.hidden?(this.hidden=!1,this.play(),this.options.steps===1&amp;&amp;this.redraw(),this):this},setSQL:function(e){if(this.provider.options.named_map)throw new Error(&quot;SQL queries on named maps are read-only&quot;);if(!this.provider||!this.provider.setSQL)throw new Error(&quot;this provider does not support SQL&quot;);return this.provider.setSQL(e),this._reloadTiles(),this},setBlendMode:function(e){this.renderer&amp;&amp;this.renderer.setBlendMode(e),this.redraw()},setSteps:function(e){this.provider&amp;&amp;this.provider.setSteps(e),this.animator&amp;&amp;this.animator.steps(e),this._reloadTiles()},setColumn:function(e,t){this.provider&amp;&amp;this.provider.setColumn(e,t),this._reloadTiles()},getTimeBounds:function(){return this.provider&amp;&amp;this.provider.getKeySpan()},getCanvas:function(){return this.canvas},onTileAdded:function(e){var t=this;this.provider.getTileData(e,e.zoom,function(n){if(e.zoom!==t.options.map.getZoom())return;t._tileLoaded(e,n),t.fire(&quot;tileLoaded&quot;),n&amp;&amp;t.redraw()})},clear:function(){var e=this.canvas;e.width=e.width},render:function(){if(this.hidden)return;var e,t,n,r=this.canvas;this.renderer.clearCanvas();var i=r.getContext(&quot;2d&quot;);for(e in this._tiles)t=this._tiles[e],t&amp;&amp;(n=this.getTilePos(t.coord),i.setTransform(1,0,0,1,n.x,n.y),this.renderer.renderTile(t,this.keys));this.renderer.applyFilters()},getActivePointsBBox:function(e){var t=[],n=this.options.resolution*(256/this.options.resolution-1);for(var r in this._tiles){var i=this._tiles[r];t=t.concat(this.renderer.getActivePointsBBox(i,e))}return t},setKey:function(e){this.setKeys([e])},setKeys:function(e){this.keys=e,this.animator.step(this.getKey()),this.redraw(),this.fire(&quot;change:time&quot;,{time:this.getTime(),step:this.getKey()})},getKey:function(){return this.keys[0]},setStep:function(e){if(e===undefined||e.length!==undefined)throw new Error(&quot;setTime only accept scalars&quot;);this.setKey(e)},renderRange:function(e,t){this.pause();var n=[];for(var r=e;r&lt;=t;r++)n.push(r);this.setKeys(n)},resetRenderRange:function(){this.stop(),this.play()},stepToTime:function(e){if(!this.provider)return 0;var t=this.provider.getKeySpan(),n=t.start+(t.end-t.start)*(e/this.provider.getSteps());return new Date(n)},timeToStep:function(e){typeof e==&quot;Date&quot;&amp;&amp;(e=e.getTime());if(!this.provider)return 0;var t=this.provider.getKeySpan(),n=this.provider.getSteps()*(e-t.start)/(t.end-t.start);return n},getStep:function(){return this.getKey()},getTime:function(){return this.stepToTime(this.getKey())},setCartoCSS:function(e){if(this.provider&amp;&amp;this.provider.options.named_map)throw new Error(&quot;CartoCSS style on named maps is read-only&quot;);var t=(new r.RendererJS).render(e);this.shader=t,this.renderer&amp;&amp;this.renderer.setShader(t);var n=i.common.TorqueLayer.optionsFromLayer(t.findLayer({name:&quot;Map&quot;}));return this.provider&amp;&amp;this.provider.setCartoCSS&amp;&amp;this.provider.setCartoCSS(e),this.provider&amp;&amp;this.provider.setOptions(n)&amp;&amp;this._reloadTiles(),i.extend(this.options,n),n.animationDuration&amp;&amp;this.animator.duration(n.animationDuration),this.redraw(),this},redraw:function(){this.scheduleUpdate()},onRemove:function(){this.fire(&quot;remove&quot;),s.prototype.onRemove.call(this),this.animator.stop(),this._removeTileLoader(),google.maps.event.removeListener(this._cacheListener)},getValues:function(e){var t=[];e=e===undefined?this.getKey():e;var n,r;for(n in this._tiles)r=this._tiles[n],this.renderer.getValues(r,e,t);return t},getValueForPos:function(e,t,n){n=n===undefined?this.getKey():n;var r,i,s,o=null,u,a;for(r in this._tiles){i=this._tiles[r],s=this.getTilePos(i.coord),u=e-s.x,a=t-s.y,u&gt;=0&amp;&amp;a&gt;=0&amp;&amp;u&lt;this.renderer.TILE_SIZE&amp;&amp;a&lt;=this.renderer.TILE_SIZE&amp;&amp;(o=this.renderer.getValueFor(i,n,u,a));if(o!==null)return o}return null},getValueForBBox:function(e,t,n,r){var i=e+n,s=t+r,o=0;for(_y=t;t&lt;s;t+=this.options.resolution)for(_x=e;e&lt;i;e+=this.options.resolution){var u=this.getValueForPos(_x,_y);if(u){var a=u.bbox,f=this.getProjection(),l=f.fromLatLngToContainerPixel(new google.maps.LatLng(a[1].lat,a[1].lon));l.x&lt;i&amp;&amp;l.y&lt;s&amp;&amp;(o+=u.value)}}return o},error:function(e){return this.options.errorCallback=e,this}}),f.prototype=i.extend({},o.prototype,{providers:{sql_api:i.providers.json,url_template:i.providers.JsonArray},renderers:{point:i.renderer.Point,pixel:i.renderer.Rectangle},initialize:function(e){var t=this;this.keys=[0],this.options.renderer=this.options.renderer||&quot;pixel&quot;,this.options.provider=this.options.provider||&quot;sql_api&quot;,this.provider=new this.providers[this.options.provider](e),this.renderer=new this.renderers[this.options.renderer](null,e)},_tileLoaded:function(e,t){e.data=t,this.drawTile(e)},_loadTile:function(e,t,n){var r=this,i=1&lt;&lt;n,s={x:(t.x%i+i)%i,y:t.y};this.provider.getTileData(s,n,function(t){r._tileLoaded(e,t)})},drawTile:function(e){var t=e.canvas;if(!e.data)return;t.width=t.width,this.renderer.setCanvas(t);var n=this.renderer.accumulate(e.data,this</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">.getKey());this.renderer.renderTileAccum(n,0,0)},setKey:function(e){this.keys=[e],this.redraw()},setCartoCSS:function(e){if(!this.renderer)throw new Error(&quot;renderer is not valid&quot;);return this.renderer.setCartoCSS(e)},setStepsRange:function(e,t){this.animator.stepsRange(e,t)},removeStepsRange:function(){this.animator.removeCustomStepsRange()},getStepsRange:function(){return this.animator.stepsRange()}}),t.exports={GMapsTiledTorqueLayer:f,GMapsTorqueLayer:a}}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{&quot;../&quot;:11,&quot;./CanvasLayer&quot;:6,&quot;./canvas_tile_layer&quot;:7,&quot;./gmaps_tileloader_mixin&quot;:8,carto:undefined}],11:[function(e,t,n){t.exports=e(&quot;./core&quot;),t.exports.Animator=e(&quot;./animator&quot;),t.exports.cartocss_reference=e(&quot;./cartocss_reference&quot;),t.exports.common=e(&quot;./common&quot;),t.exports.math=e(&quot;./math&quot;),t.exports.Mercator=e(&quot;./mercator&quot;),t.exports.net=e(&quot;./request&quot;),t.exports.renderer=e(&quot;./renderer&quot;),t.exports.providers=e(&quot;./provider&quot;),e(&quot;./leaflet&quot;);var r=e(&quot;./gmaps&quot;);t.exports.GMapsTileLoader=r.GMapsTileLoader,t.exports.GMapsTorqueLayer=r.GMapsTorqueLayer,t.exports.GMapsTiledTorqueLayer=r.GMapsTiledTorqueLayer},{&quot;./animator&quot;:2,&quot;./cartocss_reference&quot;:3,&quot;./common&quot;:4,&quot;./core&quot;:5,&quot;./gmaps&quot;:9,&quot;./leaflet&quot;:13,&quot;./math&quot;:16,&quot;./mercator&quot;:17,&quot;./provider&quot;:19,&quot;./renderer&quot;:25,&quot;./request&quot;:29}],12:[function(e,t,n){e(&quot;./leaflet_tileloader_mixin&quot;),L.CanvasLayer=L.Class.extend({includes:[L.Mixin.Events,L.Mixin.TileLoader],options:{minZoom:0,maxZoom:28,tileSize:256,subdomains:&quot;abc&quot;,errorTileUrl:&quot;&quot;,attribution:&quot;&quot;,zoomOffset:0,opacity:1,unloadInvisibleTiles:L.Browser.mobile,updateWhenIdle:L.Browser.mobile,tileLoader:!1,zoomAnimation:!0},initialize:function(e){var t=this;e=e||{},this.render=this.render.bind(this),L.Util.setOptions(this,e),this._canvas=this._createCanvas(),this.options.zoomAnimation&amp;&amp;(this._backCanvas=this._createCanvas()),this._ctx=this._canvas.getContext(&quot;2d&quot;),this.currentAnimationFrame=-1,this.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},this.cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e)}},_createCanvas:function(){var e;e=document.createElement(&quot;canvas&quot;),e.style.position=&quot;absolute&quot;,e.style.top=0,e.style.left=0,e.style.pointerEvents=&quot;none&quot;,e.style.zIndex=this.options.zIndex||0;var t=&quot;leaflet-tile-container&quot;;return this.options.zoomAnimation&amp;&amp;(t+=&quot; leaflet-zoom-animated&quot;),e.setAttribute(&quot;class&quot;,t),e},onAdd:function(e){this._map=e;var t=this._map._panes.tilePane,n=L.DomUtil.create(&quot;div&quot;,&quot;leaflet-layer&quot;);n.appendChild(this._canvas),this.options.zoomAnimation&amp;&amp;(n.appendChild(this._backCanvas),this._backCanvas.style.display=&quot;none&quot;),t.appendChild(n),this._container=n,e.dragging._draggable.on(&quot;predrag&quot;,function(){var t=e.dragging._draggable;L.DomUtil.setPosition(this._canvas,{x:-t._newPos.x,y:-t._newPos.y})},this),e.on({viewreset:this._reset},this),e.on(&quot;move&quot;,this.redraw,this),e.on(&quot;resize&quot;,this._reset,this),this.options.zoomAnimation&amp;&amp;e.on({zoomanim:this._animateZoom,zoomend:this._endZoomAnim,moveend:this._reset},this),this.options.tileLoader&amp;&amp;this._initTileLoader(),this._reset()},_animateZoom:function(e){this._animating||(this._animating=!0);var t=this._backCanvas;t.width=this._canvas.width,t.height=this._canvas.height;var n=this._canvas._leaflet_pos||{x:0,y:0};t.getContext(&quot;2d&quot;).drawImage(this._canvas,0,0),L.DomUtil.setPosition(t,L.DomUtil.getPosition(this._canvas)),this._canvas.style.display=&quot;none&quot;,t.style.display=&quot;block&quot;;var r=this._map,i=r.getZoomScale(e.zoom),s=r._latLngToNewLayerPoint(r.getCenter(),e.zoom,e.center),o=r._latLngToNewLayerPoint(e.center,e.zoom,e.center),u={x:s.x-o.x+n.x,y:s.y-o.y+n.y},a=t,f=L.DomUtil.TRANSFORM;setTimeout(function(){a.style[f]=L.DomUtil.getTranslateString(u)+&quot; scale(&quot;+e.scale+&quot;) &quot;},0)},_endZoomAnim:function(){this._animating=!1,this._canvas.style.display=&quot;block&quot;,this._backCanvas.style.display=&quot;none&quot;,this._backCanvas.style[L.DomUtil.TRANSFORM]=&quot;&quot;},getCanvas:function(){return this._canvas},getAttribution:function(){return this.options.attribution},draw:function(){return this._reset()},onRemove:function(e){this._container.parentNode.removeChild(this._container),e.off({viewreset:this._reset,move:this._render,moveend:this._reset,resize:this._reset,zoomanim:this._animateZoom,zoomend:this._endZoomAnim},this)},addTo:function(e){return e.addLayer(this),this},error:function(e){return this.provider.options.errorCallback=e,this},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},setZIndex:function(e){this._canvas.style.zIndex=e,this.options.zoomAnimation&amp;&amp;(this._backCanvas.style.zIndex=e)},bringToFront:function(){return this},bringToBack:function(){return this},_reset:function(){var e=this._map.getSize();this._canvas.width=e.x,this._canvas.height=e.y;var t=L.DomUtil.getPosition(this._map.getPanes().mapPane);t&amp;&amp;L.DomUtil.setPosition(this._canvas,{x:-t.x,y:-t.y}),this.onResize(),this._render()},_updateOpacity:function(){},_render:function(){this.currentAnimationFrame&gt;=0&amp;&amp;this.cancelAnimationFrame.call(window,this.currentAnimationFrame),this.currentAnimationFrame=this.requestAnimationFrame.call(window,this.render)},redraw:function(e){var t=L.DomUtil.getPosition(this._map.getPanes().mapPane);t&amp;&amp;L.DomUtil.setPosition(this._canvas,{x:-t.x,y:-t.y}),e?this.render():this._render()},onResize:function(){},render:function(){throw new Error(&quot;render function should be implemented&quot;)}})},{&quot;./leaflet_tileloader_mixin&quot;:14}],13:[function(e,t,n){typeof L!=&quot;undefined&quot;&amp;&amp;e(&quot;./torque&quot;)},{&quot;./torque&quot;:15}],14:[function(e,t,n){L.Mixin.TileLoader={_initTileLoader:function(){this._tiles={},this._tilesLoading={},this._tilesToLoad=0,this._map.on({moveend:this._updateTiles},this),this._updateTiles()},_removeTileLoader:function(){this._map.off({moveend:this._updateTiles},this),this._removeTiles()},_updateTiles:function(){if(!this._map)return;var e=this._map.getPixelBounds(),t=this._map.getZoom(),n=this.options.tileSize;if(t&gt;this.options.maxZoom||t&lt;this.options.minZoom)return;var r=new L.Point(Math.floor(e.min.x/n),Math.floor(e.min.y/n)),i=new L.Point(Math.floor(e.max.x/n),Math.floor(e.max.y/n)),s=new L.Bounds(r,i);this._addTilesFromCenterOut(s),this._removeOtherTiles(s)},_removeTiles:function(e){for(var t in this._tiles)this._removeTile(t)},_reloadTiles:function(){this._removeTiles(),this._updateTiles()},_removeOtherTiles:function(e){var t,n,r,i,s,o=this._map.getZoom();for(s in this._tiles)this._tiles.hasOwnProperty(s)&amp;&amp;(t=s.split(&quot;:&quot;),n=parseInt(t[0],10),r=parseInt(t[1],10),i=parseInt(t[2],10),(o!==i||n&lt;e.min.x||n&gt;e.max.x||r&lt;e.min.y||r&gt;e.max.y)&amp;&amp;this._removeTile(s))},_removeTile:function(e){this.fire(&quot;tileRemoved&quot;,this._tiles[e]),delete this._tiles[e],delete this._tilesLoading[e]},_tileKey:function(e){return e.x+&quot;:&quot;+e.y+&quot;:&quot;+e.zoom},_tileShouldBeLoaded:function(e){var t=this._tileKey(e);return!(t in this._tiles)&amp;&amp;!(t in this._tilesLoading)},_tileLoaded:function(e,t){this._tilesToLoad--;var n=e.x+&quot;:&quot;+e.y+&quot;:&quot;+e.zoom;this._tiles[n]=t,delete this._tilesLoading[n],this._tilesToLoad===0&amp;&amp;this.fire(&quot;tilesLoaded&quot;)},getTilePos:function(e){e=new L.Point(e.x,e.y);var t=this._map._getNewTopLeftPoint(this._map.getCenter()),n=this.options.tileSize;return e.multiplyBy(n).subtract(t)},_addTilesFromCenterOut:function(e){var t=[],n=e.getCenter(),r=this._map.getZoom(),i,s,o;for(i=e.min.y;i&lt;=e.max.y;i++)for(s=e.min.x;s&lt;=e.max.x;s++)o=new L.Point(s,i),o.zoom=r,this._tileShouldBeLoaded(o)&amp;&amp;t.push(o);var u=t.length;if(u===0)return;t.sort(function(e,t){return e.distanceTo(n)-t.distanceTo(n)}),this._tilesToLoad+=u;for(s=0;s&lt;u;s++){var a=t[s],f=this._tileKey(a);this._tilesLoading[f]=a,this.fire(&quot;tileAdded&quot;,a)}this.fire(&quot;tilesLoading&quot;)}}},{}],15:[function(e,t,n){(function(t){var n=t.carto||e(&quot;carto&quot;),r=e(&quot;../&quot;);e(&quot;./canvas_layer&quot;),L.TorqueLayer=L.CanvasLayer.extend({providers:{sql_api:r.providers.json,url_template:r.providers.JsonArray,windshaft:r.providers.windshaft,tileJSON:r.providers.tileJSON},renderers:{point:r.renderer.Point,pixel:r.renderer.Rectangle},initialize:function(e){var t=this;if(!r.isBrowserSupported())throw new Error(&quot;browser is not supported by torque&quot;);e.tileLoader=!0,this.keys=[0],Object.defineProperty(this,&quot;key&quot;,{get:function(){return this.getKey()}}),this.prevRenderedKey=0,e.cartocss&amp;&amp;r.extend(e,r.common.TorqueLayer.optionsFromCartoCSS(e.cartocss)),e.resolution=e.resolution||2,e.steps=e.steps||100,e.visible=e.visible===undefined?!0:e.visible,this.hidden=!e.visible,this.animator=new r.Animator(function(e){var n=e|0;t.getKey()!==n&amp;&amp;t.setKey(n,{direct:!0})},r.extend(r.clone(e),{onPause:function(){t.fire(&quot;pause&quot;)},onStop:function(){t.fire(&quot;stop&quot;)},onStart:function(){t.fire(&quot;play&quot;)},onStepsRange:function(){t.fire(&quot;change:stepsRange&quot;,t.animator.stepsRange())}})),this.play=this.animator.start.bind(this.animator),this.stop=this.animator.stop.bind(this.animator),this.pause=this.animator.pause.bind(this.animator),this.toggle=this.animator.toggle.bind(this.animator),this.setDuration=this.animator.duration.bind(this.animator),this.isRunning=this.animator.isRunning.bind(this.animator),L.CanvasLayer.prototype.initialize.call(this,e),this.options.renderer=this.options.renderer||&quot;point&quot;,this.options.provider=this.options.provider||&quot;windshaft&quot;,this.options.tileJSON&amp;&amp;(this.options.provider=&quot;tileJSON&quot;),this.provider=new this.providers[this.options.provider](e),this.renderer=new this.renderers[this.options.renderer](this.getCanvas(),e),e.ready=function(){t.fire(&quot;change:bounds&quot;,{bounds:t.provider.getBounds()}),t.animator.steps(t.provider.getSteps()),t.animator.rescale(),t.fire(&quot;change:steps&quot;,{steps:t.provider.getSteps()}),t.setKey(t.getKey())},this.renderer.on(&quot;allIconsLoaded&quot;,this.render.bind(this)),this.on(&quot;tileAdded&quot;,function(e){var n=this.provider.getTileData(e,e.zoom,function(n){if(e.zoom!==t._map.getZoom())return;t._tileLoaded(e,n),t._clearTileCaches(),n&amp;&amp;t.redraw(),t.fire(&quot;tileLoaded&quot;)})},this)},_clearTileCaches:function(){var e,t;for(e in this._tiles)t=this._tiles[e],t&amp;&amp;t._tileCache&amp;&amp;(t._tileCache=null)},_clearCaches:function(){this.renderer&amp;&amp;this.renderer.clearSpriteCache(),this._clearTileCaches()},onAdd:function(e){e.on({zoomend:this._clearCaches,zoomstart:this._pauseOnZoom},this),e.on({zoomend:this._resumeOnZoom},this),L.CanvasLayer.prototype.onAdd.call(this,e)},onRemove:function(e){this.fire(&quot;remove&quot;),this._removeTileLoader(),e.off({zoomend:this._clearCaches,zoomstart:this._pauseOnZoom},this),e.off({zoomend:this._resumeOnZoom},this),L.CanvasLayer.prototype.onRemove.call(this,e)},_pauseOnZoom:function(){this.wasRunning=this.isRunning(),this.wasRunning&amp;&amp;this.pause()},_resumeOnZoom:function(){this.wasRunning&amp;&amp;this.play()},hide:function(){return this.hidden?this:(this.pause(),this.clear(),this.hidden=!0,this)},show:function(){return this.hidden?(this.hidden=!1,this.play(),this.options.steps===1&amp;&amp;this.redraw(),this):this},setSQL:function(e){if(this.provider.options.named_map)throw new Error(&quot;SQL queries on named maps are read-only&quot;);if(!this.provider||!this.provider.setSQL)throw new Error(&quot;this provider does not support SQL&quot;);return this.provider.setSQL(e),this._reloadTiles(),this},setBlendMode:function(e){this.renderer.setBlendMode(e),this.redraw()},setSteps:function(e){this.provider.setSteps(e),this._reloadTiles()},setColumn:function(e,t){this.provider.setColumn(e,t),this._reloadTiles()},getTimeBounds:function(){return this.provider&amp;&amp;this.provider.getKeySpan()},clear:function(){var e=this.getCanvas();e.width=e.width},render:function(){if(this.hidden)return;var e,t,n,r=this.getCanvas();this.renderer.clearCanvas();var i=r.getContext(&quot;2d&quot;);for(e in this._tiles)t=this._tiles[e],t&amp;&amp;(this.animator.isRunning()&amp;&amp;(t._tileCache=null),n=this.getTilePos(t.coord),i.setTransform(1,0,0,1,n.x,n.y),t._tileCache?this.renderer._ctx.drawImage(t._tileCache,0,0):this.renderer.renderTile(t,this.keys));this.renderer.applyFilters();if(!this.animator.isRunning()&amp;&amp;this.getKey()===this.prevRenderedKey){var s=this.renderer.TILE_SIZE;for(e in this._tiles){t=this._tiles[e];if(t&amp;&amp;!t._tileCache){var o=t._tileCache=document.createElement(&quot;canvas&quot;);o.width=o.height=s,n=this.getTilePos(t.coord);var u=Math.max(0,n.x),a=Math.max(0,n.y),f=Math.min(s,this.getCanvas().width-u),l=Math.min(s,this.getCanvas().height-a);f&gt;0&amp;&amp;l&gt;0&amp;&amp;o.getContext(&quot;2d&quot;).drawImage(this.getCanvas(),u,a,f,l,u-n.x,a-n.y,f,l)}}}this.prevRenderedKey=this.getKey()},setKey:function(e,t){this.setKeys([e],t)},setKeys:function(e,t){this.keys=e,this.animator.step(this.getKey()),this._clearTileCaches(),this.redraw(t&amp;&amp;t.direct),this.fire(&quot;change:time&quot;,{time:this.getTime(),step:this.getKey(),start:this.getKey(),end:this.getLastKey()})},getKey:function(){return this.keys[0]},getLastKey:function(){return this.keys[this.keys.length-1]},setStep:function(e){if(e===undefined||e.length!==undefined)throw new Error(&quot;setTime only accept scalars&quot;);this.setKey(e)},renderRange:function(e,t){this.pause();var n=[];for(var r=e;r&lt;=t;r++)n.push(r);this.setKeys(n)},resetRenderRange:function(){this.stop(),this.play()},stepToTime:function(e){var t=this.provider.getKeySpan(),n=t.start+(t.end-t.start)*(e/this.provider.getSteps());return new Date(n)},timeToStep:function(e){typeof e==&quot;Date&quot;&amp;&amp;(e=e.getTime());if(!this.provider)return 0;var t=this.provider.getKeySpan(),n=this.provider.getSteps()*(e-t.start)/(t.end-t.start);return n},getStep:function(){return this.getKey()},getTime:function(){return this.stepToTime(this.getKey())},getTimeSpan:function(){return this.provider.getKeySpan()},setCartoCSS:function(e){if(this.provider.options.named_map)throw new Error(&quot;CartoCSS style on named maps is read-only&quot;);if(!this.renderer)throw new Error(&quot;renderer is not valid&quot;);var t=(new n.RendererJS).render(e);this.renderer.setShader(t);var i=r.common.TorqueLayer.optionsFromLayer(t.findLayer({name:&quot;Map&quot;}));return this.provider.setCartoCSS&amp;&amp;this.provider.setCartoCSS(e),this.provider.setOptions(i)&amp;&amp;this._reloadTiles(),r.extend(this.options,i),i.animationDuration&amp;&amp;this.animator.duration(i.animationDuration),this._clearCaches(),this.redraw(),this},getActivePointsBBox:function(e){var t=[];for(var n in this._tiles){var r=this._tiles[n];t=t.concat(this.renderer.getActivePointsBBox(r,e))}return t},getValues:function(e){var t=[];e=e===undefined?this.getKey():e;var n,r;for(n in this._tiles)r=this._tiles[n],this.renderer.getValues(r,e,t);return t},getValueForPos:function(e,t,n){n=n===undefined?this.getKey():n;var r,i,s,o=null,u,a;for(r in this._tiles){i=this._tiles[r],s=this.getTilePos(i.coord),u=e-s.x,a=t-s.y,u&gt;=0&amp;&amp;a&gt;=0&amp;&amp;u&lt;this.renderer.TILE_SIZE&amp;&amp;a&lt;=this.renderer.TILE_SIZE&amp;&amp;(o=this.renderer.getValueFor(i,n,u,a));if(o!==null)return o}return null},getValueForBBox:function(e,t,n,r){var i=e+n,s=t+r,o=e,u=0;for(_y=t;_y&lt;s;_y+=this.options.resolution)for(o=e;o&lt;i;o+=this.options.resolution){var a=this.getValueForPos(o,_y);if(a){var f=a.bbox,l=this._map.latLngToContainerPoint([f[1].lat,f[1].lon]);l.x&lt;i&amp;&amp;l.y&lt;s&amp;&amp;(u+=a.value)}}return u},invalidate:function(){this.provider.reload()},setStepsRange:function(e,t){this.animator.stepsRange(e,t)},removeStepsRange:function(){this.animator.removeCustomStepsRange()},getStepsRange:function(){return this.animator.stepsRange()}})}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{&quot;../&quot;:11,&quot;./canvas_layer&quot;:12,carto:undefined}],16:[function(e,t,n){function r(e,t){return function(n){return Math.max(Math.min(n,t),e)}}function i(e,t){var n=r(0,1);return function(r){return n((r-e)/(t-e))}}function s(e,t){function s(r){return n(e*(1-r)+r*t)}var n=r(e,t);return s.invert=function(){return i(e,t)},s}t.exports={clamp:r,linear:s,invLinear:i}},{}],17:[function(e,t,n){function i(e,t,n){return t!==null&amp;&amp;(e=Math.max(e,t)),n!==null&amp;&amp;(e=Math.min(e,n)),e}function s(e){return e*(Math.PI/180)}function o(e){return e/(Math.PI/180)}var r=function(e,t){this.x=e||0,this.y=t||0},u=function(){this._tileSize=256,this._pixelOrigin=new r(this._tileSize/2,this._tileSize/2),this._pixelsPerLonDegree=this._tileSize/360,this._pixelsPerLonRadian=this._tileSize/(2*Math.PI)};u.prototype._fromLatLonToPoint=function(e,t){var n=new r(0,0),o=this._pixelOrigin;n.x=o.x+t*this._pixelsPerLonDegree;var u=i(Math.sin(s(e)),-0.9999,.9999);return n.y=o.y+.5*Math.log((1+u)/(1-u))*-this._pixelsPerLonRadian,n},u.prototype._fromPointToLatLon=function(e){var t=this,n=t._pixelOrigin,r=(e.x-n.x)/t._pixelsPerLonDegree,i=(e.y-n.y)/-t._pixelsPerLonRadian,s=o(2*Math.atan(Math.exp(i))-Math.PI/2);return{lat:s,lon:r}},u.prototype._tilePixelPos=function(e,t){return{x:e*this._tileSize,y:t*this._tileSize}},u.prototype.tilePixelBBox=function(e,t,n,i,s,o){o=o||1;var u=1&lt;&lt;n,a=o/u;return i=(e*this._tileSize+i)/u,s=(t*this._tileSize+s)/u,[this._fromPointToLatLon(new r(i,s+a)),this._fromPointToLatLon(new r(i+a,s))]},u.prototype.tileBBox=function(e,t,n,i){var s=1&lt;&lt;n;i=i||0;var o=(this._tileSize+i*2)/s,u=(e*this._tileSize-i)/s,a=(t*this._tileSize-i)/s;return[this._fromPointToLatLon(new r(u,a+o)),this._fromPointToLatLon(new r(u+o,a))]},u.prototype.latLonToTilePoint=function(e,t,n,i,s){var o=1&lt;&lt;s,u=this._fromLatLonToPoint(e,t),a=new r(u.x*o,u.y*o),f=this._tilePixelPos(n,i);return new r(Math.round(a.x-f.x),Math.round(a.y-f.y))},t.exports=u},{}],18:[function(e,t,n){function i(){}function s(e){this.t0=null,this.name=e,this.count=0}var r=1024;i.metrics={},i.get=function(e){return i.metrics[e]||{max:0,min:Number.MAX_VALUE,avg:0,total:0,count:0,history:typeof Float32Array!=&quot;undefined&quot;?new Float32Array(r):[]}},i.new_value=function(e,t){var n=i.metrics[e]=i.get(e);n.max=Math.max(n.max,t),n.min=Math.min(n.min,t),n.total+=t,++n.count,n.avg=n.total/n.count,n.history[n.count%r]=t},i.print_stats=function(){for(k in i.metrics){var e=i.metrics[k];console.log(&quot; === &quot;+k+&quot; === &quot;),console.log(&quot; max: &quot;+e.max),console.log(&quot; min: &quot;+e.min),console.log(&quot; avg: &quot;+e.avg),console.log(&quot; count: &quot;+e.count),console.log(&quot; total: &quot;+e.total)}},s.prototype={start:function(){return this.t0=+(new Date),this},_elapsed:function(){return+(new Date)-this.t0},end:function(){this.t0!==null&amp;&amp;(i.new_value(this.name,this._elapsed()),this.t0=null)},inc:function(e){e=e===undefined?1:e,i.new_value(this.name,i.get(this.name).count+(e?e:0))},dec:function(e){e=e===undefined?1:e,this.inc(-e)},mark:function(){++this.count;if(this.t0===null){this.start();return}var e=this._elapsed();e&gt;1&amp;&amp;(i.new_value(this.name,this.count),this.count=0,this.start())}},i.metric=function(e){return new s(e)},t.exports=i},{}],19:[function(e,t,n){t.exports={json:e(&quot;./json&quot;),JsonArray:e(&quot;./jsonarray&quot;),windshaft:e(&quot;./windshaft&quot;),tileJSON:e(&quot;./tilejson&quot;)}},{&quot;./json&quot;:20,&quot;./jsonarray&quot;:21,&quot;./tilejson&quot;:22,&quot;./windshaft&quot;:23}],20:[function(e,t,n){function a(e){for(var t=1;t&lt;arguments.length;++t){var n=arguments[t];for(var r in n)e=e.replace(RegExp(&quot;\\{&quot;+r+&quot;\\}&quot;,&quot;g&quot;),n[r])}return e}var r=e(&quot;../&quot;),i=e(&quot;../profiler&quot;),s=r.types.Uint8Array,o=r.types.Int32Array,u=r.types.Uint32Array,f=function(e){this._ready=!1,this._tileQueue=[],this.options=e,this.options.is_time=this.options.is_time===undefined?!0:this.options.is_time,this.options.tiler_protocol=e.tiler_protocol||&quot;http&quot;,this.options.tiler_domain=e.tiler_domain||&quot;cartodb.com&quot;,this.options.tiler_port=e.tiler_port||80,this.options.data_aggregation&amp;&amp;(this.options.cumulative=this.options.data_aggregation===&quot;cumulative&quot;);if(e.resolution===undefined)throw new Error(&quot;resolution should be provided&quot;);if(e.steps===undefined)throw new Error(&quot;steps should be provided&quot;);e.start===undefined?this._fetchKeySpan():this._setReady(!0)};f.prototype={proccessTile:function(e,t,n){var r,a=new s(e.length),f=new s(e.length),l=i.metric(&quot;ProviderJSON:mem&quot;),c=i.metric(&quot;ProviderJSON:point_count&quot;),h=i.metric(&quot;ProviderJSON:process_time&quot;).start(),p=0,d=-1;for(r=0;r&lt;e.length;++r){var v=e[r];p+=v.dates__uint16.length;for(var m=0;m&lt;v.dates__uint16.length;++m)d=Math.max(d,v.dates__uint16[m])}this.options.cumulative&amp;&amp;(p=(1+d)*e.length);var g=this.options.cumulative?u:s,y=new o(d+1),b=new o(d+1),w=new(this.options.valueDataType||g)(p),E=new u(p);l.inc(4*d+4*d+p+p*4),c.inc(e.length);var S={};for(var r=0;r&lt;e.length;++r){var v=e[r];a[r]=v.x__uint8*this.options.resolution,v.y__uint8===-1?f[r]=0:f[r]=v.y__uint8*this.options.resolution;var p=v.dates__uint16,x=v.vals__uint8;if(!this.options.cumulative)for(var T=0,N=p.length;T&lt;N;++T){var C=S[p[T]]||(S[p[T]]=[]);this.options.cumulative&amp;&amp;(x[T]+=prev_val),prev_val=x[T],C.push([r,x[T]])}else{var k={};for(var T=0,N=p.length;T&lt;N;++T)k[p[T]]=x[T];var L=0;for(var T=p[0];T&lt;=d;++T){var C=S[T]||(S[T]=[]),A=k[T];A&amp;&amp;(L+=A),C.push([r,L])}}}var O=0,M=0,_=0;for(var _=0;_&lt;=d;++_){var D=0,P=S[_];if(P)for(var r=0;r&lt;P.length;++r){var C=P[r];++D,E[O]=C[0],w[O]=C[1],++O}y[_]=M,b[_]=D,M+=D}return h.end(),{x:a,y:f,z:n,coord:{x:t.x,y:t.y,z:n},timeCount:b,timeIndex:y,renderDataPos:E,renderData:w,maxDate:d}},_host:function(){var e=this.options,t=e.sql_api_port,n=(e.user_name||e.user)+&quot;.&quot;+(e.sql_api_domain||&quot;cartodb.com&quot;)+(t?&quot;:&quot;+t:&quot;&quot;),r=e.sql_api_protocol||&quot;http&quot;;return this.options.url||r+&quot;://&quot;+n+&quot;/api/v2/sql&quot;},url:function(e){var t=this.options,n=t.sql_api_protocol||&quot;http&quot;;if(!this.options.cdn_url)return this._host();var r=n+&quot;://&quot;;e&amp;&amp;(r+=e+&quot;.&quot;);var i=t.cdn_url;if(!i.http&amp;&amp;!i.https)throw new Error(&quot;cdn_host should contain http and/or https entries&quot;);return r+=i[n]+&quot;/&quot;+(t.user_name||t.user)+&quot;/api/v2/sql&quot;,r},_hash:function(e){var t=0;if(!e||e.length==0)return t;for(var n=0,r=e.length;n&lt;r;++n)t=(t&lt;&lt;5)-t+e.charCodeAt(n)|0;return t},_extraParams:function(){if(this.options.extra_params){var e=[];for(var t in this.options.extra_params){var n=this.options.extra_params[t];n&amp;&amp;e.push(t+&quot;=&quot;+encodeURIComponent(n))}return e.join(&quot;&amp;&quot;)}return null},isHttps:function(){return this.options.sql_api_protocol&amp;&amp;this.options.sql_api_protocol===&quot;https&quot;},sql:function(e,t,n){n=n||{};var i=this.options.subdomains||&quot;0123&quot;;this.isHttps()&amp;&amp;(i=[null]);var s;n.no_cdn?s=this._host():s=this.url(i[Math.abs(this._hash(e))%i.length]);var o=this._extraParams();r.net.get(s+&quot;?q=&quot;+encodeURIComponent(e)+(o?&quot;&amp;&quot;+o:&quot;&quot;),function(e){n.parseJSON&amp;&amp;(e=JSON.parse(e&amp;&amp;e.responseText)),t&amp;&amp;t(e)})},getTileData:function(e,t,n){this._ready?this._getTileData(e,t,n):this._tileQueue.push([e,t,n])},_setReady:function(e){this._ready=!0,this._processQueue(),this.options.ready&amp;&amp;this.options.ready()},_processQueue:function(){var e;while(e=this._tileQueue.pop())this._getTileData.apply(this,e)},_getTileData:function(e,t,n){var r=i.metric(&quot;ProviderJSON:tile_fetch_time&quot;).start();this.table=this.options.table;var s=1&lt;&lt;t,o=this.options.column;this.options.is_time&amp;&amp;(o=a(&quot;date_part(&#39;epoch&#39;, {column})&quot;,this.options));var u=&quot;WITH par AS (  SELECT CDB_XYZ_Resolution({zoom})*{resolution} as res,  256/{resolution} as tile_size, CDB_XYZ_Extent({x}, {y}, {zoom}) as ext ),cte AS (   SELECT ST_SnapToGrid(i.the_geom_webmercator, p.res) g, {countby} c, floor(({column_conv} - {start})/{step}) d  FROM ({_sql}) i, par p   WHERE i.the_geom_webmercator &amp;&amp; p.ext   GROUP BY g, d) SELECT (st_x(g)-st_xmin(p.ext))/p.res x__uint8,        (st_y(g)-st_ymin(p.ext))/p.res y__uint8, array_agg(c) vals__uint8, array_agg(d) dates__uint16 FROM cte, par p where (st_y(g)-st_ymin(p.ext))/p.res &lt; tile_size and (st_x(g)-st_xmin(p.ext))/p.res &lt; tile_size GROUP BY x__uint8, y__uint8&quot;,f=a(u,this.options,{zoom:t,x:e.x,y:e.y,column_conv:o,_sql:this.getSQL()}),l=this;this.sql(f,function(i){if(i){var s=JSON.parse(i.responseText).rows;n(l.proccessTile(s,e,t))}else n(null);r.end()})},getKeySpan:function(){return{start:this.options.start*1e3,end:this.options.end*1e3,step:this.options.step,steps:this.options.steps,columnType:this.options.is_time?&quot;date&quot;:&quot;number&quot;}},setColumn:function(e,t){this.options.column=e,this.options.is_time=t===undefined?!0:!1,this.reload()},setResolution:function(e){this.options.resolution=e},setOptions:function(e){var t=!1;e.resolution!==undefined&amp;&amp;e.resolution!==this.options.resolution&amp;&amp;(this.options.resolution=e.resolution,t=!0),e.steps!==undefined&amp;&amp;e.steps!==this.options.steps&amp;&amp;(this.setSteps(e.steps,{silent:!0}),t=!0),e.column!==undefined&amp;&amp;e.column!==this.options.column&amp;&amp;(this.options.column=e.column,t=!0),e.countby!==undefined&amp;&amp;e.countby!==this.options.countby&amp;&amp;(this.options.countby=e.countby,t=!0);if(e.data_aggregation!==undefined){var n=e.data_aggregation===&quot;cumulative&quot;;this.options.cumulative!==n&amp;&amp;(this.options.cumulative=n,t=!0)}return t&amp;&amp;this.reload(),t},reload:function(){this._ready=!1,this._fetchKeySpan()},setSQL:function(e){this.options.sql!=e&amp;&amp;(this.options.sql=e,this.reload())},getSteps:function(){return Math.min(this.options.steps,this.options.data_steps)},setSteps:function(e,t){t=t||{},this.options.steps!==e&amp;&amp;(this.options.steps=e,this.options.step=(this.options.end-this.options.start)/this.getSteps(),this.options.step=this.options.step||1,t.silent||this.reload())},getBounds:function(){return this.options.bounds},getSQL:function(){return this.options.sql||&quot;select * from &quot;+this.options.table},_tilerHost:function(){var e=this.options,t=e.user_name||e.user;return e.tiler_protocol+&quot;://&quot;+(t?t+&quot;.&quot;:&quot;&quot;)+e.tiler_domain+(e.tiler_port!=&quot;&quot;?&quot;:&quot;+e.tiler_port:&quot;&quot;)},_fetchUpdateAt:function(e){var t=this,n={version:&quot;1.0.1&quot;,stat_tag:this.options.stat_tag||&quot;torque&quot;,layers:[{type:&quot;cartodb&quot;,options:{cartocss_version:&quot;2.1.1&quot;,cartocss:&quot;#layer {}&quot;,sql:this.getSQL()}}]},i=this._tilerHost()+&quot;/tiles/layergroup&quot;,s=this._extraParams();s&amp;&amp;(s=s.replace(&quot;api_key=&quot;,&quot;map_key=&quot;)),i=i+&quot;?config=&quot;+encodeURIComponent(JSON.stringify(n))+&quot;&amp;callback=?&quot;+(s?&quot;&amp;&quot;+s:&quot;&quot;),r.net.jsonp(i,function(n){var r=a(&quot;select * from ({sql}) __torque_wrap_sql limit 0&quot;,{sql:t.getSQL()});t.sql(r,function(t){n&amp;&amp;t&amp;&amp;e({updated_at:n.last_updated,fields:t.fields})},{parseJSON:!0})})},_fetchKeySpan:function(){var e=this,t,n,r,i;this._fetchUpdateAt(function(s){if(!s)return;e.options.extra_params=e.options.extra_params||{},e.options.extra_params.last_updated=s.updated_at||0,e.options.extra_params.cache_policy=&quot;persist&quot;,e.options.is_time=s.fields[e.options.column].type===&quot;date&quot;;var o=e.options.column;e.options.is_time?(r=&quot;date_part(&#39;epoch&#39;, max({column}))&quot;,i=&quot;date_part(&#39;epoch&#39;, min({column}))&quot;,o=a(&quot;date_part(&#39;epoch&#39;, {column})&quot;,e.options)):(r=&quot;max({column})&quot;,i=&quot;min({column})&quot;),t=a(r,{column:e.options.column}),n=a(i,{column:e.options.column});var u=&quot; SELECT st_xmax(st_envelope(st_collect(the_geom))) xmax, st_ymax(st_envelope(st_collect(the_geom))) ymax, st_xmin(st_envelope(st_collect(the_geom))) xmin, st_ymin(st_envelope(st_collect(the_geom))) ymin, count(*) as num_steps, {max_col} max_date, {min_col} min_date FROM  ({sql}) __torque_wrap_sql &quot;,f=a(u,{max_col:t,min_col:n,column:o,sql:e.getSQL()});e.sql(f,function(t){t=t.rows[0],e.options.start=t.min_date,e.options.end=t.max_date,e.options.step=(t.max_date-t.min_date)/Math.min(e.options.steps,t.num_steps&gt;&gt;0),e.options.data_steps=t.num_steps&gt;&gt;0,e.options.step=e.options.step||1,e.options.bounds=[[t.ymin,t.xmin],[t.ymax,t.xmax]],e._setReady(!0)},{parseJSON:!0,no_cdn:!0})},{parseJSON:!0,no_cdn:!0})}},t.exports=f},{&quot;../&quot;:11,&quot;../profiler&quot;:18}],21:[function(e,t,n){function f(e,t){for(var n=1;n&lt;arguments.length;++n){var t=arguments[n];for(var r in t)e=e.replace(RegExp(&quot;\\{&quot;+r+&quot;\\}&quot;,&quot;g&quot;),t[r])}return e}var i=e(&quot;../&quot;),s=e(&quot;../profiler&quot;),o=i.types.Uint8Array,u=i.types.Int32Array,a=i.types.Uint32Array,l=function(e){this.options=e};l.prototype={aggregateByKey:function(e){function t(e){var t=3,n=e.data[2],r={};for(var i=0;i&lt;n;++i)r[e.data[t+i]]=e.data[t+n+i];return r}var n={};for(r=0;r&lt;e.length;++r){var i=t(e[r]);for(var s in i)n[s]=n[s]||0,n[s]+=i[s]}return n},proccessTile:function(e,t,n){function l(e){var t=3,n={x:e.data[0]*f.options.resolution,y:e.data[1]*f.options.resolution,valuesCount:e.data[2],times:[],values:[]};for(var r=0;r&lt;n.valuesCount;++r)n.times.push(e.data[t+r]),n.values.push(e.data[t+n.valuesCount+r]);if(f.options.cumulative)for(var r=1;r&lt;n.valuesCount;++r)n.values[r]+=n.values[r-1];return n}var r,i=new o(e.length),s=new o(e.length),f=this;for(r=0;r&lt;e.length;++r)e[r]=l(e[r]);var c=0,h=0;for(r=0;r&lt;e.length;++r){var p=e[r];c+=p.times.length;for(var d=0;d&lt;p.times.length;++d)h=Math.max(h,p.times[d])}var v=new u(h+1),m=new u(h+1),g=new(this.options.valueDataType||o)(c),y=new a(c),b={};for(var r=0;r&lt;e.length;++r){var p=e[r];i[r]=p.x,s[r]=p.y;var c=p.times,w=p.values;for(var E=0,S=c.length;E&lt;S;++E){var x=b[c[E]]||(b[c[E]]=[]);x.push([r,w[E]])}}var T=0,N=0,C=0;for(var C=0;C&lt;=h;++C){var k=0,L=b[C];if(L)for(var r=0;r&lt;L.length;++r){var x=L[r];++k,y[T]=x[0],g[T]=x[1],++T}v[C]=N,m[C]=k,N+=k}return{x:i,y:s,coord:{x:t.x,y:t.y,z:n},timeCount:m,timeIndex:v,renderDataPos:y,renderData:g}},url:function(){return this.options.url},tileUrl:function(e,t){var n=this.url(),r=(this.options.subdomains||&quot;abcd&quot;)[(e.x+e.y+t)%4];return n.replace(&quot;{x}&quot;,e.x).replace(&quot;{y}&quot;,e.y).replace(&quot;{z}&quot;,t).replace(&quot;{s}&quot;,r)},getTile:function(e,t,n){var r=this.tileUrl(e,t),o=this,u=s.metric(&quot;jsonarray:fetch time&quot;);u.start(),i.net.get(r,function(e){u.end(),e&amp;&amp;(e=JSON.parse(e.responseText)),n(e)})},getTileData:function(e,t,n){var r=this.tileUrl(e,t),o=this,u=s.metric(&quot;jsonarray:fetch time&quot;);u.start(),i.net.get(r,function(r){u.end();var i=null,a=s.metric(&quot;jsonarray:processing time&quot;),f=s.metric(&quot;jsonarray:parsing time&quot;);try{a.start(),f.start();var l=JSON.parse(r.responseText||r.response).rows;f.end(),i=o.proccessTile(l,e,t),a.end()}catch(c){console.error(&quot;problem parsing JSON on &quot;,e,t)}n(i)})}},t.exports=l},{&quot;../&quot;:11,&quot;../profiler&quot;:18}],22:[function(e,t,n){function a(e){for(var t=1;t&lt;arguments.length;++t){var n=arguments[t];for(var r in n)e=e.replace(RegExp(&quot;\\{&quot;+r+&quot;\\}&quot;,&quot;g&quot;),n[r])}return e}var r=e(&quot;../&quot;),i=r.types.Uint8Array,s=r.types.Int32Array,o=r.types.Uint32Array,u=r.types.Uint8ClampedArray,f=function(e){this._ready=!1,this._tileQueue=[],this.options=e,this.options.coordinates_data_type=this.options.coordinates_data_type||i,this.options.data_aggregation&amp;&amp;(this.options.cumulative=this.options.data_aggregation===&quot;cumulative&quot;);if(this.options.auth_token){var t=this.options.extra_params||(this.options.extra_params={});t.auth_token=this.options.auth_token}this.options.no_fetch_map||this._fetchMap()};f.prototype={NAME:&quot;tileJSON&quot;,proccessTile:function(e,t,n){var r,i=new this.options.coordinates_data_type(e.length),a=new this.options.coordinates_data_type(e.length),f=0,l=-1;for(r=0;r&lt;e.length;++r){var c=e[r];f+=c.dates__uint16.length;for(var h=0;h&lt;c.dates__uint16.length;++h)l=Math.max(l,c.dates__uint16[h])}this.options.cumulative&amp;&amp;(f=(1+l)*e.length);var p=this.options.cumulative?o:u,d=new s(l+1),v=new s(l+1),m=new(this.options.valueDataType||p)(f),g=new o(f),y={};for(var r=0;r&lt;e.length;++r){var c=e[r];i[r]=c.x__uint8*this.options.resolution,a[r]=c.y__uint8*this.options.resolution;var f=c.dates__uint16,b=c.vals__uint8;if(!this.options.cumulative)for(var w=0,E=f.length;w&lt;E;++w){var S=y[f[w]]||(y[f[w]]=[]);this.options.cumulative&amp;&amp;(b[w]+=prev_val),prev_val=b[w],S.push([r,b[w]])}else{var x={};for(var w=0,E=f.length;w&lt;E;++w)x[f[w]]=b[w];var T=0;for(var w=f[0];w&lt;=l;++w){var S=y[w]||(y[w]=[]),N=x[w];N&amp;&amp;(T+=N),S.push([r,T])}}}var C=0,k=0,L=0;for(var L=0;L&lt;=l;++L){var A=0,O=y[L];if(O)for(var r=0;r&lt;O.length;++r){var S=O[r];++A,g[C]=S[0],m[C]=S[1],++C}d[L]=k,v[L]=A,k+=A}return{x:i,y:a,z:n,coord:{x:t.x,y:t.y,z:n},timeCount:v,timeIndex:d,renderDataPos:g,renderData:m,maxDate:l}},setSteps:function(e,t){t=t||{},this.options.steps!==e&amp;&amp;(this.options.steps=e,this.options.step=(this.options.end-this.options.start)/this.getSteps(),this.options.step=this.options.step||1,t.silent||this.reload())},setOptions:function(e){var t=!1;e.resolution!==undefined&amp;&amp;e.resolution!==this.options.resolution&amp;&amp;(this.options.resolution=e.resolution,t=!0),e.steps!==undefined&amp;&amp;e.steps!==this.options.steps&amp;&amp;(this.setSteps(e.steps,{silent:!0}),t=!0),e.column!==undefined&amp;&amp;e.column!==this.options.column&amp;&amp;(this.options.column=e.column,t=!0),e.countby!==undefined&amp;&amp;e.countby!==this.options.countby&amp;&amp;(this.options.countby=e.countby,t=!0);if(e.data_aggregation!==undefined){var n=e.data_aggregation===&quot;cumulative&quot;;this.options.cumulative!==n&amp;&amp;(this.options.cumulative=n,t=!0)}return t&amp;&amp;this.reload(),t},_extraParams:function(e){e=r.extend(r.extend({},e),this.options.extra_params);if(e){var t=[];for(var n in e){var i=e[n];if(i)if(r.isArray(i))for(var s=0,o=i.length;s&lt;o;s++)t.push(n+&quot;[]=&quot;+encodeURIComponent(i[s]));else t.push(n+&quot;=&quot;+encodeURIComponent(i))}return t.join(&quot;&amp;&quot;)}return null},getTileData:function(e,t,n){this._ready?this._getTileData(e,t,n):this._tileQueue.push([e,t,n])},_setReady:function(e){this._ready=!0,this._processQueue(),this.options.ready&amp;&amp;this.options.ready()},_processQueue:function(){var e;while(e=this._tileQueue.pop())this._getTileData.apply(this,e)},_getTileData:function(e,t,n){var i=this</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">,s=this.options.subdomains||&quot;0123&quot;,o=Math.pow(2,t),u=(e.x%o+o)%o,a=Math.abs(u+e.y)%s.length,f=this._extraParams(),l=this.templateUrl.replace(&quot;{x}&quot;,u).replace(&quot;{y}&quot;,e.y).replace(&quot;{z}&quot;,t).replace(&quot;{s}&quot;,s[a]);l+=f,r.net.get(l,function(r){if(r&amp;&amp;r.responseText){var s=JSON.parse(r.responseText);n(i.proccessTile(s,e,t))}else n(null)})},getKeySpan:function(){return{start:this.options.start,end:this.options.end,step:this.options.step,steps:this.options.steps,columnType:this.options.column_type}},setColumn:function(e,t){this.options.column=e,this.options.is_time=t===undefined?!0:!1,this.reload()},reload:function(){this._ready=!1,this._fetchMap()},getSteps:function(){return Math.min(this.options.steps,this.options.data_steps)},getBounds:function(){return this.options.bounds},getSQL:function(){return this.options.sql||&quot;select * from &quot;+this.options.table},setSQL:function(e){this.options.sql!=e&amp;&amp;(this.options.sql=e,this.reload())},_isUserTemplateUrl:function(e){return e&amp;&amp;e.indexOf(&quot;{user}&quot;)!==-1},isHttps:function(){return this.options.maps_api_template.indexOf(&quot;https&quot;)===0},_fetchMap:function(e){var t=this;r.net.get(this.options.tileJSON,function(e){e=JSON.parse(e.response);if(e){if(e.errors){t.options.errorCallback&amp;&amp;t.options.errorCallback(e.errors);return}for(var n in e)t.options[n]=e[n];t.templateUrl=e.tiles[0],t.templateUrl.indexOf(&quot;http&quot;)!==0&amp;&amp;(t.templateUrl=t.options.tileJSON.substring(0,t.options.tileJSON.lastIndexOf(&quot;/&quot;)+1)+t.templateUrl),t._setReady(!0)}})}},t.exports=f},{&quot;../&quot;:11}],23:[function(e,t,n){function f(e){for(var t=1;t&lt;arguments.length;++t){var n=arguments[t];for(var r in n)e=e.replace(RegExp(&quot;\\{&quot;+r+&quot;\\}&quot;,&quot;g&quot;),n[r])}return e}var r=e(&quot;../&quot;),i=e(&quot;../profiler&quot;),s=r.types.Uint8Array,o=r.types.Int32Array,u=r.types.Uint32Array,a=r.types.Uint8ClampedArray,l=function(e){this._ready=!1,this._tileQueue=[],this.options=e,this.options.is_time=this.options.is_time===undefined?!0:this.options.is_time,this.options.tiler_protocol=e.tiler_protocol||&quot;http&quot;,this.options.tiler_domain=e.tiler_domain||&quot;cartodb.com&quot;,this.options.tiler_port=e.tiler_port||80,e.maps_api_template?this.options.maps_api_template=e.maps_api_template:this._buildMapsApiTemplate(this.options),this.options.coordinates_data_type=this.options.coordinates_data_type||s,this.options.data_aggregation&amp;&amp;(this.options.cumulative=this.options.data_aggregation===&quot;cumulative&quot;);if(this.options.auth_token){var t=this.options.extra_params||(this.options.extra_params={});t.auth_token=this.options.auth_token}this.options.no_fetch_map||this._fetchMap()};l.prototype={proccessTile:function(e,t,n){var r,s=new this.options.coordinates_data_type(e.length),f=new this.options.coordinates_data_type(e.length),l=i.metric(&quot;torque.provider.windshaft.mem&quot;),c=i.metric(&quot;torque.provider.windshaft.points&quot;),h=i.metric(&quot;torque.provider.windshaft.process_time&quot;).start(),p=0,d=-1;for(r=0;r&lt;e.length;++r){var v=e[r];p+=v.dates__uint16.length;for(var m=0;m&lt;v.dates__uint16.length;++m)d=Math.max(d,v.dates__uint16[m])}this.options.cumulative&amp;&amp;(p=(1+d)*e.length);var g=this.options.cumulative?u:a,y=new o(d+1),b=new o(d+1),w=new(this.options.valueDataType||g)(p),E=new u(p);l.inc(4*d+4*d+p+p*4),c.inc(e.length);var S={};for(var r=0;r&lt;e.length;++r){var v=e[r];s[r]=v.x__uint8*this.options.resolution,f[r]=v.y__uint8*this.options.resolution;var p=v.dates__uint16,x=v.vals__uint8;if(!this.options.cumulative)for(var T=0,N=p.length;T&lt;N;++T){var C=S[p[T]]||(S[p[T]]=[]);this.options.cumulative&amp;&amp;(x[T]+=prev_val),prev_val=x[T],C.push([r,x[T]])}else{var k={};for(var T=0,N=p.length;T&lt;N;++T)k[p[T]]=x[T];var L=0;for(var T=p[0];T&lt;=d;++T){var C=S[T]||(S[T]=[]),A=k[T];A&amp;&amp;(L+=A),C.push([r,L])}}}var O=0,M=0,_=0;for(var _=0;_&lt;=d;++_){var D=0,P=S[_];if(P)for(var r=0;r&lt;P.length;++r){var C=P[r];++D,E[O]=C[0],w[O]=C[1],++O}y[_]=M,b[_]=D,M+=D}return h.end(),{x:s,y:f,z:n,coord:{x:t.x,y:t.y,z:n},timeCount:b,timeIndex:y,renderDataPos:E,renderData:w,maxDate:d}},setSteps:function(e,t){t=t||{},this.options.steps!==e&amp;&amp;(this.options.steps=e,this.options.step=(this.options.end-this.options.start)/this.getSteps(),this.options.step=this.options.step||1,t.silent||this.reload())},setOptions:function(e){var t=!1;e.resolution!==undefined&amp;&amp;e.resolution!==this.options.resolution&amp;&amp;(this.options.resolution=e.resolution,t=!0),e.steps!==undefined&amp;&amp;e.steps!==this.options.steps&amp;&amp;(this.setSteps(e.steps,{silent:!0}),t=!0),e.column!==undefined&amp;&amp;e.column!==this.options.column&amp;&amp;(this.options.column=e.column,t=!0),e.countby!==undefined&amp;&amp;e.countby!==this.options.countby&amp;&amp;(this.options.countby=e.countby,t=!0);if(e.data_aggregation!==undefined){var n=e.data_aggregation===&quot;cumulative&quot;;this.options.cumulative!==n&amp;&amp;(this.options.cumulative=n,t=!0)}return t&amp;&amp;this.reload(),t},_extraParams:function(e){e=r.extend(r.extend({},e),this.options.extra_params);if(e){var t=[];for(var n in e){var i=e[n];if(i)if(r.isArray(i))for(var s=0,o=i.length;s&lt;o;s++)t.push(n+&quot;[]=&quot;+encodeURIComponent(i[s]));else t.push(n+&quot;=&quot;+encodeURIComponent(i))}return t.join(&quot;&amp;&quot;)}return null},getTileData:function(e,t,n){this._ready?this._getTileData(e,t,n):this._tileQueue.push([e,t,n])},_setReady:function(e){this._ready=!0,this._processQueue(),this.options.ready&amp;&amp;this.options.ready()},_processQueue:function(){var e;while(e=this._tileQueue.pop())this._getTileData.apply(this,e)},_getTileData:function(e,t,n){var s=this,o=i.metric(&quot;torque.provider.windshaft.tile.fetch&quot;).start(),u=this.options.subdomains||&quot;0123&quot;,a=Math.pow(2,t),f=(e.x%a+a)%a,l=Math.abs(f+e.y)%u.length,c=this.templateUrl.replace(&quot;{x}&quot;,f).replace(&quot;{y}&quot;,e.y).replace(&quot;{z}&quot;,t).replace(&quot;{s}&quot;,u[l]),h=this._extraParams();r.net.get(c+(h?&quot;?&quot;+h:&quot;&quot;),function(r){o.end();if(r&amp;&amp;r.responseText){var u=JSON.parse(r.responseText);n(s.proccessTile(u,e,t))}else i.metric(&quot;torque.provider.windshaft.tile.error&quot;).inc(),n(null)})},getKeySpan:function(){return{start:this.options.start,end:this.options.end,step:this.options.step,steps:this.options.steps,columnType:this.options.column_type}},setColumn:function(e,t){this.options.column=e,this.options.is_time=t===undefined?!0:!1,this.reload()},reload:function(){this._ready=!1,this._fetchMap()},getSteps:function(){return Math.min(this.options.steps,this.options.data_steps)},getBounds:function(){return this.options.bounds},getSQL:function(){return this.options.sql||&quot;select * from &quot;+this.options.table},setSQL:function(e){this.options.sql!=e&amp;&amp;(this.options.sql=e,this.reload())},_buildMapsApiTemplate:function(e){var t=e.user_name||e.user;e.maps_api_template=e.tiler_protocol+&quot;://&quot;+(t?&quot;{user}.&quot;:&quot;&quot;)+e.tiler_domain+(e.tiler_port!=&quot;&quot;?&quot;:&quot;+e.tiler_port:&quot;&quot;)},_tilerHost:function(){var e=this.options,t=e.user_name||e.user;return e.maps_api_template.replace(&quot;{user}&quot;,t)},url:function(){var e=this.options,t=e.cdn_url,n=!t||t&amp;&amp;!t.http&amp;&amp;!t.https;if(e.no_cdn||n)return this._tilerHost();var r=this.isHttps()?&quot;https&quot;:&quot;http&quot;,i=r+&quot;://&quot;;this.isHttps()||(i+=&quot;{s}.&quot;);var s=t[r];this._isUserTemplateUrl(s)||(s+=&quot;/{user}&quot;);var o=e.user_name||e.user;return i+=s.replace(&quot;{user}&quot;,o),i},_isUserTemplateUrl:function(e){return e&amp;&amp;e.indexOf(&quot;{user}&quot;)!==-1},isHttps:function(){return this.options.maps_api_template.indexOf(&quot;https&quot;)===0},_generateCartoCSS:function(){var e={&quot;-torque-frame-count&quot;:this.options.steps,&quot;-torque-resolution&quot;:this.options.resolution,&quot;-torque-aggregation-function&quot;:&quot;&#39;&quot;+this.options.countby+&quot;&#39;&quot;,&quot;-torque-time-attribute&quot;:&quot;&#39;&quot;+this.options.column+&quot;&#39;&quot;,&quot;-torque-data-aggregation&quot;:this.options.cumulative?&quot;cumulative&quot;:&quot;linear&quot;},t=&quot;Map{&quot;;for(var n in e)t+=n+&quot;:&quot;+e[n]+&quot;;&quot;;return t+&quot;}&quot;},_fetchMap:function(e){var t=this,n={},s=this.options.dynamic_cdn?this.url().replace(&quot;{s}&quot;,&quot;0&quot;):this._tilerHost(),o=s+&quot;/api/v1/map&quot;,u=this.options.named_map,a={};u?(o=s+&quot;/api/v1/map/named/&quot;+u.name+&quot;/jsonp&quot;,typeof u.params!=&quot;undefined&quot;&amp;&amp;(n=u.params)):n={version:&quot;1.0.1&quot;,stat_tag:this.options.stat_tag||&quot;torque&quot;,layers:[{type:&quot;torque&quot;,options:{cartocss_version:&quot;1.0.0&quot;,cartocss:this._generateCartoCSS(),sql:this.getSQL()}}]},this.options.stat_tag&amp;&amp;(a.stat_tag=this.options.stat_tag),extra=this._extraParams(a),extra&amp;&amp;(extra=extra.replace(&quot;api_key=&quot;,&quot;map_key=&quot;)),o=o+&quot;?config=&quot;+encodeURIComponent(JSON.stringify(n))+&quot;&amp;callback=?&quot;+(extra?&quot;&amp;&quot;+extra:&quot;&quot;);var f=i.metric(&quot;torque.provider.windshaft.layergroup.time&quot;).start();r.net.jsonp(o,function(e){f.end();if(e){if(e.errors){t.options.errorCallback&amp;&amp;t.options.errorCallback(e.errors);return}var n=Object.keys(e.metadata.torque)[0],r=e.metadata.torque[n];for(var s in r)t.options[s]=r[s];if(e.cdn_url){var o=t.options.cdn_url=t.options.cdn_url||{};o.http=e.cdn_url.http||o.http,o.https=e.cdn_url.https||o.https}t.templateUrl=t.url()+&quot;/api/v1/map/&quot;+e.layergroupid+&quot;/&quot;+n+&quot;/{z}/{x}/{y}.json.torque&quot;,t._setReady(!0)}else i.metric(&quot;torque.provider.windshaft.layergroup.error&quot;).inc()},{callbackName:t.options.instanciateCallback})}},t.exports=l},{&quot;../&quot;:11,&quot;../profiler&quot;:18}],24:[function(e,t,n){function o(e,t){e.fillStyle=t[&quot;marker-fill&quot;];var n=t[&quot;marker-width&quot;];e.beginPath(),e.arc(0,0,n,0,r,!0,!0),e.closePath(),t[&quot;marker-opacity&quot;]!==undefined&amp;&amp;(t[&quot;marker-fill-opacity&quot;]=t[&quot;marker-line-opacity&quot;]=t[&quot;marker-opacity&quot;]),t[&quot;marker-fill&quot;]&amp;&amp;(e.globalAlpha=t[&quot;marker-fill-opacity&quot;]&gt;=0?t[&quot;marker-fill-opacity&quot;]:1,e.globalAlpha&gt;0&amp;&amp;e.fill()),t[&quot;marker-line-color&quot;]&amp;&amp;t[&quot;marker-line-width&quot;]&amp;&amp;t[&quot;marker-line-width&quot;]&gt;i&amp;&amp;(e.globalAlpha=t[&quot;marker-line-opacity&quot;]&gt;=0?t[&quot;marker-line-opacity&quot;]:1,t[&quot;marker-line-width&quot;]!==undefined&amp;&amp;(e.lineWidth=t[&quot;marker-line-width&quot;]),e.strokeStyle=t[&quot;marker-line-color&quot;],e.globalAlpha&gt;0&amp;&amp;e.stroke())}function u(e,t){e.fillStyle=t[&quot;marker-fill&quot;];var n=t[&quot;marker-width&quot;],r=n*2;if(t[&quot;marker-fill&quot;]){if(t[&quot;marker-fill-opacity&quot;]!==undefined||t[&quot;marker-opacity&quot;]!==undefined)e.globalAlpha=t[&quot;marker-fill-opacity&quot;]||t[&quot;marker-opacity&quot;];e.fillRect(-n,-n,r,r)}e.globalAlpha=1,t[&quot;marker-line-color&quot;]&amp;&amp;t[&quot;marker-line-width&quot;]&amp;&amp;(t[&quot;marker-line-opacity&quot;]&amp;&amp;(e.globalAlpha=t[&quot;marker-line-opacity&quot;]),t[&quot;marker-line-width&quot;]&amp;&amp;(e.lineWidth=t[&quot;marker-line-width&quot;]),e.strokeStyle=t[&quot;marker-line-color&quot;],e.globalAlpha&gt;0&amp;&amp;e.strokeRect(-n,-n,r,r))}function a(e,t,n){if(t.complete){if(n[&quot;marker-fill-opacity&quot;]!==undefined||n[&quot;marker-opacity&quot;]!==undefined)e.globalAlpha=n[&quot;marker-fill-opacity&quot;]||n[&quot;marker-opacity&quot;];e.drawImage(t,0,0,Math.min(t.width,s),Math.min(t.height,s))}}var r=Math.PI*2,i=.05,s=255;t.exports={renderPoint:o,renderSprite:a,renderRectangle:u,MAX_SPRITE_RADIUS:s}},{}],25:[function(e,t,n){t.exports={cartocss:e(&quot;./cartocss_render&quot;),Point:e(&quot;./point&quot;),Rectangle:e(&quot;./rectangle&quot;)}},{&quot;./cartocss_render&quot;:24,&quot;./point&quot;:26,&quot;./rectangle&quot;:27}],26:[function(e,t,n){(function(n){function c(e){return l[e]||e}function h(e,t){if(!e)throw new Error(&quot;canvas can&#39;t be undefined&quot;);this.options=t,this._canvas=e,this._ctx=e.getContext(&quot;2d&quot;),this._sprites=[],this._shader=null,this._icons={},this._iconsToLoad=0,this._filters=new u(this._canvas,{canvasClass:t.canvasClass}),this.setCartoCSS(this.options.cartocss||f),this.TILE_SIZE=256,this._style=null,this._gradients={},this._forcePoints=!1}var r=e(&quot;../&quot;),i=e(&quot;./cartocss_render&quot;),s=e(&quot;../profiler&quot;),o=n.carto||e(&quot;carto&quot;),u=e(&quot;./torque_filters&quot;),a=Math.PI*2,f=[&quot;#layer {&quot;,&quot;  marker-fill: #662506;&quot;,&quot;  marker-width: 4;&quot;,&quot;  [value &gt; 1] { marker-fill: #FEE391; }&quot;,&quot;  [value &gt; 2] { marker-fill: #FEC44F; }&quot;,&quot;  [value &gt; 3] { marker-fill: #FE9929; }&quot;,&quot;  [value &gt; 4] { marker-fill: #EC7014; }&quot;,&quot;  [value &gt; 5] { marker-fill: #CC4C02; }&quot;,&quot;  [value &gt; 6] { marker-fill: #993404; }&quot;,&quot;  [value &gt; 7] { marker-fill: #662506; }&quot;,&quot;}&quot;].join(&quot;\n&quot;),l={src:&quot;source-over&quot;,&quot;src-over&quot;:&quot;source-over&quot;,&quot;dst-over&quot;:&quot;destination-over&quot;,&quot;src-in&quot;:&quot;source-in&quot;,&quot;dst-in&quot;:&quot;destination-in&quot;,&quot;src-out&quot;:&quot;source-out&quot;,&quot;dst-out&quot;:&quot;destination-out&quot;,&quot;src-atop&quot;:&quot;source-atop&quot;,&quot;dst-atop&quot;:&quot;destination-atop&quot;,xor:&quot;xor&quot;,darken:&quot;darken&quot;,lighten:&quot;lighten&quot;};r.extend(h.prototype,r.Event,{clearCanvas:function(){var e=this._canvas,t=this._Map[&quot;-torque-clear-color&quot;];if(t===&quot;rgba(255, 255, 255, 0)&quot;||!t)this._canvas.width=this._canvas.width;else{var n=this._ctx;n.setTransform(1,0,0,1,0,0);var r=this._Map[&quot;comp-op&quot;];n.globalCompositeOperation=c(r),n.fillStyle=t,n.fillRect(0,0,e.width,e.height)}},setCanvas:function(e){this._canvas=e,this._ctx=e.getContext(&quot;2d&quot;)},setCartoCSS:function(e){this.setShader((new o.RendererJS).render(e))},setShader:function(e){this._sprites=[],this._shader=e,this._Map=this._shader.getDefault().getStyle({},{zoom:0});var t=this._shader.getImageURLs();this._preloadIcons(t)},clearSpriteCache:function(){this._sprites=[]},generateSprite:function(e,t,n){var o=this,u=s.metric(&quot;torque.renderer.point.generateSprite&quot;).start(),a=e.getStyle({value:t},n);if(this._style===null||this._style!==a)this._style=a;var f=a[&quot;marker-width&quot;];if(!f)return null;if(a[&quot;marker-opacity&quot;]===0&amp;&amp;!a[&quot;marker-line-opacity&quot;])return null;var l=this._createCanvas(),c=l.getContext(&quot;2d&quot;),h=a[&quot;marker-file&quot;]||a[&quot;point-file&quot;],p=h&amp;&amp;this._qualifyURL(h);if(p&amp;&amp;this._iconsToLoad&lt;=0&amp;&amp;this._icons[p]){var d=this._icons[p],v=Math.min(a[&quot;marker-width&quot;]*2||d.width,i.MAX_SPRITE_RADIUS*2),m=Math.min((a[&quot;marker-height&quot;]||v)*(d.width/d.height),i.MAX_SPRITE_RADIUS*2);l.width=c.width=v,l.height=c.height=m,c.scale(v/d.width,m/d.height),i.renderSprite(c,d,a)}else{var g=(a[&quot;marker-line-width&quot;]||0)+f*2,y=c.width=l.width=c.height=l.height=Math.ceil(g);c.translate(y/2,y/2);var b=a[&quot;marker-type&quot;];b&amp;&amp;b===&quot;rectangle&quot;?i.renderRectangle(c,a):i.renderPoint(c,a)}u.end(!0);if(r.flags.sprites_to_images){var w=this._createImage();return w.src=l.toDataURL(),w}return l},renderTile:function(e,t,n){if(this._iconsToLoad&gt;0)return this.on(&quot;allIconsLoaded&quot;,function(){this.renderTile.apply(this,[e,t,n])}),!1;typeof t.length==&quot;undefined&quot;&amp;&amp;(t=[t]);var r=s.metric(&quot;torque.renderer.point.renderLayers&quot;).start(),i=this._shader.getLayers();for(var o=0,u=i.length;o&lt;u;++o){var a=i[o];if(a.name()!==&quot;Map&quot;){var f=this._sprites[o]||(this._sprites[o]={});for(var l=0;l&lt;a.frames().length;++l){var c=a.frames()[l],h=f[c]||(f[c]=[]);for(var p=0,d=t.length;p&lt;d;p++)this._renderTile(e,t[p]-c,c,h,a)}}}return r.end(!0),n&amp;&amp;n(null)},_createCanvas:function(){return this.options.canvasClass?new this.options.canvasClass:document.createElement(&quot;canvas&quot;)},_createImage:function(){return this.options.imageClass?new this.options.imageClass:new Image},_setImageSrc:function(e,t,n){this.options.setImageSrc?this.options.setImageSrc(e,t,n):(e.onload=function(){n(null)},e.onerror=function(){n(new Error(&quot;Could not load image&quot;))},e.src=t)},_qualifyURL:function(e){if(typeof this.options.qualifyURL!=&quot;undefined&quot;)return this.options.qualifyURL(e);var t=document.createElement(&quot;a&quot;);return t.href=e,t.href},_renderTile:function(e,t,n,i,o,u){if(!this._canvas)return;var a=s.metric(&quot;torque.renderer.point.renderTile&quot;).start(),f=this._ctx,l=c(o.eval(&quot;comp-op&quot;))||this.options.blendmode;l&amp;&amp;(f.globalCompositeOperation=l),this.options.cumulative&amp;&amp;t&gt;e.maxDate&amp;&amp;(t=e.maxDate);var h=this.options.resolution*(this.TILE_SIZE/this.options.resolution-1),p=e.timeCount[t],d=this.options.resolution/2;if(p){var v=e.timeIndex[t];for(var m=0;m&lt;p;++m){var g=e.renderDataPos[v+m],y=e.renderData[v+m];if(y){var b=i[y];b===undefined&amp;&amp;(b=i[y]=this.generateSprite(o,y,r.extend({zoom:e.z,&quot;frame-offset&quot;:n},u)));if(b){var w=e.x[g]-(b.width&gt;&gt;1)+d,E=h-e.y[g]+d;f.drawImage(b,w,E-(b.height&gt;&gt;1))}}}}a.end(!0)},setBlendMode:function(e){this.options.blendmode=e},getActivePointsBBox:function(e,t){var n=[],i=new r.Mercator,s=this.options.resolution*(this.TILE_SIZE/this.options.resolution-1),o=e.timeCount[t],u=e.timeIndex[t];for(var a=0;a&lt;o;++a){var f=e.renderDataPos[u+a],l=e.renderData[u+a];if(l){var c=e.x[f],h=s-e.y[f];n.push(i.tilePixelBBox(e.coord.x,e.coord.y,e.coord.z,c,h))}}return n},getValues:function(e,t,n){n=n||[];var r=e.timeCount[t],i=e.timeIndex[t];for(var s=0;s&lt;r;++s){var o=e.renderDataPos[i+s];n.push(e.renderData[i+s])}return n},getValueFor:function(e,t,n,i){var s=new r.Mercator,o=this.options.resolution,u=o&gt;&gt;1,a=this.options.resolution*(this.TILE_SIZE/this.options.resolution-1),f=e.timeCount[t],l=e.timeIndex[t];for(var c=0;c&lt;f;++c){var h=e.renderDataPos[l+c],p=e.renderData[l+c];if(p){var d=e.x[h],v=a-e.y[h],m=n+u-d,g=i+u-v;if(m&gt;=0&amp;&amp;m&lt;o&amp;&amp;g&gt;=0&amp;&amp;g&lt;o)return{value:p,bbox:s.tilePixelBBox(e.coord.x,e.coord.y,e.coord.z,d-u,v-u,o)}}}return null},_preloadIcons:function(e){var t=this;if(e.length&gt;0&amp;&amp;!this._forcePoints){var n=Object.keys(e.reduce(function(e,n){var r=t._qualifyURL(n);return t._icons[r]||(e[r]=!0),e},{})),r=t._shader.getLayers().some(function(e){return typeof e.shader[&quot;image-filters&quot;]!=&quot;undefined&quot;});this._iconsToLoad+=n.length,n.forEach(function(e){t._icons[e]=null;var n=t._createImage();r&amp;&amp;(n.crossOrigin=&quot;Anonymous&quot;),t._setImageSrc(n,e,function(i){i?(t._forcePoints=!0,t.clearSpriteCache(),t._iconsToLoad=0,t.fire(&quot;allIconsLoaded&quot;),r&amp;&amp;console.info(&quot;Only CORS-enabled, or same domain image-files can be used in combination with image-filters&quot;),console.error(&quot;Couldn&#39;t get marker-file &quot;+e)):(t._icons[e]=n,t._iconsToLoad--,t._iconsToLoad&lt;=0&amp;&amp;(t.clearSpriteCache(),t.fire(&quot;allIconsLoaded&quot;)))})})}else this.fire(&quot;allIconsLoaded&quot;)},applyFilters:function(){if(this._style&amp;&amp;this._style[&quot;image-filters&quot;]){function e(e){var t=&quot;&quot;;for(var n=0;n&lt;e.args.length;n++){var r=e.args[n].rgb;t+=r[0]+&quot;:&quot;+r[1]+&quot;:&quot;+r[2]}return t}var t=this._gradients[e(this._style[&quot;image-filters&quot;])];if(!t){function n(e){var t=e.toString(16);return t.length==1?&quot;0&quot;+t:t}function r(e,t,r){return&quot;#&quot;+n(e)+n(t)+n(r)}t={};var i=this._style[&quot;image-filters&quot;].args,s=1/i.length;for(var o=0;o&lt;i.length;o++){var u=s*o+s,a=i[o].rgb,f=r(a[0],a[1],a[2]);t[u]=f}this._gradients[e(this._style[&quot;image-filters&quot;])]=t}this._filters.gradient(t),this._filters.draw()}}}),t.exports=h}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{&quot;../&quot;:11,&quot;../profiler&quot;:18,&quot;./cartocss_render&quot;:24,&quot;./torque_filters&quot;:28,carto:undefined}],27:[function(e,t,n){(function(n){function o(e,t){this.options=t,r.tree.Reference.set(torque[&quot;torque-reference&quot;]),this.setCanvas(e),this.setCartoCSS(this.options.cartocss||i)}var r=n.carto||e(&quot;carto&quot;),i=[&quot;#layer {&quot;,&quot;  polygon-fill: #FFFF00;&quot;,&quot;  [value &gt; 10] { polygon-fill: #FFFF00; }&quot;,&quot;  [value &gt; 100] { polygon-fill: #FFCC00; }&quot;,&quot;  [value &gt; 1000] { polygon-fill: #FE9929; }&quot;,&quot;  [value &gt; 10000] { polygon-fill: #FF6600; }&quot;,&quot;  [value &gt; 100000] { polygon-fill: #FF3300; }&quot;,&quot;}&quot;].join(&quot;\n&quot;),s=Math.PI*2;o.prototype={setCartoCSS:function(e){this._cartoCssStyle=(new r.RendererJS).render(e);if(this._cartoCssStyle.getLayers().length&gt;1)throw new Error(&quot;only one CartoCSS layer is supported&quot;);this._shader=this._cartoCssStyle.getLayers()[0].shader},setCanvas:function(e){if(!e)return;this._canvas=e,this._ctx=e.getContext(&quot;2d&quot;)},accumulate:function(e,t){var n=Profiler.metric(&quot;RectangleRender:accumulate&quot;).start(),r,i,s,o,u,a,f,l,c=this.options.resolution,h=256/c,p=new Float32Array(h*h);typeof t!=&quot;object&quot;&amp;&amp;(t=[t]);for(u=0;u&lt;t.length;++u){a=t[u],f=e.timeCount[a];if(f){l=e.timeIndex[a];for(o=0;o&lt;f;++o)s=e.renderDataPos[l+o],r=e.x[s]/c,i=e.y[s]/c,p[r*h+i]+=e.renderData[l+o]}}return n.end(),p},renderTileAccum:function(e,t,n){var r=Profiler.metric(&quot;RectangleRender:renderTileAccum&quot;).start(),i,s,o,u,a=this.options.resolution,f=this._ctx,l=256/a|0,c=l*l,h=this._colors;this.options.blendmode&amp;&amp;(f.globalCompositeOperation=this.options.blendmode);var p=this._shader[&quot;polygon-opacity&quot;]||function(){return 1};for(var d=0;d&lt;c;++d){var v=d,m=e[d];m&amp;&amp;(s=v/l|0,o=v%l,i=this._shader[&quot;polygon-fill&quot;]({value:m},{zoom:0}),f.fillStyle=i,u=p({value:m},{zoom:0}),u===null&amp;&amp;(u=1),f.globalAlpha=u,f.fillRect(s*a,256-a-o*a,a,a))}r.end()},renderTile:function(e,t,n){if(!this._canvas)return;var r=this.options.resolution,i=this._ctx,s=this._colors,o=e.timeCount[t];if(o){var u=this._canvas.width,a=this._canvas.height,f=e.timeIndex[t];for(var l=0;l&lt;activePixels;++l){var c=e.renderDataPos[f+l],h=e.renderData[f+l];if(h){var p=s[Math.min(h,s.length-1)],d=e.x[c],v=e.y[c];i.fillStyle=p,i.fillRect(d,v,r,r)}}}return n&amp;&amp;n(null)}},t.exports=o}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{carto:undefined}],28:[function(e,t,n){&quot;use strict&quot;;function r(e,t){if(!(this instanceof r))return new r(e,t);t=t||{},this._canvas=e=typeof e==&quot;string&quot;?document.getElementById(e):e,this._ctx=e.getContext(&quot;2d&quot;),this._width=e.width,this._height=e.height,this._max=1,this._data=[],this.canvasClass=t.canvasClass}r.prototype={defaultGradient:{.4:&quot;blue&quot;,.6:&quot;cyan&quot;,.7:&quot;lime&quot;,.8:&quot;yellow&quot;,1:&quot;red&quot;},gradient:function(e){var t=this._createCanvas(),n=t.getContext(&quot;2d&quot;),r=n.createLinearGradient(0,0,0,256);t.width=1,t.height=256;for(var i in e)r.addColorStop(+i,e[i]);return n.fillStyle=r,n.fillRect(0,0,1,256),this._grad=n.getImageData(0,0,1,256).data,this},draw:function(){this._grad||this.gradient(this.defaultGradient);var e=this._ctx,t=e.getImageData(0,0,this._canvas.width,this._canvas.height);return this._colorize(t.data,this._grad),e.putImageData(t,0,0),this},_colorize:function(e,t){for(var n=3,r=e.length,i;n&lt;r;n+=4)i=e[n]*4,i&amp;&amp;(e[n-3]=t[i],e[n-2]=t[i+1],e[n-1]=t[i+2])},_createCanvas:function(){return this.canvasClass?new this.canvasClass:document.createElement(&quot;canvas&quot;)}},t.exports=r},{}],29:[function(e,t,n){(function(n){function s(e,t,n){function u(){i.removeChild(s),clearTimeout(a),delete window[o]}n=n||{},n.timeout=n.timeout===undefined?1e4:n.timeout;var i=document.getElementsByTagName(&quot;head&quot;)[0],s=document.createElement(&quot;script&quot;),o=n.callbackName||&quot;torque_&quot;+Date.now();r.isFunction(o)&amp;&amp;(o=o()),window[o]=function(){u(),t.apply(window,arguments)};var a=setTimeout(function(){u(),t.call(window,null)},n.timeout);e=e.replace(&quot;callback=?&quot;,&quot;callback=&quot;+o),s.type=&quot;text/javascript&quot;,s.src=e,s.async=!0,setTimeout(function(){i.appendChild(s)},0)}function o(e,t,r){function u(){var e=o.status,n,i=r.responseType===&quot;arraybuffer&quot;?o.response:o.responseText;!e&amp;&amp;i||e&gt;=200&amp;&amp;e&lt;300||e===304?t(o):t(null)}r=r||{method:&quot;GET&quot;,data:null,responseType:&quot;text&quot;},i={url:e,callback:t};var s=XMLHttpRequest;n.XDomainRequest&amp;&amp;!(&quot;withCredentials&quot;in s)&amp;&amp;/^(http(s)?:)?\/\//.test(e)&amp;&amp;(s=XDomainRequest);var o=new s;return o.open(r.method,e,!0),&quot;onload&quot;in o?o.onload=o.onerror=u:o.onreadystatechange=function(){o.readyState&gt;3&amp;&amp;u()},o.onprogress=function(){},o.responseType=r.responseType,r.data&amp;&amp;(o.setRequestHeader(&quot;Content-type&quot;,&quot;application/json&quot;),o.setRequestHeader(&quot;Accept&quot;,&quot;*&quot;)),o.send(r.data),o}function u(e,t,n){return o(e,n,{data:t,method:&quot;POST&quot;})}var r=e(&quot;./core&quot;),i=null;t.exports={get:o,post:u,jsonp:s,lastCall:function(){return i}}}).call(this,typeof global!=&quot;undefined&quot;?global:typeof self!=&quot;undefined&quot;?self:typeof window!=&quot;undefined&quot;?window:{})},{&quot;./core&quot;:5}]},{},[11])(11)});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.09095s from github-fe121-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-QEzdGt0fcQ2wFqAuXjH/+KkInRT/DCJ9+GK3gIhtt9U=" src="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-iVG4iJ1wGovac/pEUQ+y1w3TBtIlGXfhFyp410Wc1ZQ=" src="https://assets-cdn.github.com/assets/github-8951b8889d701a8bda73fa44510fb2d70dd306d2251977e1172a78d7459cd594.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

