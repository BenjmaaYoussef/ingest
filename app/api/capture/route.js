import { NextResponse } from "next/server";

import paypal from "@paypal/checkout-server-sdk";
import client from "@/app/utils/paypal";
import { createClient } from "@/app/utils/server";

export async function POST(req, res) {
  const supabase = createClient();
  const data = await req.json();

  if (req.method != "POST")
    return NextResponse.json({ success: false, message: "Not Found" });

  if (!data.orderID)
    return NextResponse.json({
      success: false,
      message: "Please Provide Order ID",
    });

  //Capture order to complete payment
  const { orderID } = data;
  let clientId =
    "AQyeBf3JkDP-AtSgQGRLhaiZn6UZJ_mGTZhhEeJL_mxiBShHG7yy8yWS_BIU6YzSe_x3WqCtNhxLlUOH";
  let clientSecret =
    "EC_qdVt3dCEcqORPEQPBv9EDv1UpsCK3o9OareoCluOtkg7SuE4kVF4_6RlI7HvmUUhiPVlCOv5JMkSM";

  // This sample uses SandboxEnvironment. In production, use LiveEnvironment
  let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
  let PaypalClient = new paypal.core.PayPalHttpClient(environment);
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  const response = await PaypalClient.execute(request);
  if (!response) {
    return NextResponse.json({
      success: false,
      message: "Some Error Occured at backend",
    });
  }
  console.log(data.test);
  const { data: testdata, error: testerror } = await supabase
    .from("tests")
    .update({ paid: true })
    .eq("id", data.test);
  if (testerror) {
    return NextResponse.json({ success: false, data: false });
  } else {
    return NextResponse.json({ success: true, data: true });
  }

  // Your Custom Code to Update Order Status
  // And Other stuff that is related to that order, like wallet
  // Here I am updateing the wallet and sending it back to frontend to update it on frontend
}
