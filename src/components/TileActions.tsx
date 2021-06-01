import React from "react";
import { Box } from "./Box";

export const TileActions = () => {
  return (
    <Box css={{ display: "flex" }}>
      <Box css={{ p: "10px", width: "50px", backgroundColor: "white" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          viewBox="0 0 24 24"
        >
          <title>icon-favourite</title>
          <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"></path>
        </svg>
      </Box>
      <Box css={{ bg: "$black", p: "10px", width: "50px" }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              d="M7.781 14.063h12.704a.7.7 0 00.675-.51l2.813-9.844a.703.703 0 00-.676-.897H6.158L5.655.551A.703.703 0 004.97 0H.703a.703.703 0 100 1.406h3.701l2.54 11.426a2.11 2.11 0 00-1.272 1.934c0 1.163.946 2.11 2.11 2.11h12.703a.703.703 0 100-1.407H7.78a.704.704 0 010-1.406zm-.703 4.922c0 1.163.946 2.109 2.11 2.109 1.163 0 2.11-.946 2.11-2.11 0-1.163-.947-2.109-2.11-2.109-1.164 0-2.11.947-2.11 2.11zm9.89 0c0 1.163.947 2.109 2.11 2.109 1.164 0 2.11-.946 2.11-2.11 0-1.163-.946-2.109-2.11-2.109-1.163 0-2.11.947-2.11 2.11z"
              fill="#fff"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      </Box>
    </Box>
  );
};