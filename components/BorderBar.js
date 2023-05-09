import { useEffect, useState } from "react";
import { theme } from "../tailwind.config";
import { useMediaQuery } from "react-responsive";

function BorderBar({
  className = "",
  fillColor1 = "#000000",
  fillColor2 = "#FFFFFF",
  gradientId = "borderBar",
}) {
  let size = {
    isLarge: useMediaQuery({ minWidth: theme.extend.screens.xl }),
    isMedium: useMediaQuery({ minWidth: theme.extend.screens.md }),
  };

  return (
    <div className="w-full">
      {size.isLarge ? (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 2320 98"
          xmlSpace="preserve"
        >
          <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id={gradientId}>
            <stop stopOpacity="1" offset="0%" stopColor={fillColor1} />
            <stop stopOpacity="1" offset="100%" stopColor={fillColor2} />
          </linearGradient>
          <path
            fill={`url(#${gradientId})`}
            d="M2308.8,77.8l-1059-23.6c-5.3,0-9.4-3.5-11.2-8.8l-10-36.5c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8
  c-5.3,0-10,3.5-11.2,8.8L1175,43c-1.2,5.3-6.5,8.8-11.8,8.8h-2.9h-0.6h-2.9c-5.3,0-10-3.5-11.8-8.8l-9.4-34.2
  c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8c-5.3,0-10,3.5-11.2,8.8l-10,36.5c-1.2,5.3-5.9,8.2-11.2,8.8L11.2,77.8C4.7,77.8,0,83.1,0,89.5V98
  h2320v-8.5C2320,83.1,2314.7,77.8,2308.8,77.8z"
          />
        </svg>
      ) : size.isMedium ? (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1546.7 98"
          xmlSpace="preserve"
        >
          <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id={gradientId}>
            <stop stopOpacity="1" offset="0%" stopColor={fillColor1} />
            <stop stopOpacity="1" offset="100%" stopColor={fillColor2} />
          </linearGradient>
          <path
            fill={`url(#${gradientId})`}
            d="M1535.5,77.8L863.1,54.2c-5.3,0-9.4-3.5-11.2-8.8l-10-36.5c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8
  c-5.3,0-10,3.5-11.2,8.8L788.3,43c-1.2,5.3-6.5,8.8-11.8,8.8h-2.9H773h-2.9c-5.3,0-10-3.5-11.8-8.8l-9.4-34.2
  C747.7,3.5,743,0,737.7,0h-21.8c-5.3,0-10,3.5-11.2,8.8l-10,36.5c-1.2,5.3-5.9,8.2-11.2,8.8L11.2,77.8C4.7,77.8,0,83.1,0,89.5V98
  h1546.7v-8.5C1546.7,83.1,1541.4,77.8,1535.5,77.8z"
          />
        </svg>
      ) : (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1160 98"
          xmlSpace="preserve"
        >
          <linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id={gradientId}>
            <stop stopOpacity="1" offset="0%" stopColor={fillColor1} />
            <stop stopOpacity="1" offset="100%" stopColor={fillColor2} />
          </linearGradient>
          <path
            fill={`url(#${gradientId})`}
            d="M1148.8,77.8l-479-23.6c-5.3,0-9.4-3.5-11.2-8.8l-10-36.5c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8
  c-5.3,0-10,3.5-11.2,8.8L595,43c-1.2,5.3-6.5,8.8-11.8,8.8h-2.9h-0.6h-2.9c-5.3,0-10-3.5-11.8-8.8l-9.4-34.2
  c-1.2-5.3-5.9-8.8-11.2-8.8h-21.8c-5.3,0-10,3.5-11.2,8.8l-10,36.5c-1.2,5.3-5.9,8.2-11.2,8.8l-479,23.7C4.7,77.8,0,83.1,0,89.5V98
  h1160v-8.5C1160,83.1,1154.7,77.8,1148.8,77.8z"
          />
        </svg>
      )}
    </div>
  );
}

export default BorderBar;
