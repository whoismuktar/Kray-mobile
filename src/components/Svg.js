import { SvgXml } from "react-native-svg";

function Svg({ svgMarkup }) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(
    svgMarkup,
    "application/xml"
  );
  console.log({ svgMarkup });
  const Yiga = () => <SvgXml xml={svgMarkup} width={300} />;
  return <Yiga />;
}

export default Svg;
