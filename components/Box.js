function Box({ className = "", fill = "#FFFFFF", stroke = "#000000" }) {
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
        d="M39.9282 11.5188L26.3865 6.73942C25.4892 6.42272 24.5105 6.42272 23.6132 6.73942L10.0714 11.5188C8.40555 12.1068 7.2915 13.6814 7.2915 15.448V31.7308C7.2915 33.3448 8.22363 34.8137 9.68402 35.5008L23.2257 41.8735C24.3494 42.4023 25.6503 42.4023 26.774 41.8733L40.3157 35.5008C41.7761 34.8137 42.7082 33.3448 42.7082 31.7308V15.448C42.7082 13.6814 41.5942 12.1068 39.9282 11.5188Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M25 20.8333L36.7187 14.8438M25 20.8333L13.2812 14.8438M25 20.8333V36.4583"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Box;
