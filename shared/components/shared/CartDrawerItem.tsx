import React from "react";
import { cn } from "../../lib/utils";
import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { Trash2Icon } from "lucide-react";
import CountButton from "./count-button";
interface Props extends CartItemProps {
  className?: string;
  onClickCountButton?:(type:'plus' | 'minus') => void
  onClickRemove?: () => void
}

const CartDrawerItem: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  price,
  quantity,
  details,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        "flex bg-white p-5 gap-6",
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className
      )}
    >
      <CartItem.Image src={imageUrl} />
      <div className="flex-1">
        <CartItem.Info details={details} name={name} />
        <hr className="my-4" />
        <div className="flex items-center justify-between ">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="relative flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onClickRemove}
              className=" text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawerItem;
