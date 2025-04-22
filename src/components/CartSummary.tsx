
import { ShoppingCart, DollarSign } from "lucide-react";

const mockProducts = [
  { name: "Wireless Headphones", price: 129.99 },
  { name: "Eco Sleep Mask", price: 29.99 },
  { name: "Reusable Water Bottle", price: 24.99 },
];

const getTotal = () =>
  mockProducts.reduce((sum, product) => sum + product.price, 0);

const CartSummary = () => (
  <div className="mb-6">
    <div className="flex items-center mb-3">
      <ShoppingCart size={22} className="mr-2 text-primary/70" />
      <span className="font-bold text-lg text-gray-800/80">Your Cart</span>
    </div>
    <div className="space-y-2 mb-2">
      {mockProducts.map((item, i) => (
        <div key={i} className="flex justify-between items-center">
          <span className="text-gray-700">{item.name}</span>
          <span className="text-gray-900 font-medium">${item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center border-t pt-3 mt-2 font-semibold text-lg">
      <span className="flex items-center gap-1">
        <DollarSign size={18} className="text-green-600" /> Total
      </span>
      <span className="text-primary">${getTotal().toFixed(2)}</span>
    </div>
  </div>
);

export default CartSummary;
