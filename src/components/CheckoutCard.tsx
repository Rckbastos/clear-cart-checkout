
import CartSummary from "./CartSummary";
import CheckoutForm from "./CheckoutForm";

const CheckoutCard = () => (
  <div className="w-full max-w-md mx-auto glass-morphism shadow-xl rounded-2xl p-8 fade-in">
    <CartSummary />
    <CheckoutForm />
    <p className="mt-4 text-center text-xs text-gray-500/80">
      Transactions are secured and encrypted. This is a demo checkout UI &ndash; integrate payments to go live.
    </p>
  </div>
);

export default CheckoutCard;
