function Border({
  className = "",
  color1 = "#000000",
  color2 = "#ffffff",
  gradientId = "a",
}) {
  return (
    <svg
      className={className}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns-xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1920 202"
      xmlSpace="preserve"
    >
      <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id={gradientId}>
        <stop stopOpacity="1" offset="0%" stopColor={color1} />
        <stop stopOpacity="1" offset="100%" stopColor={color2} />
      </linearGradient>
      <path
        fill={`url(#${gradientId})`}
        d="M1095.9,104.8l-26.3-96.3c-1.4-5-6-8.5-11.2-8.5h-34.7c-5.2,0-9.8,3.5-11.2,8.5l-24.5,89.5
 c-1.4,5.3-6.3,8.8-11.8,8.5l-15.7-0.8c-0.4,0-0.8,0-1.2,0l-15.7,0.8c-5.4,0.3-10.3-3.3-11.8-8.5L907.4,8.5c-1.4-5-6-8.5-11.2-8.5
 h-34.7c-5.2,0-9.8,3.5-11.2,8.5l-26.3,96.3c-1.3,4.8-5.6,8.3-10.6,8.5L0,155.6L0,202h1920v-46.4l-813.5-42.3
 C1101.5,113.1,1097.2,109.7,1095.9,104.8z"
      />
    </svg>
  );
}

export default Border;
