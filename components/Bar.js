function Bar({
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
        d={`M1908.8,77.8l-859-23.6c-5.3,0-9.4-3.5-11.2-8.8l-10-36.5c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8
	c-5.3,0-10,3.5-11.2,8.8L975,43c-1.2,5.3-6.5,8.8-11.8,8.8h-2.9h-0.6h-2.9c-5.3,0-10-3.5-11.8-8.8l-9.4-34.2
	c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8c-5.3,0-10,3.5-11.2,8.8l-10,36.5c-1.2,5.3-5.9,8.2-11.2,8.8l-859,23.6C4.7,77.8,0,83.1,0,89.5
	v17.1c0,6.5,5.3,11.8,11.2,11.8l859,23.6c5.3,0,9.4,3.5,11.2,8.8l10,36.5c1.2,5.3,5.9,8.8,11.2,8.8h21.8c5.3,0,10-3.5,11.2-8.8
	l9.4-34.2c1.2-5.3,6.5-8.8,11.8-8.8h2.9h0.6h2.9c5.3,0,10,3.5,11.8,8.8l9.4,34.2c1.2,5.3,5.9,8.8,11.2,8.8h21.8
	c5.3,0,10-3.5,11.2-8.8l10-36.5c1.2-5.3,5.9-8.2,11.2-8.8l859-23.6c6.5,0,11.2-5.3,11.2-11.8V89.5
	C1920,83.1,1914.7,77.8,1908.8,77.8z`}
      />
    </svg>
  );
}

export default Bar;
