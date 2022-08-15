const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const AVERAGE_AMOUNT_ITEMS = 7.5;
const WIDTH = 250;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * AVERAGE_AMOUNT_ITEMS + ITEM_PADDING_TOP,
      width: WIDTH,
    },
  },
};
