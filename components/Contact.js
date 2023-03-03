function Contact({ className = "", fill = "#FFFFFF", stroke = "#000000" }) {
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
        d="M20.8,10.4h8.3 M18.8,6.2h12.5c2.3,0,4.2,1.9,4.2,4.2v29.2c0,2.3-1.9,4.2-4.2,4.2H18.8c-2.3,0-4.2-1.9-4.2-4.2
		V10.4C14.6,8.1,16.4,6.2,18.8,6.2z"
        fill={fill}
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Contact;
