const colors = ["black", "red", "orange", "yellow", "green", "blue", "purple"];

const pickRandomly = (array) => array[Math.floor(Math.random() * array.length)];
const generateIconColorPair = () => [
  pickRandomly(colors),
  pickRandomly(process.env.icons),
];
const generateId = () => {
  const issuer = process.env.issuer;
  const icons = new Array(process.env.iconsPerId)
    .fill(0)
    .map(generateIconColorPair);
  const id = `${issuer}_${icons
    .map(([color, icon]) => `${color}_${icon}`)
    .join("_")}`;
  return {
    issuer,
    icons,
    id,
  };
};

export default function handler(req, res) {
  const { count: numberToGenerate } = req.query;
  const ids = new Array(parseInt(numberToGenerate, 10)).fill(0).map(generateId);
  res.status(200).json(ids);
}
