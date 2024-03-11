import { NextResponse } from "next/server";

import paypal from "@paypal/checkout-server-sdk";
import client from "@/app/utils/paypal";

export async function POST(req, res) {
  if (req.method != "POST")
    return NextResponse.json({
      success: false,
      message: "Not Found",
    });
  const data = await req.json();

  if (!data.order_price || !data.user_id)
    return NextResponse.json({
      success: false,
      message: "Please Provide order_price And User ID",
    });

  try {
    let clientId =
      "AQyeBf3JkDP-AtSgQGRLhaiZn6UZJ_mGTZhhEeJL_mxiBShHG7yy8yWS_BIU6YzSe_x3WqCtNhxLlUOH";
    let clientSecret =
      "EC_qdVt3dCEcqORPEQPBv9EDv1UpsCK3o9OareoCluOtkg7SuE4kVF4_6RlI7HvmUUhiPVlCOv5JMkSM";

    // This sample uses SandboxEnvironment. In production, use LiveEnvironment
    let environment = new paypal.core.SandboxEnvironment(
      clientId,
      clientSecret
    );
    let PaypalClient = new paypal.core.PayPalHttpClient(environment);
    //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
    const request = new paypal.orders.OrdersCreateRequest();
    request.headers["prefer"] = "return=representation";
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: data.order_price + "",
          },
        },
      ],
    });
    const response = await PaypalClient.execute(request);
    if (response.statusCode !== 201) {
      console.log("RES: ", response);
      return NextResponse.json({
        success: false,
        message: "Some Error Occured at backend",
      });
    }

    // Your Custom Code for doing something with order
    // Usually Store an order in the database like MongoDB

    return NextResponse.json({ success: true, data: { response } });
  } catch (err) {
    console.log("Err at Create Order: ", err);
    return NextResponse.json({
      success: false,
      message: "Could Not Found the user",
    });
  }
}
