# TamperMonkeyUserScripts
A collection of various userscripts for TamperMonkey. *(They should also work unmodified with GreaseMonkey, ViolentMonkey, etc.)*

With over 10M installs, TamperMonkey is arguably the most popular non-ad-blocking browser extension in history. The only extensions that equal its popularity are the anti-virus and ad-blocking extensions. TamperMonkey is a browser extension that runs user-created javascript code ("userscripts") on the web pages for which the userscripts were designed. Read more about userscripts [here](https://simply-how.com/enhance-and-fine-tune-any-web-page-the-complete-user-scripts-guide).

These scripts are not designed to be ad blockers. The author uses Raymond Hill's super-popular, super-efficient [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) extension, which takes care of the ads. These scripts tidy up what's left.

## Installation:

See [this StackOverflow article](https://stackoverflow.com/a/53161629/1447509) for how to use/install TamperMonkey userscripts.

## IMPORTANT:

When TamperMonkey scripts are installed, the target webpages are immediately reformatted before they are displayed to you. Sometimes, this is not what you want - so what can you do? ***Disable TamperMonkey by*** clicking the "monkey-head" icon++ and choosing the first choice: "DISABLE".

++If you do not see TamperMonkey's "monkey-head" icon near the top right of your browser toolbar, then click the Extensions icon (looks like a hammer) and you will find the "monkey-head" icon under that. Click on the word "TamperMonkey" (not on the 3 dots to the right!) and the TamperMonkey menu will open and you can choose DISABLE (or Enable to re-enable it).

# LIST OF SCRIPTS:

## W3Schools.com CSS Colors page

https://www.w3schools.com/cssref/css_colors.asp

A primary go-to reference page for anyone working with colors in CSS. The original page displays three color blocks on each line, and a maximum of 21 per page (only 12 on the first page).

This script removes some page elements (such as the right-sidebar etc) and adds the following buttons to top-left of page:

[25] [20] [15] [10] [5] [Black] [Full]

The first five buttons relate to the sizing of each color block ("5" being the smallest). When the 5 button is pressed, you can see up to 148 color blocks per screen. At [25], you see approximately 24 per screen).

If press the [Full] toggle button, the top navbar and left sidebar are hidden, increasing the size of each block.

If press the [Black] toggle button, the screen background becomes black.

With [Full] and [5] both pressed, you can see all 148 color blocks on one screen.


## Endless Duck-Duck-Go

Removes the need to press the MORE button to load new results. The script presses that MORE button for you, long before you even see it. The result is a smooth, endless-scroll experience, "comme il faut".

## Improve TheWeatherNetwork - weather page for your area

Provides a clean-page experience - Hides almost everything except the weather panel. If you are still getting ads, install Raymond Hill's [uBlock Origin](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) extension in your browser (ten million users are probably not wrong...).

## Improve Purolator's Shipping Tracker

Cleans up the Purolator Tracker screen by hiding unnecessary labels/titles/icons. The result is that you see more important stuff, right up at the top of the page.

## Improve TheGatewayPundit news site

TheGatewayPundit is the new DrudgeReport. From obscurity, it has rocketed up to become possibly the most popular news website of 2021. Its clean, minimalist appearance and facts-only reporting have won several tens of millions of daily readers (compare that to CNN/MSNBC/CBC/BBC barely 2 million daily visits). Only Brietbart, EpochTimes, ThePostMillenial even come close. Why has this happened? Accuracy.

As usual, the goal is "more matter with less art". The original site design displays 3 article summaries on the first screen; with this script you see 21 on the first screen (on a standard 1920x1080 monitor).

## Improve Zerohedge news site

Zerohedge is one of the most read finance blogs. In keeping up with zero-day news that affects the finance world, Zerohedage has become one of the most important geopolitical tracking sites in the world. Its meteoric rise over the past five years testifies to its ability to analyse and accurately predict geopolitical events - whether the reader is interested in the financial side or not.

## Brighteon NEW-VIDEOS and HEALTH RANGER REPORT

For Mike Adams' viral "Health Ranger Report": https://www.brighteon.com/channels/hrreport

The default page layout shows around 18 video titles per page and you need to scroll a few times to see all the videos. The goal here, as always, is to see as much on the first screen as possible.  This was accomplished by moving the descriptions on top of the thumbnail images and tinkering with transparency/colors to make it look great. Now, on most larger monitors (1920x1080) you should see all the videos for that page on the screen, without any need to scroll.

## Steve Bannon's WarRoom on Rumble - Not Working Correctly after Rumble changes

For Steve Bannon's WarRoomPandemic episodes archive: https://rumble.com/c/BannonsWarRoom

Cleans up the page (hides the huge identity banner that takes up 25% of the top of the screen). It also allows you to toggle between seeing only full episodes, or seeing everything.
