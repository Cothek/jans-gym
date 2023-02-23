function Heart({ className = "", fill = "#FFFFFF", stroke = "#000000" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      xmlSpace="preserve"
    >
      <path
        d="M33.6758 8.33333C30.0802 8.33333 27.8208 10.123 26.5296 11.6955C25.9215 12.4362 24.2798 12.4361 23.6717 11.6954C22.3806 10.1228 20.1214 8.33333 16.525 8.33333C10.1128 8.33333 6.25 14.4465 6.25 19.4845C6.25 26.0827 17.7625 35.3844 22.7937 39.1342C24.169 40.1594 26.0321 40.1596 27.4075 39.1346C32.4387 35.3854 43.951 26.0862 43.951 19.486C43.951 14.4465 40.091 8.33333 33.6758 8.33333Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Heart;
