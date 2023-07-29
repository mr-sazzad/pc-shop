/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "antd";

const contentStyle = {
  height: "300px",
  width: "100%",
  objectFit: "cover",
  backgroundPosition: "top",
};
const Banner = () => (
  <Carousel autoplay>
    <div>
      <img
        src="https://global.redmagic.gg/cdn/shop/files/REDMAGIC-PC-Gaming-Banner-PC_2x_52b1188b-5939-40af-b20e-183137d74067_x670@2x.jpg?v=1680840925"
        style={contentStyle}
      />
    </div>
  </Carousel>
);
export default Banner;
