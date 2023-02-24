function BarLarge({
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
      viewBox="0 0 2320 202"
      xmlSpace="preserve"
    >
      <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id={gradientId}>
        <stop stopOpacity="1" offset="0%" stopColor={color1} />
        <stop stopOpacity="1" offset="100%" stopColor={color2} />
      </linearGradient>
      <path
        fill={`url(#${gradientId})`}
        d={`m2308.8,77.8l-1059-23.6c-5.3,0-9.4-3.5-11.2-8.8l-10-36.5c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8c-5.3,0-10,3.5-11.2,8.8l-9.4,34.2c-1.2,5.3-6.5,8.8-11.8,8.8h-6.5c-5.3,0-10-3.5-11.8-8.8l-9.4-34.2c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8c-5.3,0-10,3.5-11.2,8.8l-10,36.5c-1.2,5.3-5.9,8.2-11.2,8.8L11.2,77.8c-6.5,0-11.2,5.3-11.2,11.8v17.1c0,6.5,5.3,11.8,11.2,11.8l1059,23.6c5.3,0,9.4,3.5,11.2,8.8l10,36.5c1.2,5.3,5.9,8.8,11.2,8.8h21.8c5.3,0,10-3.5,11.2-8.8l9.4-34.2c1.2-5.3,6.5-8.8,11.8-8.8h6.5c5.3,0,10,3.5,11.8,8.8l9.4,34.2c1.2,5.3,5.9,8.8,11.2,8.8h21.8c5.3,0,10-3.5,11.2-8.8l10-36.5c1.2-5.3,5.9-8.2,11.2-8.8l1059-23.6c6.5,0,11.2-5.3,11.2-11.8v-17.1c0-6.5-5.3-11.8-11.2-11.8Z`}
      />
    </svg>
  );
}

export default BarLarge;
