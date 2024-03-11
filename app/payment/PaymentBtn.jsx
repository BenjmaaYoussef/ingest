"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function PaymentBtn({ price, userId }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const test = searchParams.get("test");
  const paypalCreateOrder = async () => {
    try {
      let response = await axios.post("/api/paypal/", {
        user_id: userId,
        order_price: price,
      });
      return response.data.data.response.result.id;
    } catch (err) {
      // Your custom code to show an error like showing a toast:
      // toast.error('Some Error Occured')
      return null;
    }
  };
  const paypalCaptureOrder = async (orderID) => {
    try {
      let response = await axios.post("/api/capture", {
        orderID,
        test,
      });
      console.log(response.data);
      if (response.data.success) {
        router.push("/dashboard/report/" + test);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQyeBf3JkDP-AtSgQGRLhaiZn6UZJ_mGTZhhEeJL_mxiBShHG7yy8yWS_BIU6YzSe_x3WqCtNhxLlUOH",
        currency: "USD",
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{
          color: "gold",
          shape: "rect",
          label: "pay",
          height: 50,
        }}
        createOrder={async (data, actions) => {
          let order_id = await paypalCreateOrder();
          return order_id + "";
        }}
        onApprove={async (data, actions) => {
          let response = await paypalCaptureOrder(data.orderID);
          if (response) return true;
        }}
      />
    </PayPalScriptProvider>
  );
}
