import { defineStore } from "pinia";

export const useAchievementsStore = defineStore("achievements", {
  state: () => ({
    showPopup: false, // Popup-Sichtbarkeit
    popupMessage: "", // Popup-Nachricht
    achievements: [
      {
        title: "Message in a Bottle",
        description: "Send your first message.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
            <circle cx="25" cy="25.2649" r="25" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
            <rect x="26.656" y="23.9373" width="4.27771" height="14.5623" transform="rotate(72.4179 26.656 23.9373)" fill="#FFD8C0" style="fill:#FFD8C0;fill:color(display-p3 1.0000 0.8484 0.7542);fill-opacity:1;"/>
            <ellipse cx="27.3024" cy="25.9762" rx="2.13885" ry="0.809015" transform="rotate(72.4179 27.3024 25.9762)" fill="url(#paint0_radial_127_79)" style=""/>
            <ellipse cx="13.42" cy="30.3751" rx="2.13885" ry="0.809015" transform="rotate(72.4179 13.42 30.3751)" fill="#FFD8C0" style="fill:#FFD8C0;fill:color(display-p3 1.0000 0.8484 0.7542);fill-opacity:1;"/>
            <rect x="19.5305" y="25.554" width="5.49991" height="0.809015" rx="0.404508" transform="rotate(72.4179 19.5305 25.554)" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <ellipse cx="0.35331" cy="1.14616" rx="0.35331" ry="1.14616" transform="matrix(0.76865 0.639669 -0.747874 0.663841 21.5564 26.5144)" stroke="#5F0F2D" style="stroke:#5F0F2D;stroke:color(display-p3 0.3725 0.0586 0.1759);stroke-opacity:1;" stroke-width="0.5"/>
            <ellipse cx="0.35331" cy="1.1444" rx="0.35331" ry="1.1444" transform="matrix(0.259976 -0.965615 -0.993711 -0.111977 22.2637 28.855)" stroke="#C51F5D" style="stroke:#C51F5D;stroke:color(display-p3 0.7725 0.1216 0.3647);stroke-opacity:1;" stroke-width="0.5"/>
            <rect x="29.1011" y="22.604" width="7.33321" height="1.8333" transform="rotate(-33 29.1011 22.604)" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <rect width="7.33321" height="1.8333" transform="matrix(0.83867 -0.544639 -0.544639 -0.83867 29.1011 22.604)" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M11.6746 33.9202L29.1 22.604L28.1015 21.0664L28.614 20.7336L27.9351 20.8102L27.0897 20.6305L26.078 20.1945L25.0279 19.4191L24.6053 19.3293L23.9263 19.4059L23.2857 19.8219L21.7482 20.8204L17.3918 23.6495L13.0355 26.4785L10.8573 27.893L9.76818 28.6003L9.44786 28.8083L9.10177 29.3974L9.17834 30.0763L9.42796 30.4607L10.1768 31.6139L11.6746 33.9202Z" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M33.2347 17.7327L33.7393 17.405L33.5729 17.1487L33.4897 17.0206L33.2803 16.9744L33.1542 17.0563L33.028 17.1382L32.9772 17.3534L32.9851 17.3483L33.0683 17.4764L33.2347 17.7327Z" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M32.21 18.3984L32.7147 18.0707L32.5482 17.8145L32.465 17.6864L32.2557 17.6401L32.1295 17.7221L32.0034 17.804L31.9525 18.0192L31.9604 18.0141L32.0436 18.1422L32.21 18.3984Z" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M35.232 20.8079L35.7366 20.4802L35.903 20.7364L35.9863 20.8645L35.9433 21.0746L35.8171 21.1565L35.691 21.2385L35.4737 21.1974L35.4816 21.1923L35.3984 21.0641L35.232 20.8079Z" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M34.2066 21.4736L34.7112 21.1459L34.8777 21.4022L34.9609 21.5303L34.9179 21.7404L34.7918 21.8223L34.6656 21.9042L34.4484 21.8631L34.4562 21.858L34.373 21.7299L34.2066 21.4736Z" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M11.6746 33.9204L29.1 22.6042L30.0985 24.1417L30.611 23.8089L30.2649 24.398L30.0852 25.2433L30.0719 26.3449L30.3532 27.6196L30.2634 28.0423L29.9173 28.6313L29.2766 29.0474L27.7391 30.0459L23.3827 32.8749L19.0264 35.704L16.8482 37.1185L15.7591 37.8258L15.4388 38.0338L14.7599 38.1104L14.1708 37.7643L13.9212 37.3799L13.1723 36.2267L11.6746 33.9204Z" fill="#C51F5D" fill-opacity="0.5" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:0.5;"/>
            <path d="M35.2507 18.6096L38.3258 16.6126L38.5754 16.997L38.7337 17.5774L38.892 18.1577L38.7093 18.5496L37.3544 19.1562L36.0828 19.8909L35.2507 18.6096Z" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <path d="M35.2507 18.6096L38.3258 16.6126L38.0762 16.2283L37.6104 15.8476L37.1446 15.467L36.7123 15.4745L35.6071 16.4655L34.4187 17.3283L35.2507 18.6096Z" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <path d="M32.5343 18.9161L28.6006 21.835L28.0049 22.0397L27.2427 21.9881L26.231 21.5522L25.2192 21.1162L24.5403 21.1928L10.3696 29.6667L17.2885 25.1735L24.2075 20.6803L24.8864 20.6037L25.8981 21.0397L26.9099 21.4756L27.7552 21.6553L28.4342 21.5787L32.5343 18.9161Z" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
            <defs>
            <radialGradient id="paint0_radial_127_79" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3024 25.9762) scale(2.13885 0.809015)">
            <stop stop-color="#FFD8C0" style="stop-color:#FFD8C0;stop-color:color(display-p3 1.0000 0.8484 0.7542);stop-opacity:1;"/>
            <stop offset="1" stop-color="#998273" style="stop-color:#998273;stop-color:color(display-p3 0.6000 0.5090 0.4525);stop-opacity:1;"/>
            </radialGradient>
            </defs>
            </svg>`,
        achieved: true,
      },
      {
        title: "Ten to Talk",
        description: "Send your first 10 messages.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="46" viewBox="0 0 42 46" fill="none">
            <path d="M1.3125 1.06982H40.6875L42 33.1628H0L1.3125 1.06982Z" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <ellipse cx="21" cy="1.06977" rx="19.6875" ry="1.06977" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <path d="M21 46C31.2513 46 42 33.1628 42 33.1628H0C0 33.1628 10.7487 46 21 46Z" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <path d="M6 5.20752H36L37 31.2453H5L6 5.20752Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <ellipse cx="21" cy="5.20752" rx="15" ry="0.867925" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M21 41.6604C28.8105 41.6604 37 31.2453 37 31.2453H5C5 31.2453 13.1895 41.6604 21 41.6604Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M17.2983 15.4545V30H13.7898V18.7358H13.7045L10.4517 20.7244V17.6847L14.0384 15.4545H17.2983ZM24.9295 30.3551C23.6605 30.3551 22.5668 30.0545 21.6482 29.4531C20.7297 28.8471 20.0218 27.9782 19.5246 26.8466C19.0275 25.7102 18.7813 24.3442 18.786 22.7486C18.7907 21.1529 19.0393 19.7988 19.5317 18.6861C20.0289 17.5687 20.7344 16.7187 21.6482 16.1364C22.5668 15.5492 23.6605 15.2557 24.9295 15.2557C26.1984 15.2557 27.2922 15.5492 28.2107 16.1364C29.134 16.7187 29.8442 17.5687 30.3414 18.6861C30.8386 19.8035 31.0848 21.1577 31.08 22.7486C31.08 24.349 30.8315 25.7173 30.3343 26.8537C29.8371 27.9901 29.1293 28.8589 28.2107 29.4602C27.2969 30.0568 26.2031 30.3551 24.9295 30.3551ZM24.9295 27.4787C25.687 27.4787 26.3002 27.0928 26.769 26.321C27.2377 25.5445 27.4697 24.3537 27.465 22.7486C27.465 21.6974 27.3585 20.831 27.1454 20.1491C26.9323 19.4626 26.6364 18.9512 26.2576 18.6151C25.8788 18.2789 25.4361 18.1108 24.9295 18.1108C24.1766 18.1108 23.5682 18.492 23.1042 19.2543C22.6402 20.0118 22.4058 21.1766 22.4011 22.7486C22.3963 23.8139 22.4981 24.697 22.7065 25.3977C22.9195 26.0985 23.2178 26.6217 23.6013 26.9673C23.9849 27.3082 24.4276 27.4787 24.9295 27.4787Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            </svg>`,
        achieved: false,
      },
      {
        title: "Talk Rookie",
        description: "Join your first chat.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="52" viewBox="0 0 49 52" fill="none">
            <ellipse cx="24.4706" cy="27.8415" rx="18.3529" ry="15.6062" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <path d="M6.11965 47.172L19.3664 42.5155C17.8547 32.7239 17.182 23.482 11.2753 27.4045L6.11965 47.172Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <g filter="url(#filter0_d_137_58)">
            <ellipse cx="24.4706" cy="27.9275" rx="14.8571" ry="12.6336" fill="white" style="fill:white;fill-opacity:1;"/>
            <path d="M9.61461 43.5763L20.3382 39.8067C19.1144 31.8803 18.5699 24.3987 13.7883 27.5741L9.61461 43.5763Z" fill="white" style="fill:white;fill-opacity:1;"/>
            </g>
            <path d="M24.4705 0L48.941 7.86552H0L24.4705 0Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M24.4705 10.4873C35.8901 10.4873 36.7058 13.1091 36.7058 13.1091L48.941 7.86545H0L12.2353 13.1091C12.2353 13.1091 13.0509 10.4873 24.4705 10.4873Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M38.4537 14.42C38.4537 19.2633 40.6263 10.4873 24.4495 10.4873C8.27266 10.4873 10.4873 19.2633 10.4873 14.42C10.4873 9.5767 8.27266 6.70044 24.4495 6.70044C40.6263 6.70044 38.4537 9.5767 38.4537 14.42Z" fill="url(#paint0_radial_137_58)" style=""/>
            <defs>
            <filter id="filter0_d_137_58" x="5.61353" y="15.2939" width="37.7141" height="36.2825" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_137_58"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_137_58" result="shape"/>
            </filter>
            <radialGradient id="paint0_radial_137_58" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.4681 11.2892) rotate(179.714) scale(14.4178 4.6978)">
            <stop offset="0.14" stop-color="#587FAD" style="stop-color:#587FAD;stop-color:color(display-p3 0.3440 0.4969 0.6784);stop-opacity:1;"/>
            <stop offset="1" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            </radialGradient>
            </defs>
            </svg>`,
        achieved: false,
      },
      {
        title: "Popular",
        description: "Accept a group invitation.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="45" height="38" viewBox="0 0 45 38" fill="none">
            <path d="M29.053 20.2582L30.857 25.8105L26.134 29.242L31.972 29.242L33.776 34.7943L35.5801 29.242L41.4181 29.242L36.6951 25.8105L38.4991 20.2582L33.776 23.6897L29.053 20.2582Z" fill="url(#paint0_radial_140_97)" style=""/>
            <path d="M15.9468 20.2582L14.1427 25.8105L18.8658 29.242L13.0278 29.242L11.2237 34.7943L9.41967 29.242L3.58164 29.242L8.30471 25.8105L6.50066 20.2582L11.2237 23.6897L15.9468 20.2582Z" fill="url(#paint1_radial_140_97)" style=""/>
            <path d="M22.4992 6.42847L24.9046 13.8315H32.6887L26.3912 18.4069L28.7966 25.8099L22.4992 21.2346L16.2018 25.8099L18.6072 18.4069L12.3098 13.8315H20.0938L22.4992 6.42847Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="21.9634" width="1.07138" height="4.28553" rx="0.535691" fill="url(#paint2_diamond_140_97)" style=""/>
            <path d="M9.98346 5.38386C9.77426 5.17466 9.77426 4.83547 9.98346 4.62627V4.62627C10.1927 4.41707 10.5318 4.41707 10.741 4.62627L13.0138 6.89902C13.223 7.10822 13.223 7.4474 13.0138 7.6566V7.6566C12.8046 7.8658 12.4654 7.8658 12.2562 7.6566L9.98346 5.38386Z" fill="url(#paint3_diamond_140_97)" style=""/>
            <path d="M35.0143 5.38386C35.2235 5.17466 35.2235 4.83547 35.0143 4.62627V4.62627C34.8051 4.41707 34.466 4.41707 34.2568 4.62627L31.984 6.89902C31.7748 7.10822 31.7748 7.4474 31.984 7.6566V7.6566C32.1932 7.8658 32.5324 7.8658 32.7416 7.6566L35.0143 5.38386Z" fill="url(#paint4_diamond_140_97)" style=""/>
            <rect x="4.82129" y="17.6777" width="1.07138" height="4.28553" rx="0.535691" transform="rotate(-90 4.82129 17.6777)" fill="url(#paint5_diamond_140_97)" style=""/>
            <rect x="40.1768" y="16.6064" width="1.07138" height="4.28553" rx="0.535691" transform="rotate(90 40.1768 16.6064)" fill="url(#paint6_diamond_140_97)" style=""/>
            <defs>
            <radialGradient id="paint0_radial_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.9594 37.0178) rotate(-87.4698) scale(18.4891)">
            <stop offset="0.384711" stop-color="#5F0F2D" style="stop-color:#5F0F2D;stop-color:color(display-p3 0.3725 0.0586 0.1759);stop-opacity:1;"/>
            <stop offset="0.716988" stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            </radialGradient>
            <radialGradient id="paint1_radial_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.0403 37.0178) rotate(-92.5302) scale(18.4891)">
            <stop offset="0.384711" stop-color="#5F0F2D" style="stop-color:#5F0F2D;stop-color:color(display-p3 0.3725 0.0586 0.1759);stop-opacity:1;"/>
            <stop offset="0.716988" stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            </radialGradient>
            <radialGradient id="paint2_diamond_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.4991 2.14276) rotate(90) scale(2.14276 0.535691)">
            <stop stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            <stop offset="1" stop-color="#235795" stop-opacity="0.7" style="stop-color:#235795;stop-color:color(display-p3 0.1385 0.3419 0.5833);stop-opacity:0.7;"/>
            </radialGradient>
            <radialGradient id="paint3_diamond_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.4987 6.1415) rotate(45) scale(2.14276 0.535691)">
            <stop stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            <stop offset="1" stop-color="#235795" stop-opacity="0.7" style="stop-color:#235795;stop-color:color(display-p3 0.1385 0.3419 0.5833);stop-opacity:0.7;"/>
            </radialGradient>
            <radialGradient id="paint4_diamond_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.4991 6.1415) rotate(135) scale(2.14276 0.535691)">
            <stop stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            <stop offset="1" stop-color="#235795" stop-opacity="0.7" style="stop-color:#235795;stop-color:color(display-p3 0.1385 0.3419 0.5833);stop-opacity:0.7;"/>
            </radialGradient>
            <radialGradient id="paint5_diamond_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.35698 19.8205) rotate(90) scale(2.14276 0.535691)">
            <stop stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            <stop offset="1" stop-color="#235795" stop-opacity="0.7" style="stop-color:#235795;stop-color:color(display-p3 0.1385 0.3419 0.5833);stop-opacity:0.7;"/>
            </radialGradient>
            <radialGradient id="paint6_diamond_140_97" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40.7124 18.7492) rotate(90) scale(2.14276 0.535691)">
            <stop stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            <stop offset="1" stop-color="#235795" stop-opacity="0.7" style="stop-color:#235795;stop-color:color(display-p3 0.1385 0.3419 0.5833);stop-opacity:0.7;"/>
            </radialGradient>
            </defs>
            </svg>`,
        achieved: false,
      },
      {
        title: "Tick-Tock",
        description: "First Message at a Specific Time",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="25" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <circle cx="25" cy="25" r="20" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <path d="M34.5 25H30.5H25V8.5" stroke="#C51F5D" style="stroke:#C51F5D;stroke:color(display-p3 0.7725 0.1216 0.3647);stroke-opacity:1;" stroke-width="2"/>
            <path d="M38 25L35.5816 24.2142V21.6713L34.0869 23.7286L31.6684 22.9428L33.1631 25L31.6684 27.0572L34.0869 26.2714L35.5816 28.3287V25.7858L38 25Z" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <path d="M25 5L24.2142 7.41844H21.6713L23.7286 8.91312L22.9428 11.3316L25 9.83688L27.0572 11.3316L26.2714 8.91312L28.3287 7.41844H25.7858L25 5Z" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            </svg>`,
        achieved: false,
      },
      {
        title: "Chat Conqueror",
        description: "Number of Chats Joined",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M23.368 30.0148L38.602 8.20266L43.4761 30.0148H23.368Z" fill="url(#paint0_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M26.9821 30.0148L11.7481 8.20266L6.87404 30.0148H26.9821Z" fill="url(#paint1_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M9.94647 30.0147L25 3.94116L40.0536 30.0147H9.94647Z" fill="#243447" stroke="black" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;stroke:black;stroke-opacity:1;"/>
            <path d="M45.1327 30.0147H33.1082L47.4514 5.1715L45.1327 30.0147Z" fill="#243447" stroke="black" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;stroke:black;stroke-opacity:1;"/>
            <path d="M4.86726 30.0147H16.8918L2.54857 5.1715L4.86726 30.0147Z" fill="#243447" stroke="black" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;stroke:black;stroke-opacity:1;"/>
            <path d="M9 17.5L13.5 25L19.5 15L25.7352 15.9927L30.5 15L37 25.5L42 16L43 29.5H26H8.5L9 17.5Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M4.20965 35.897L4.85398 30.647H45.1435L45.7611 35.897H4.20965Z" fill="url(#paint2_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M3.17647 2.57359C3.17647 3.31267 2.57732 3.91182 1.83824 3.91182C1.09915 3.91182 0.5 3.31267 0.5 2.57359C0.5 1.8345 1.09915 1.23535 1.83824 1.23535C2.57732 1.23535 3.17647 1.8345 3.17647 2.57359Z" fill="url(#paint3_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M12.9191 5.88242C12.9191 6.62151 12.32 7.22066 11.5809 7.22066C10.8418 7.22066 10.2427 6.62151 10.2427 5.88242C10.2427 5.14334 10.8418 4.54419 11.5809 4.54419C12.32 4.54419 12.9191 5.14334 12.9191 5.88242Z" fill="url(#paint4_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M40.1066 5.88242C40.1066 6.62151 39.5075 7.22066 38.7684 7.22066C38.0293 7.22066 37.4302 6.62151 37.4302 5.88242C37.4302 5.14334 38.0293 4.54419 38.7684 4.54419C39.5075 4.54419 40.1066 5.14334 40.1066 5.88242Z" fill="url(#paint5_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M49.5 2.57359C49.5 3.31267 48.9008 3.91182 48.1617 3.91182C47.4226 3.91182 46.8235 3.31267 46.8235 2.57359C46.8235 1.8345 47.4226 1.23535 48.1617 1.23535C48.9008 1.23535 49.5 1.8345 49.5 2.57359Z" fill="url(#paint6_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <path d="M26.3383 1.83824C26.3383 2.57732 25.7392 3.17647 25.0001 3.17647C24.261 3.17647 23.6619 2.57732 23.6619 1.83824C23.6619 1.09915 24.261 0.5 25.0001 0.5C25.7392 0.5 26.3383 1.09915 26.3383 1.83824Z" fill="url(#paint7_linear_143_163)" stroke="black" style="stroke:black;stroke-opacity:1;"/>
            <defs>
            <linearGradient id="paint0_linear_143_163" x1="33.2545" y1="6.98535" x2="33.2545" y2="30.5148" gradientUnits="userSpaceOnUse">
            <stop offset="0.155" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            <stop offset="0.59" stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint1_linear_143_163" x1="17.0956" y1="6.98535" x2="17.0956" y2="30.5148" gradientUnits="userSpaceOnUse">
            <stop offset="0.155" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            <stop offset="0.59" stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint2_linear_143_163" x1="25" y1="49.8161" x2="24.9839" y2="30.147" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            <stop offset="1" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint3_linear_143_163" x1="1.83824" y1="-5.8823" x2="1.83824" y2="4.41182" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            <stop offset="1" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint4_linear_143_163" x1="11.3971" y1="-0.919046" x2="11.5809" y2="7.72066" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            <stop offset="1" stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint5_linear_143_163" x1="38.603" y1="-0.551399" x2="38.7684" y2="7.72066" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            <stop offset="1" stop-color="#0B1B2F" style="stop-color:#0B1B2F;stop-color:color(display-p3 0.0435 0.1074 0.1833);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint6_linear_143_163" x1="48.1617" y1="-7.35288" x2="48.1617" y2="4.41182" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            <stop offset="1" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            </linearGradient>
            <linearGradient id="paint7_linear_143_163" x1="25.0001" y1="-5.33088" x2="25.0001" y2="3.67647" gradientUnits="userSpaceOnUse">
            <stop stop-color="#C51F5D" style="stop-color:#C51F5D;stop-color:color(display-p3 0.7725 0.1216 0.3647);stop-opacity:1;"/>
            <stop offset="0.989647" stop-color="#243447" style="stop-color:#243447;stop-color:color(display-p3 0.1412 0.2039 0.2784);stop-opacity:1;"/>
            </linearGradient>
            </defs>
            </svg>`,
        achieved: true,
      },
      {
        title: "Emoji Enthusiast",
        description: "Number of Emojis Sent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <rect x="15.625" y="3.125" width="18.75" height="3.125" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <rect x="15.625" width="18.75" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="50" y="15.625" width="18.75" height="3.125" transform="rotate(90 50 15.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="34.375" y="3.125" width="6.25" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="40.625" y="6.25" width="3.125" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="43.75" y="9.375" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="46.875" y="34.375" width="6.25" height="3.125" transform="rotate(90 46.875 34.375)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="43.75" y="40.625" width="3.125" height="3.125" transform="rotate(90 43.75 40.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="40.625" y="43.75" width="3.125" height="6.25" transform="rotate(90 40.625 43.75)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="50" y="15.625" width="18.75" height="3.125" transform="rotate(90 50 15.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="34.375" y="3.125" width="6.25" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="40.625" y="6.25" width="3.125" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="43.75" y="9.375" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="46.875" y="34.375" width="6.25" height="3.125" transform="rotate(90 46.875 34.375)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="43.75" y="40.625" width="3.125" height="3.125" transform="rotate(90 43.75 40.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="40.625" y="43.75" width="3.125" height="6.25" transform="rotate(90 40.625 43.75)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="34.375" y="50" width="18.75" height="3.125" transform="rotate(180 34.375 50)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect y="34.375" width="18.75" height="3.125" transform="rotate(-90 0 34.375)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="15.625" y="46.875" width="6.25" height="3.125" transform="rotate(180 15.625 46.875)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="9.375" y="43.75" width="3.125" height="3.125" transform="rotate(180 9.375 43.75)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="6.25" y="40.625" width="3.125" height="6.25" transform="rotate(180 6.25 40.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="3.125" y="15.625" width="6.25" height="3.125" transform="rotate(-90 3.125 15.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="6.25" y="9.375" width="3.125" height="3.125" transform="rotate(-90 6.25 9.375)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="9.375" y="6.25" width="3.125" height="6.25" transform="rotate(-90 9.375 6.25)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect y="34.375" width="18.75" height="3.125" transform="rotate(-90 0 34.375)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="15.625" y="46.875" width="6.25" height="3.125" transform="rotate(180 15.625 46.875)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="9.375" y="43.75" width="3.125" height="3.125" transform="rotate(180 9.375 43.75)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="6.25" y="40.625" width="3.125" height="6.25" transform="rotate(180 6.25 40.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="3.125" y="15.625" width="6.25" height="3.125" transform="rotate(-90 3.125 15.625)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="6.25" y="9.375" width="3.125" height="3.125" transform="rotate(-90 6.25 9.375)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="9.375" y="6.25" width="3.125" height="6.25" transform="rotate(-90 9.375 6.25)" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="9.375" y="6.25" width="3.125" height="3.125" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <rect x="6.25" y="9.375" width="3.125" height="3.125" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <rect x="3.125" y="15.625" width="3.125" height="3.125" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <rect width="3.125" height="3.125" transform="matrix(-1 0 0 1 40.625 6.25)" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <rect width="3.125" height="3.125" transform="matrix(-1 0 0 1 43.75 9.375)" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <rect width="3.125" height="3.125" transform="matrix(-1 0 0 1 46.875 15.625)" fill="#FFAACA" style="fill:#FFAACA;fill:color(display-p3 1.0000 0.6667 0.7912);fill-opacity:1;"/>
            <path d="M25 6.25H37.5V9.375H40.625V12.5H43.75V18.75H46.875V25V34.375H43.75V40.625H40.625V43.75H34.375V46.875H25V43.75V40.625V31.25V23.4375V6.25Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <path d="M25 6.25H12.5V9.375H9.375V12.5H6.25V18.75H3.125V25V34.375H6.25V40.625H9.375V43.75H15.625V46.875H25V43.75V40.625V31.25V23.4375V6.25Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="9.375" y="18.75" width="3.125" height="6.25" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
            <rect x="12.5" y="15.625" width="6.25" height="3.125" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
            <rect x="18.75" y="18.75" width="3.125" height="6.25" fill="#D9D9D9" style="fill:#D9D9D9;fill:color(display-p3 0.8510 0.8510 0.8510);fill-opacity:1;"/>
            <rect x="9.375" y="18.75" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="12.5" y="15.625" width="6.25" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="18.75" y="18.75" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="28.125" y="18.75" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="31.25" y="15.625" width="6.25" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="37.5" y="18.75" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="12.5" y="28.125" width="25" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="12.5" y="31.25" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="34.375" y="31.25" width="3.125" height="6.25" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="18.75" y="40.625" width="12.5" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="15.625" y="37.5" width="3.125" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <rect x="31.25" y="37.5" width="3.125" height="3.125" fill="#0B1B2F" style="fill:#0B1B2F;fill:color(display-p3 0.0435 0.1074 0.1833);fill-opacity:1;"/>
            <path d="M15.625 31.25H34.375V37.5H31.25V40.625H18.75V37.5H15.625V31.25Z" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            </svg>`,
        achieved: false,
      },
      {
        title: "Log-in Legend",
        description: "Longest Streak of Logins",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="37" height="50" viewBox="0 0 37 50" fill="none">
            <rect x="36.3635" y="25" width="13.6364" height="2.27273" transform="rotate(90 36.3635 25)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="34.0908" y="38.6365" width="4.54545" height="2.27273" transform="rotate(90 34.0908 38.6365)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="31.8181" y="43.1819" width="2.27273" height="2.27273" transform="rotate(90 31.8181 43.1819)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="29.5454" y="45.4546" width="2.27273" height="4.54545" transform="rotate(90 29.5454 45.4546)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="25" y="50" width="13.6364" height="2.27273" transform="rotate(180 25 50)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect y="38.6365" width="13.6364" height="2.27273" transform="rotate(-90 0 38.6365)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="11.3635" y="47.7273" width="4.54545" height="2.27273" transform="rotate(180 11.3635 47.7273)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="6.81812" y="45.4546" width="2.27273" height="2.27273" transform="rotate(180 6.81812 45.4546)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="6.81812" y="45.4546" width="2.27273" height="2.27273" transform="rotate(180 6.81812 45.4546)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="4.54541" y="43.1819" width="2.27273" height="4.54545" transform="rotate(180 4.54541 43.1819)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="18.1819" y="31.8181" width="2.27273" height="2.27273" transform="rotate(180 18.1819 31.8181)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="18.1819" y="25" width="2.27273" height="4.54545" transform="rotate(180 18.1819 25)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="20.4546" y="9.09082" width="2.27273" height="2.27273" transform="rotate(180 20.4546 9.09082)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="25" y="6.81812" width="2.27273" height="2.27273" transform="rotate(180 25 6.81812)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="31.8181" y="2.27271" width="2.27273" height="2.27273" transform="rotate(180 31.8181 2.27271)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="29.5454" y="11.3635" width="2.27273" height="4.54545" transform="rotate(180 29.5454 11.3635)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="31.8181" y="18.1819" width="2.27273" height="6.81818" transform="rotate(180 31.8181 18.1819)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="34.0908" y="25" width="2.27273" height="6.81818" transform="rotate(180 34.0908 25)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="31.8181" y="6.81812" width="2.27273" height="2.27273" transform="rotate(180 31.8181 6.81812)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="29.5454" y="4.54541" width="4.54545" height="2.27273" transform="rotate(180 29.5454 4.54541)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="22.7273" y="6.81812" width="2.27273" height="2.27273" transform="rotate(180 22.7273 6.81812)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="18.1819" y="11.3635" width="2.27273" height="2.27273" transform="rotate(180 18.1819 11.3635)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <path d="M15.9092 20.4546H13.6365V11.3637H15.9092V20.4546Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="20.4546" y="29.5454" width="2.27273" height="4.54545" transform="rotate(180 20.4546 29.5454)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="15.9092" y="34.0908" width="4.54545" height="2.27273" transform="rotate(180 15.9092 34.0908)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="11.3635" y="31.8181" width="2.27273" height="2.27273" transform="rotate(180 11.3635 31.8181)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="9.09082" y="29.5454" width="2.27273" height="6.81818" transform="rotate(180 9.09082 29.5454)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="6.81812" y="22.7273" width="2.27273" height="4.54545" transform="rotate(180 6.81812 22.7273)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="4.54541" y="15.9092" width="2.27273" height="2.27273" transform="rotate(180 4.54541 15.9092)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="4.54541" y="25" width="2.27273" height="2.27273" transform="rotate(180 4.54541 25)" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <path d="M4.54543 22.7272H6.81816V29.5454H9.09089V31.8181H11.3636V34.0909H15.9091V31.8181H18.1818V29.5454H20.4545V25H18.1818V20.4545H15.9091V11.3636H18.1818V9.09086H20.4545V6.81814H25V4.54541H29.5454V6.81814H27.2727V11.3636H29.5454V18.1818H31.8182V25H34.0909V38.6363H31.8182V43.1818H29.5454V45.4545H25V47.7272H11.3636V45.4545H6.81816V43.1818H4.54543V38.6363H2.27271V25H4.54543V22.7272Z" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <path d="M15.909 38.6365V40.9092H18.1817V43.1819H20.4544V40.9092H22.7272V38.6365H24.9999V43.1819H22.7272V45.4547V47.7274H13.6363V43.1819H11.3635V38.6365H15.909Z" fill="#E985AA" style="fill:#E985AA;fill:color(display-p3 0.9126 0.5207 0.6671);fill-opacity:1;"/>
            <path d="M9.09082 36.3636H18.1817V34.0908H20.4545V31.8181H24.9999V36.3636H27.2726V45.4545H24.9999V47.7272H22.7272V43.1818H24.9999V38.6363H22.7272V40.909H20.4545V43.1818H18.1817V40.909H15.909V38.6363H11.3635V43.1818H13.6363V45.4545H9.09082V36.3636Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <path d="M15.9092 43.1819H18.1819V45.4546H20.4546V47.7273H15.9092V43.1819Z" fill="white" style="fill:white;fill-opacity:1;"/>
            </svg>`,
        achieved: false,
      },
      {
        title: "Picture Perfect",
        description: "Number of Images Sent",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="32" viewBox="0 0 44 32" fill="none">
            <rect x="1" y="11" width="14" height="17" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="36" y="11" width="7" height="17" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <rect x="15" y="11" width="20" height="17" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M22 5H5H4V6H3H2V8H1V10H22V5Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M21.9976 31H4.99756H3.99756V30.6154V30H2.99756H1.99756L1.99976 29L1.9978 28H21.9976V31Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M21.9976 31H39.9976V30.6154V30H41.9976V29.8462V29V28H21.9976V31Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <path d="M22 5H39H40V6H41H42V8H43V10H22V5Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <rect x="23" y="12" width="4" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="21" y="13" width="2" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="20" y="14" width="1" height="2" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="16" width="4" height="1" transform="rotate(90 31 16)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="30" y="14" width="2" height="1" transform="rotate(90 30 14)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="29" y="13" width="1" height="2" transform="rotate(90 29 13)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="27" y="24" width="4" height="1" transform="rotate(180 27 24)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <path d="M29 23H27V22H29V23Z" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="30" y="22" width="1" height="2" transform="rotate(180 30 22)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="19" y="20" width="4" height="1" transform="rotate(-90 19 20)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="20" y="22" width="2" height="1" transform="rotate(-90 20 22)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="21" y="23" width="1" height="2" transform="rotate(-90 21 23)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="22" y="9" width="6" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="33" y="12" width="3" height="1" transform="rotate(90 33 12)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="10" width="1" height="3" transform="rotate(90 31 10)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="32" y="12" width="1" height="1" transform="rotate(180 32 12)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="34" y="15" width="6" height="1" transform="rotate(90 34 15)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="26" width="3" height="1" transform="rotate(180 31 26)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="33" y="24" width="1" height="3" transform="rotate(180 33 24)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="25" width="1" height="1" transform="rotate(-90 31 25)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="28" y="27" width="6" height="1" transform="rotate(180 28 27)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="17" y="24" width="3" height="1" transform="rotate(-90 17 24)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="19" y="26" width="1" height="3" transform="rotate(-90 19 26)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="18" y="24" width="1" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="16" y="21" width="6" height="1" transform="rotate(-90 16 21)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="19" y="10" width="3" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="17" y="12" width="1" height="3" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="19" y="11" width="1" height="1" transform="rotate(90 19 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="10" width="4" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="10" width="4" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="10" width="4" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="9" y="10" width="10" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="9" y="10" width="10" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="9" y="10" width="10" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="10" width="12" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="10" width="12" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="31" y="10" width="12" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="28" width="42" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="28" width="42" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="28" width="42" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="36" y="11" width="17" height="1" transform="rotate(90 36 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="36" y="11" width="17" height="1" transform="rotate(90 36 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="36" y="11" width="17" height="1" transform="rotate(90 36 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="15" y="11" width="17" height="1" transform="rotate(90 15 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="15" y="11" width="17" height="1" transform="rotate(90 15 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="15" y="11" width="17" height="1" transform="rotate(90 15 11)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="5" y="19" width="2" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="5" y="22" width="2" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="8" y="20" width="2" height="1" transform="rotate(90 8 20)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="5" y="20" width="2" height="1" transform="rotate(90 5 20)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="8" y="2" width="2" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="11" y="3" width="1" height="1" transform="rotate(90 11 3)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="8" y="3" width="1" height="1" transform="rotate(90 8 3)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="21" y="2" width="2" height="1" transform="rotate(90 21 2)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="22" y="1" width="1" height="1" transform="rotate(90 22 1)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="29" y="1" width="1" height="1" transform="rotate(90 29 1)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="28" y="1" width="6" height="1" transform="rotate(180 28 1)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="30" y="2" width="2" height="1" transform="rotate(90 30 2)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="5" y="8" width="1" height="2" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="6" y="7" width="1" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="7" y="8" width="1" height="2" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="5" y="12" width="3" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="9" y="10" width="2" height="1" transform="rotate(90 9 10)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="5" y="10" width="2" height="1" transform="rotate(90 5 10)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="4" y="4" width="36" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect width="2" height="1" transform="matrix(1 0 0 -1 40 31)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect width="2" height="1" transform="matrix(0 1 1 0 42 28)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect width="2" height="1" transform="matrix(0 1 1 0 1 28)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 4 30)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="40" y="5" width="2" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="42" y="8" width="2" height="1" transform="rotate(-90 42 8)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="8" width="2" height="1" transform="rotate(-90 1 8)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="4" y="6" width="2" height="1" transform="rotate(180 4 6)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect width="20" height="1" transform="matrix(0 1 1 0 43 8)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect width="36" height="1" transform="matrix(1 0 0 -1 4 32)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="1" y="8" width="20" height="1" transform="rotate(90 1 8)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <path d="M21 2H22V1H28V2H29V4H21V2Z" fill="#243447" style="fill:#243447;fill:color(display-p3 0.1412 0.2039 0.2784);fill-opacity:1;"/>
            <rect x="8" y="3" width="2" height="1" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <rect x="34" y="2" width="2" height="1" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="37" y="3" width="1" height="1" transform="rotate(90 37 3)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="34" y="3" width="1" height="1" transform="rotate(90 34 3)" fill="#141D26" style="fill:#141D26;fill:color(display-p3 0.0784 0.1137 0.1490);fill-opacity:1;"/>
            <rect x="34" y="3" width="2" height="1" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <path d="M5 10H6V8H7V10H8V12H5V10Z" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <rect x="5" y="20" width="2" height="2" fill="#5F0F2D" style="fill:#5F0F2D;fill:color(display-p3 0.3725 0.0586 0.1759);fill-opacity:1;"/>
            <path d="M19 11H22V10H28V11H31V12H32V15H33V16V20V21H32V24H31V25H28V26H22V25H19V24H18V23V21H17V15H18V12H23V13H21V14H20V16H19V20H20V22H21V23H23V24H27V23H29V22H30V20H31V16H30V14H29V13H27V12H19V11Z" fill="#C51F5D" style="fill:#C51F5D;fill:color(display-p3 0.7725 0.1216 0.3647);fill-opacity:1;"/>
            <path d="M23 13H27V14H29V16H30V20H29V22H27V23H23V22H21V20H20V16H21V14H23V13Z" fill="#587FAD" style="fill:#587FAD;fill:color(display-p3 0.3440 0.4969 0.6784);fill-opacity:1;"/>
            <path d="M21 19H22V18H23V17H24V16H25V17H24V18H23V19H22V20H21V19Z" fill="#6FB9FF" style="fill:#6FB9FF;fill:color(display-p3 0.4333 0.7261 1.0000);fill-opacity:1;"/>
            <path d="M25 19H26V18H27V17H28V16H29V17H28V18H27V19H26V20H25V19Z" fill="#6FB9FF" style="fill:#6FB9FF;fill:color(display-p3 0.4333 0.7261 1.0000);fill-opacity:1;"/>
            <path d="M23 17H24V16H25V15H26V14H27V15H26V16H25V17H24V18H23V17Z" fill="#6FB9FF" style="fill:#6FB9FF;fill:color(display-p3 0.4333 0.7261 1.0000);fill-opacity:1;"/>
            <path d="M23 21H24V20H25V19H26V18H27V19H26V20H25V21H24V22H23V21Z" fill="#6FB9FF" style="fill:#6FB9FF;fill:color(display-p3 0.4333 0.7261 1.0000);fill-opacity:1;"/>
            </svg>`,
        achieved: false,
      },
    ],
  }),
  actions: {
    toggleAchievement(index) {
      this.achievements[index].achieved = true;
    },
    displayPopup(message) {
      this.popupMessage = message;
      this.showPopup = true;

      // Automatisches Ausblenden nach 2 Sekunden
      setTimeout(() => {
        this.hidePopup();
      }, 2000);
    },
    // Blende Popup aus
    hidePopup() {
      this.showPopup = false;
      this.popupMessage = "";
    },
  },
});
