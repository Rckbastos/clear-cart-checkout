
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CreditCard } from "lucide-react";

const CheckoutForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    card: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment simulated",
        description: "Checkout UI only. Integrate Stripe or another provider for real payments.",
      });
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <div className="flex gap-3">
        <div className="w-1/2">
          <label className="block text-xs font-semibold mb-1 text-gray-700">Name</label>
          <input
            className="w-full rounded-md bg-white/75 border border-gray-200 px-3 py-2 outline-none transition-all focus:(border-primary shadow-md shadow-primary/10) text-gray-900"
            type="text"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-xs font-semibold mb-1 text-gray-700">Email</label>
          <input
            className="w-full rounded-md bg-white/75 border border-gray-200 px-3 py-2 outline-none transition-all focus:(border-primary shadow-md shadow-primary/10) text-gray-900"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@email.com"
          />
        </div>
      </div>
      <div className="relative">
        <label className="block text-xs font-semibold mb-1 text-gray-700">Card Number</label>
        <input
          className="w-full rounded-md bg-white/75 border border-gray-200 px-3 py-2 pr-9 outline-none transition-all focus:(border-primary shadow-md shadow-primary/10) text-gray-900 tracking-widest"
          type="text"
          name="card"
          required
          inputMode="numeric"
          maxLength={19}
          value={form.card}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
        />
        <CreditCard
          size={18}
          className="absolute right-2 top-8 text-gray-400 pointer-events-none"
        />
      </div>
      <div className="flex gap-3">
        <div className="w-1/2">
          <label className="block text-xs font-semibold mb-1 text-gray-700">Expiry</label>
          <input
            className="w-full rounded-md bg-white/75 border border-gray-200 px-3 py-2 outline-none transition-all focus:(border-primary shadow-md shadow-primary/10) text-gray-900"
            type="text"
            name="expiry"
            required
            maxLength={5}
            inputMode="numeric"
            value={form.expiry}
            onChange={handleChange}
            placeholder="MM/YY"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-xs font-semibold mb-1 text-gray-700">CVC</label>
          <input
            className="w-full rounded-md bg-white/75 border border-gray-200 px-3 py-2 outline-none transition-all focus:(border-primary shadow-md shadow-primary/10) text-gray-900"
            type="text"
            name="cvc"
            required
            maxLength={4}
            inputMode="numeric"
            value={form.cvc}
            onChange={handleChange}
            placeholder="123"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full mt-3 inline-flex items-center justify-center rounded-lg bg-primary/90 hover:bg-primary text-white font-semibold py-2.5 transition-all duration-150 shadow-lg shadow-primary/10 disabled:bg-gray-400/80 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="animate-pulse">Processing...</span>
        ) : (
          <>
            <CreditCard size={20} className="mr-2" />
            Pay Now
          </>
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
