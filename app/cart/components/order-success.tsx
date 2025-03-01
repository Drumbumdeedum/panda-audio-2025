import { PANDA_AUDIO_MAILTO_ADDRESS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="max-w-xl mx-auto py-4 space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Order Successful!</h1>
        <p className="text-primary mb">
          Your order has been submitted!
          <br />A payment link will be sent to your email shortly.
        </p>
        <p className="text-muted-foreground">
          If you would like to modify your order or have any questions, please
          contact us at{" "}
          <a
            href={`mailto:${PANDA_AUDIO_MAILTO_ADDRESS}`}
            className="hover:text-primary transition-colors"
          >
            info@panda-audio.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
