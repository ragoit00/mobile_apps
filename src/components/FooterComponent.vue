<template>
  <footer class="footer">
    <div class="footer-buttons">
      <!-- Button 1 -->
      <div class="footer-button" @click="navigateToChatDashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle
            cx="20.5"
            cy="20"
            r="20"
            fill="#9C9C9C"
            style="
              fill: #9c9c9c;
              fill: color(display-p3 0.6125 0.6125 0.6125);
              fill-opacity: 1;
            "
          />
          <g filter="url(#filter0_d_51_753)">
            <ellipse
              cx="16.0001"
              cy="14.5"
              rx="10.5"
              ry="7.5"
              fill="#C51F5D"
              style="
                fill: #c51f5d;
                fill: color(display-p3 0.7725 0.1216 0.3647);
                fill-opacity: 1;
              "
            />
            <path
              d="M5.50003 23.7907L13.0787 21.5528C12.2139 16.8472 11.829 12.4058 8.44969 14.2908L5.50003 23.7907Z"
              fill="#C51F5D"
              style="
                fill: #c51f5d;
                fill: color(display-p3 0.7725 0.1216 0.3647);
                fill-opacity: 1;
              "
            />
          </g>
          <g filter="url(#filter1_d_51_753)">
            <path
              d="M35.5 28.7907L27.5 26.5C27.5 26.5 29.171 17.4058 32.5503 19.2908L35.5 28.7907Z"
              fill="#B0B0B0"
              style="
                fill: #b0b0b0;
                fill: color(display-p3 0.6917 0.6917 0.6917);
                fill-opacity: 1;
              "
            />
            <path
              d="M32.5503 19.2908C29.171 17.4058 27.5 26.5 27.5 26.5L35.5 28.7907L32.5503 19.2908ZM32.5503 19.2908L32.2198 18.2265C32.3352 18.5571 32.4473 18.9151 32.5503 19.2908Z"
              stroke="#C51F5D"
              style="
                stroke: #c51f5d;
                stroke: color(display-p3 0.7725 0.1216 0.3647);
                stroke-opacity: 1;
              "
            />
            <path
              d="M14.9999 19.5C14.9999 21.3677 16.0589 23.1057 17.8659 24.3964C19.672 25.6865 22.1926 26.5 24.9999 26.5C27.8072 26.5 30.3279 25.6865 32.1339 24.3964C33.9409 23.1057 34.9999 21.3677 34.9999 19.5C34.9999 17.6323 33.9409 15.8943 32.1339 14.6036C30.3279 13.3135 27.8072 12.5 24.9999 12.5C22.1926 12.5 19.672 13.3135 17.8659 14.6036C16.0589 15.8943 14.9999 17.6323 14.9999 19.5Z"
              fill="#B0B0B0"
              stroke="#C51F5D"
              style="
                fill: #b0b0b0;
                fill: color(display-p3 0.6917 0.6917 0.6917);
                fill-opacity: 1;
                stroke: #c51f5d;
                stroke: color(display-p3 0.7725 0.1216 0.3647);
                stroke-opacity: 1;
              "
            />
            <path
              d="M26.5 25.5C26.5 25.5 29 26.5 29.5 26.5L31.5 25.5L33.5 24L33 22.5L26.5 25.5Z"
              fill="#B0B0B0"
              style="
                fill: #b0b0b0;
                fill: color(display-p3 0.6917 0.6917 0.6917);
                fill-opacity: 1;
              "
            />
          </g>
          <defs>
            <filter
              id="filter0_d_51_753"
              x="1.5"
              y="7"
              width="29.0001"
              height="24.7906"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_753"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_51_753"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_51_753"
              x="10.4999"
              y="12"
              width="29.7519"
              height="25.5261"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_51_753"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_51_753"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <!-- Button 2 -->
      <div class="footer-button" @click="navigateToAchievements">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle
            cx="20"
            cy="20"
            r="20"
            fill="#9C9C9C"
            style="
              fill: #9c9c9c;
              fill: color(display-p3 0.6125 0.6125 0.6125);
              fill-opacity: 1;
            "
          />
          <rect
            x="16"
            y="29"
            width="8"
            height="3"
            rx="1"
            fill="url(#paint0_linear_102_58)"
            style=""
          />
          <rect
            x="13"
            y="31"
            width="14"
            height="3"
            rx="1"
            fill="url(#paint1_linear_102_58)"
            style=""
          />
          <rect
            x="18"
            y="23"
            width="4"
            height="6"
            fill="url(#paint2_linear_102_58)"
            style=""
          />
          <rect
            x="26"
            y="12"
            width="2"
            height="4"
            fill="#C51F5D"
            style="
              fill: #c51f5d;
              fill: color(display-p3 0.7725 0.1216 0.3647);
              fill-opacity: 1;
            "
          />
          <rect
            x="24"
            y="12"
            width="4"
            height="6"
            rx="2"
            fill="url(#paint3_linear_102_58)"
            style=""
          />
          <ellipse
            cx="20"
            cy="20"
            rx="6"
            ry="5"
            fill="#C51F5D"
            style="
              fill: #c51f5d;
              fill: color(display-p3 0.7725 0.1216 0.3647);
              fill-opacity: 1;
            "
          />
          <rect
            width="2"
            height="4"
            transform="matrix(-1 0 0 1 14 12)"
            fill="#C51F5D"
            style="
              fill: #c51f5d;
              fill: color(display-p3 0.7725 0.1216 0.3647);
              fill-opacity: 1;
            "
          />
          <rect
            width="4"
            height="6"
            rx="2"
            transform="matrix(-1 0 0 1 16 12)"
            fill="url(#paint4_linear_102_58)"
            style=""
          />
          <rect
            x="13"
            y="33"
            width="14"
            height="1"
            fill="#243447"
            style="
              fill: #243447;
              fill: color(display-p3 0.1412 0.2039 0.2784);
              fill-opacity: 1;
            "
          />
          <rect
            x="14"
            y="9"
            width="12"
            height="11"
            fill="#C51F5D"
            style="
              fill: #c51f5d;
              fill: color(display-p3 0.7725 0.1216 0.3647);
              fill-opacity: 1;
            "
          />
          <path
            d="M20 13L20.8981 15.7639H23.8042L21.4531 17.4721L22.3511 20.2361L20 18.5279L17.6489 20.2361L18.5469 17.4721L16.1958 15.7639H19.1019L20 13Z"
            fill="#5F0F2D"
            style="
              fill: #5f0f2d;
              fill: color(display-p3 0.3725 0.0586 0.1759);
              fill-opacity: 1;
            "
          />
          <defs>
            <linearGradient
              id="paint0_linear_102_58"
              x1="20"
              y1="32"
              x2="20"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.59"
                stop-color="#243447"
                style="
                  stop-color: #243447;
                  stop-color: color(display-p3 0.1412 0.2039 0.2784);
                  stop-opacity: 1;
                "
              />
              <stop
                offset="0.855"
                stop-color="#0B1B2F"
                style="
                  stop-color: #0b1b2f;
                  stop-color: color(display-p3 0.0435 0.1074 0.1833);
                  stop-opacity: 1;
                "
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_102_58"
              x1="20"
              y1="34"
              x2="20"
              y2="31"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.59"
                stop-color="#243447"
                style="
                  stop-color: #243447;
                  stop-color: color(display-p3 0.1412 0.2039 0.2784);
                  stop-opacity: 1;
                "
              />
              <stop
                offset="0.855"
                stop-color="#0B1B2F"
                style="
                  stop-color: #0b1b2f;
                  stop-color: color(display-p3 0.0435 0.1074 0.1833);
                  stop-opacity: 1;
                "
              />
            </linearGradient>
            <linearGradient
              id="paint2_linear_102_58"
              x1="20"
              y1="23"
              x2="20"
              y2="29"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.36"
                stop-color="#5F0F2D"
                style="
                  stop-color: #5f0f2d;
                  stop-color: color(display-p3 0.3725 0.0586 0.1759);
                  stop-opacity: 1;
                "
              />
              <stop
                offset="1"
                stop-color="#C51F5D"
                style="
                  stop-color: #c51f5d;
                  stop-color: color(display-p3 0.7725 0.1216 0.3647);
                  stop-opacity: 1;
                "
              />
            </linearGradient>
            <linearGradient
              id="paint3_linear_102_58"
              x1="24"
              y1="15"
              x2="28"
              y2="15"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.52"
                stop-color="#5F0F2D"
                style="
                  stop-color: #5f0f2d;
                  stop-color: color(display-p3 0.3725 0.0586 0.1759);
                  stop-opacity: 1;
                "
              />
              <stop
                offset="0.625"
                stop-color="#C51F5D"
                style="
                  stop-color: #c51f5d;
                  stop-color: color(display-p3 0.7725 0.1216 0.3647);
                  stop-opacity: 1;
                "
              />
            </linearGradient>
            <linearGradient
              id="paint4_linear_102_58"
              x1="0"
              y1="3"
              x2="4"
              y2="3"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.52"
                stop-color="#5F0F2D"
                style="
                  stop-color: #5f0f2d;
                  stop-color: color(display-p3 0.3725 0.0586 0.1759);
                  stop-opacity: 1;
                "
              />
              <stop
                offset="0.625"
                stop-color="#C51F5D"
                style="
                  stop-color: #c51f5d;
                  stop-color: color(display-p3 0.7725 0.1216 0.3647);
                  stop-opacity: 1;
                "
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Button 3 -->
      <div class="footer-button" @click="navigateToSettings">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="#9C9C9C" />
          <rect x="9" y="11" width="22" height="2" fill="#C51F5D" />
          <rect x="9" y="19" width="22" height="2" fill="#C51F5D" />
          <rect x="9" y="27" width="22" height="2" fill="#C51F5D" />
        </svg>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
    // Navigate to Home
    navigateToChatDashboard() {
      this.$router.push("/chatdashboard"); // Uses Vue Router to navigate
    },
    // Navigate to About
    navigateToAchievements() {
      this.$router.push("/achievements");
    },
    // Show Contact Modal or Alert
    navigateToSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>
