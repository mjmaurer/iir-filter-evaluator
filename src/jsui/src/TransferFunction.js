import React from "react";
import { Image, View } from "react-juce";

// H(z) = \frac{a_0 + a_1 z^{-1} + a_2 z^{-2} + a_3 z^{-3} + a_4 z^{-4}}{b_0 + b_1 z^{-1} + b_2 z^{-2} + b_3 z^{-3} + b_4 z^{-4}}
// z =
const TransferFunction = () => {
  return (
    <View {...styles.container}>
      <Image
        {...styles.equation}
        source={`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="346.280px" height="44.976px" viewBox="0 -1517.7 19131.8 2485" style=""><defs><path id="MJX-36-TEX-I-48" d="M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z"/><path id="MJX-36-TEX-N-28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"/><path id="MJX-36-TEX-I-7A" d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"/><path id="MJX-36-TEX-N-29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"/><path id="MJX-36-TEX-N-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"/><path id="MJX-36-TEX-I-61" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"/><path id="MJX-36-TEX-N-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"/><path id="MJX-36-TEX-N-2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"/><path id="MJX-36-TEX-N-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"/><path id="MJX-36-TEX-N-2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"/><path id="MJX-36-TEX-N-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"/><path id="MJX-36-TEX-N-33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"/><path id="MJX-36-TEX-N-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"/><path id="MJX-36-TEX-I-62" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"/></defs><g stroke="white" fill="white" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-48"/></g><g data-mml-node="mo" transform="translate(888, 0)"><use xlink:href="#MJX-36-TEX-N-28"/></g><g data-mml-node="mi" transform="translate(1277, 0)"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="mo" transform="translate(1742, 0)"><use xlink:href="#MJX-36-TEX-N-29"/></g><g data-mml-node="mo" transform="translate(2408.8, 0)"><use xlink:href="#MJX-36-TEX-N-3D"/></g><g data-mml-node="mfrac" transform="translate(3464.6, 0)"><g data-mml-node="mrow" transform="translate(220, 676)"><g data-mml-node="msub"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-61"/></g><g data-mml-node="mn" transform="translate(529, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-30"/></g></g><g data-mml-node="mo" transform="translate(1154.8, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(2155, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-61"/></g><g data-mml-node="mn" transform="translate(529, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-31"/></g></g><g data-mml-node="msup" transform="translate(3087.6, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-31"/></g></g></g><g data-mml-node="mo" transform="translate(4728.5, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(5728.7, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-61"/></g><g data-mml-node="mn" transform="translate(529, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-32"/></g></g><g data-mml-node="msup" transform="translate(6661.2, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-32"/></g></g></g><g data-mml-node="mo" transform="translate(8302.1, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(9302.4, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-61"/></g><g data-mml-node="mn" transform="translate(529, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-33"/></g></g><g data-mml-node="msup" transform="translate(10234.9, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-33"/></g></g></g><g data-mml-node="mo" transform="translate(11875.8, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(12876, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-61"/></g><g data-mml-node="mn" transform="translate(529, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-34"/></g></g><g data-mml-node="msup" transform="translate(13808.6, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-34"/></g></g></g></g><g data-mml-node="mrow" transform="translate(470, -801.7)"><g data-mml-node="msub"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-62"/></g><g data-mml-node="mn" transform="translate(429, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-30"/></g></g><g data-mml-node="mo" transform="translate(1054.8, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(2055, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-62"/></g><g data-mml-node="mn" transform="translate(429, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-31"/></g></g><g data-mml-node="msup" transform="translate(2887.6, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-31"/></g></g></g><g data-mml-node="mo" transform="translate(4528.5, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(5528.7, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-62"/></g><g data-mml-node="mn" transform="translate(429, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-32"/></g></g><g data-mml-node="msup" transform="translate(6361.2, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-32"/></g></g></g><g data-mml-node="mo" transform="translate(8002.1, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(9002.4, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-62"/></g><g data-mml-node="mn" transform="translate(429, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-33"/></g></g><g data-mml-node="msup" transform="translate(9834.9, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-33"/></g></g></g><g data-mml-node="mo" transform="translate(11475.8, 0)"><use xlink:href="#MJX-36-TEX-N-2B"/></g><g data-mml-node="msub" transform="translate(12476, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-62"/></g><g data-mml-node="mn" transform="translate(429, -150) scale(0.707)"><use xlink:href="#MJX-36-TEX-N-34"/></g></g><g data-mml-node="msup" transform="translate(13308.6, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-36-TEX-I-7A"/></g><g data-mml-node="TeXAtom" transform="translate(465, 363) scale(0.707)"><g data-mml-node="mo"><use xlink:href="#MJX-36-TEX-N-2212"/></g><g data-mml-node="mn" transform="translate(778, 0)"><use xlink:href="#MJX-36-TEX-N-34"/></g></g></g></g><rect width="15427.3" height="60" x="120" y="220"/></g></g></g></svg>
  `}
      />
      <Image
        {...styles.label}
        source={`
<svg xmlns="http://www.w3.org/2000/svg" width="56.328px" height="17.416px" viewBox="0 -880.4 3112.2 962.4" xmlns:xlink="http://www.w3.org/1999/xlink" style=""><defs><path id="MJX-40-TEX-I-7A" d="M347 338Q337 338 294 349T231 360Q211 360 197 356T174 346T162 335T155 324L153 320Q150 317 138 317Q117 317 117 325Q117 330 120 339Q133 378 163 406T229 440Q241 442 246 442Q271 442 291 425T329 392T367 375Q389 375 411 408T434 441Q435 442 449 442H462Q468 436 468 434Q468 430 463 420T449 399T432 377T418 358L411 349Q368 298 275 214T160 106L148 94L163 93Q185 93 227 82T290 71Q328 71 360 90T402 140Q406 149 409 151T424 153Q443 153 443 143Q443 138 442 134Q425 72 376 31T278 -11Q252 -11 232 6T193 40T155 57Q111 57 76 -3Q70 -11 59 -11H54H41Q35 -5 35 -2Q35 13 93 84Q132 129 225 214T340 322Q352 338 347 338Z"></path><path id="MJX-40-TEX-N-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path id="MJX-40-TEX-I-65" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path><path id="MJX-40-TEX-I-6A" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z"></path><path id="MJX-40-TEX-I-77" d="M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z"></path></defs><g stroke="white" fill="white" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><g data-mml-node="math"><g data-mml-node="mi"><use xlink:href="#MJX-40-TEX-I-7A"></use></g><g data-mml-node="mo" transform="translate(742.8, 0)"><use xlink:href="#MJX-40-TEX-N-3D"></use></g><g data-mml-node="msup" transform="translate(1798.6, 0)"><g data-mml-node="mi"><use xlink:href="#MJX-40-TEX-I-65"></use></g><g data-mml-node="TeXAtom" transform="translate(466, 413) scale(0.707)"><g data-mml-node="mi"><use xlink:href="#MJX-40-TEX-I-6A"></use></g><g data-mml-node="mi" transform="translate(412, 0)"><use xlink:href="#MJX-40-TEX-I-77"></use></g></g></g></g></g></svg>
  `}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1.0,
    alignItems: "center",
    justifyContent: "space-between",
  },
  equation: {
    width: "75%",
    aspectRatio: 281.6 / 35.0,
    placement: Image.PlacementFlags.centred,
  },
  label: {
    width: "20%",
    aspectRatio: 281.6 / 35.0,
    placement: Image.PlacementFlags.centred,

  },
};

export default TransferFunction;
