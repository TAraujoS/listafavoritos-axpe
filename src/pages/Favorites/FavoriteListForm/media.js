import { generateMedia } from "styled-media-query"

const media = generateMedia({
  small: "640px",
  medium: "768px",
  large: "1024px",
  huge: "1280px",
})

export default media