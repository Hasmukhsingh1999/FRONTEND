"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const ClientProvider = ({ children }) => {
  const [client] = useState(new QueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ClientProvider;
