import checkoutNodeJssdk from "@paypal/checkout-server-sdk";

const configureEnvironment = function () {
  const clientId =
    "AY6cVdF5rjv7WRiJ1BS6Rrr17mSunVepl__aa-DoKkU8I-RNBTp0KUWJdaaByPU08qeuzcfRfq4-Aejx";
  const clientSecret =
    "EOU-4NkE69S6A97z2xFY4jNckpEPqd-ycSu4ZJ5pvJ-YAgC1PQD4sOGm6FsuQVCwOSSm4v0F5G3cJgbR";

  return process.env.NODE_ENV === "production"
    ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
    : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
};

const client = function () {
  return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment());
};

export default client;
