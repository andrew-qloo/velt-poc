// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NUMBER_OF_COLUMNS } from "../../../constants";

const getInitialLayout = (numberOfItems = 1) => {
  return new Array(numberOfItems).fill(null).map((item, i) => {
    const y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (i * 2) % NUMBER_OF_COLUMNS,
      y: Math.floor(i / NUMBER_OF_COLUMNS / 2) * y,
      w: 2,
      h: y,
      i: i.toString(),
      minH: 2,
    };
  });
};

export default getInitialLayout;
