
import CheckoutCard from "@/components/CheckoutCard";
import { Link } from "react-router-dom";

const CheckoutPreview = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-purple-50 to-indigo-100 dark:from-neutral-900 dark:via-indigo-950 dark:to-gray-900 transition-all duration-300">
      <div className="mb-10">
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow hover:bg-primary/80 transition-all font-bold">
          Ir para o Dashboard
        </Link>
      </div>
      <CheckoutCard />
    </div>
  );
};

export default CheckoutPreview;
