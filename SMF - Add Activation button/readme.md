## Simple Machines Forums - Add Activation button

SMF (Simple Machines Forum) is imho the best of the free Web Forum software. It is very easy to install on a standard cPanel account and has a large and responsive user base. Questions asked on their forum are answered in minutes - they rival StackOverflow for speed of response and quality.

However, under one specific circumstance, it can be a challenge to activate new users. In one of my scenarios, I installed an SMF web forum for a children's advocacy group who is regularly attacked by polical ideologues (even to having bags of feces thrown at them on public streets - this interesting action was taken in multiple cities across the country on the same day). Public Service union members are regularly trying to infiltrate and spy on their meetings.

So they need a secure web forum, and they do not want any ability for the public to register an account. Therefore, in SMF Admin -> Registrations -> Settings, the "Method of Registration" dropdown is set to "Registration Disabled". Curiously, though, emails are then sent to newly-created members asking them to click on a link to register. The admin would like to control this and do the activations himself, but there is no immediately visible way to do that with "Method of Registration" set to "Registration Disabled".

Therefore, this script - which creates a button.

The script also makes visible the password text when you are creating a new user (only at that time). The admin is creating the user, and it is usually more useful to see what you are typing to confirm you have not made a typo when creating the user account.

IMPORTANT: When pasting-in the script code, YOU MUST change the //@match line to reference your correct URL for your SMF forum.
