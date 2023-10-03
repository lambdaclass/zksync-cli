import chalk from "chalk";
import { $fetch } from "ofetch";

import Logger from "./logger.js";

export default async () => {
  const api_url = "https://zenquotes.io/api/random/";
  let quote = "";
  try {
    const response = await $fetch(api_url);
    const data: { q: string; a: string; h: string }[] = response.data;
    quote = data[0]["q"] + " - " + data[0]["a"];
  } catch (e) {
    quote = "No inspirational quote for you now.";
  }

  // eslint-disable-next-line no-console
  console.log(
    chalk.white(
      "\n\n\
  -██--                                                        --▓▓-  \n\
 -█▓---▓▓██▓                                               -▓██▓▓--█▓ \n\
 ▓█--▓▓▓---▓██-                                         ▓██▓---▓▓--██ \n\
 ██-██-▓█▓▓---▓█▓-                                   -▓█▓---▓▓█▓██-▓█-\n\
 █▓▓█-   -██▓---▓██-         ▓▓▓▓▓▓▓▓▓▓▓▓          -██▓---▓██-   █▓-█▓\n\
-█▓██      -██----▓██████▓▓▓▓▓---------▓▓▓▓▓▓██▓▓▓██▓---▓██-     ▓█-██\n\
-█▓█▓        ▓█▓---------------------------------▓-----██-       -█-▓█\n\
-█▓█▓      -▓█▓---------------------------------------▓██-       -█▓▓█\n\
 █▓█▓    ▓██▓--------------------------------------------▓█▓     -█▓██\n\
 █▓██  ▓█▓-------------------------------------------------▓█▓   ▓█-██\n\
 ██▓█-██-----------------------------------------------------▓█- ██-█▓\n\
 -█▓██▓-------------------------------------------------------▓███▓▓█ \n\
  ███▓----------------------------------------------------------██▓█▓ \n\
  ██▓---------▓▓▓▓▓████▓▓▓▓----------------▓▓▓▓▓▓▓▓▓▓▓▓----------███  \n\
  █▓-------▓██▓▓▓▓▓██▓▓▓▓▓██▓▓----------▓██▓▓▓▓▓▓▓▓▓▓▓██▓▓--------█▓  \n\
 ██------▓██▓▓███████▓--▓██▓▓██-------▓██▓▓███████▓-▓██▓▓██▓------▓█  \n\
-█▓-----▓█▓▓███▓▓▓▓▓▓    -███▓▓█▓▓▓▓▓██▓▓███▓▓▓▓▓▓    ███▓▓█▓------█▓ \n\
▓█-----▓█▓▓██▓▓▓▓▓▓▓-    ▓▓ ▓█▓▓██▓▓██▓███▓▓▓▓▓▓▓    ▓▓--█▓▓█▓-----▓█ \n\
██-----██▓██▓▓▓▓▓▓▓▓    ▓▓  ▓█▓▓██▓██▓▓██▓▓▓▓▓▓▓    -▓- -██▓██-----▓█-\n\
██-----██▓██▓▓▓▓▓▓▓    ▓▓- -▓█▓▓█▓-▓█▓▓██▓▓▓▓▓▓-    ▓▓  ▓██▓██------█-\n\
██-----▓█▓▓██▓▓▓▓▓    -▓-  ▓██▓▓█▓--█▓▓██▓▓▓▓▓▓    ▓▓  ▓██▓▓██-----▓█-\n\
██------▓█▓▓███▓▓-    ▓▓  ▓██▓▓█▓---▓█▓▓███▓▓▓    ▓▓  -███▓██▓-----▓█-\n\
▓█-------▓██▓████    ▓█--▓█▓▓██▓-----▓██▓▓███-   -▓▓ -██▓▓██-------██ \n\
 █▓--------▓██▓▓▓███████▓▓▓█▓-         -██▓▓▓██▓▓████▓▓▓██▓--------█▓ \n\
 ▓█   -------▓▓▓████████▓▓-    -█▓▓▓▓-   -▓███▓▓▓████▓▓---------  ▓█  \n\
  ▓█                      ▓▓   --███--    █                      ▓█-  \n\
   ▓█-                     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓-                     ▓█    \n\
    -█▓                                                       -█▓     \n\
      -█▓                                                   -█▓       \n\
        -▓█-                                              ▓█▓         \n\
           -▓█▓-                                      -▓█▓-           \n\
               -▓██▓--                          --▓██▓-               \n\
                    --▓▓█▓▓▓▓▓▓--------▓▓▓▓▓▓█▓▓--                    \n\
"
    )
  );

  Logger.info(`zeek would like to tell you "${quote}"\n\n`);
};